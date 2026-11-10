import wave
import math
import struct
import random

def create_wav(filename, duration, sample_rate, num_channels, generator_func):
    n_samples = int(duration * sample_rate)
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(num_channels)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        
        frames = bytearray()
        for i in range(n_samples):
            t = i / sample_rate
            val_l, val_r = generator_func(t, duration, i)
            val_l = max(-1.0, min(1.0, val_l))
            val_r = max(-1.0, min(1.0, val_r))
            int_l = int(val_l * 32767)
            int_r = int(val_r * 32767)
            frames.extend(struct.pack('<hh', int_l, int_r))
        wav_file.writeframes(frames)
    print(f"Generated: {filename} ({duration}s)")

# 1. Digital Alarm Beep (Beep-Beep-Beep-Beep)
def gen_alarm(t, dur, i):
    # 4 beeps per second
    cycle = (t * 4) % 1.0
    if cycle < 0.5:
        # High pitched piercing alarm tone
        freq = 1800.0 if (int(t * 8) % 2 == 0) else 1200.0
        val = 0.5 * (1.0 if math.sin(2 * math.pi * freq * t) > 0 else -1.0)
    else:
        val = 0.0
    return val, val

# 2. Meme Airhorn Sound (Classic 3-tone reggae / meme airhorn)
def gen_airhorn(t, dur, i):
    # Airhorn chord: ~466Hz (Bb4), ~587Hz (D5), ~700Hz (F5)
    f1, f2, f3 = 466.16, 587.33, 698.46
    
    # 3 bursts
    burst_time = t % 0.4
    if burst_time < 0.28:
        # Sawtooth / harsh brass harmonic
        s1 = math.sin(2 * math.pi * f1 * t) + 0.5 * math.sin(4 * math.pi * f1 * t)
        s2 = math.sin(2 * math.pi * f2 * t) + 0.5 * math.sin(4 * math.pi * f2 * t)
        s3 = math.sin(2 * math.pi * f3 * t) + 0.5 * math.sin(4 * math.pi * f3 * t)
        raw = (s1 + s2 + s3) * 0.3
        dist = math.tanh(raw * 2.5) * 0.7
        return dist, dist
    return 0.0, 0.0

# 3. Head Thud / Slap onto desk
def gen_thud(t, dur, i):
    # Initial slap crack
    noise = (random.random() * 2 - 1) * math.exp(-t * 80)
    # Deep wood desk thud (80Hz dropping to 40Hz)
    freq = 40 + 70 * math.exp(-t * 20)
    thump = math.sin(2 * math.pi * freq * t) * math.exp(-t * 8)
    val = (noise * 0.7 + thump * 0.9) * min(1.0, (dur - t) / 0.05)
    return val, val

# 4. Keyboard clatter (typing zzzzzzz)
def gen_keyboard(t, dur, i):
    # Rapid random click clicks
    tap = (random.random() * 2 - 1) * math.exp(-(t % 0.08) * 120)
    return tap * 0.6, tap * 0.6

# 5. Toaster Ding / Pop
def gen_toaster(t, dur, i):
    # Mechanical pop at t=0
    pop = (random.random() * 2 - 1) * math.exp(-t * 100) if t < 0.1 else 0
    # Bell chime at 2400Hz decaying
    t_bell = max(0, t - 0.05)
    bell = (math.sin(2 * math.pi * 2400 * t_bell) + 0.4 * math.sin(2 * math.pi * 4800 * t_bell)) * math.exp(-t_bell * 3.5)
    val = pop * 0.5 + bell * 0.6
    return val, val

# 6. Lo-Fi Chill Background Beat (loopable chill hop synth groove, 30s)
def gen_chill_beat(t, dur, i):
    # BPM = 80 (0.75s per beat)
    beat_t = t % 0.75
    measure_t = t % 3.0
    
    # Kick on beat 0 and 1.5
    kick = 0
    if beat_t < 0.2 and (int(t / 0.75) % 4 in [0, 2]):
        kick = math.sin(2 * math.pi * (50 + 60 * math.exp(-beat_t * 25)) * beat_t) * math.exp(-beat_t * 12)
        
    # Snare on beat 1 and 3
    snare = 0
    if beat_t < 0.25 and (int(t / 0.75) % 4 in [1, 3]):
        snare = (random.random() * 2 - 1) * math.exp(-beat_t * 15) * 0.4
        
    # Warm electric piano chord chords
    chords = [220, 261.63, 329.63, 392.0] # Am7
    chord_tone = sum(math.sin(2 * math.pi * f * t) for f in chords) * 0.05
    
    # Vinyl crackle
    crackle = (random.random() * 2 - 1) * 0.02 if random.random() < 0.2 else 0
    
    val = (kick * 0.6 + snare * 0.5 + chord_tone + crackle) * 0.55
    return val, val

base_path = "/data/user/0/com.termux/files/home/.gemini/antigravity-cli/scratch/remotion-glow-vector/public/audio"
create_wav(f"{base_path}/alarm_clock.wav", 3.0, 44100, 2, gen_alarm)
create_wav(f"{base_path}/airhorn.wav", 1.8, 44100, 2, gen_airhorn)
create_wav(f"{base_path}/head_thud.wav", 1.5, 44100, 2, gen_thud)
create_wav(f"{base_path}/keyboard_tap.wav", 2.5, 44100, 2, gen_keyboard)
create_wav(f"{base_path}/toaster_ding.wav", 2.0, 44100, 2, gen_toaster)
create_wav(f"{base_path}/chill_beat.wav", 24.0, 44100, 2, gen_chill_beat)
print("All comedy SFX generated successfully!")
