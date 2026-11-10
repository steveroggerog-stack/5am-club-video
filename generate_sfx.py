import wave
import math
import struct
import random

def create_wav(filename, duration, sample_rate, num_channels, generator_func):
    n_samples = int(duration * sample_rate)
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(num_channels)
        wav_file.setsampwidth(2) # 16-bit
        wav_file.setframerate(sample_rate)
        
        frames = bytearray()
        for i in range(n_samples):
            t = i / sample_rate
            # generator_func returns left, right in range [-1.0, 1.0]
            val_l, val_r = generator_func(t, duration, i)
            val_l = max(-1.0, min(1.0, val_l))
            val_r = max(-1.0, min(1.0, val_r))
            int_l = int(val_l * 32767)
            int_r = int(val_r * 32767)
            frames.extend(struct.pack('<hh', int_l, int_r))
        wav_file.writeframes(frames)
    print(f"Generated: {filename} ({duration}s)")

# 1. Ambient Drone (Cinematic dark sci-fi synth drone, 30s)
def gen_drone(t, dur, i):
    f0 = 55.0 # A1 note
    f1 = 55.4 # detuned for stereo beating
    # LFO
    lfo1 = 0.5 + 0.5 * math.sin(2 * math.pi * 0.2 * t)
    lfo2 = 0.5 + 0.5 * math.cos(2 * math.pi * 0.15 * t)
    
    # Sub bass + harmonics
    harmonics_l = (
        0.5 * math.sin(2 * math.pi * f0 * t) +
        0.25 * math.sin(2 * math.pi * f0 * 2 * t) +
        0.12 * math.sin(2 * math.pi * f0 * 3 * t + 0.3) +
        0.08 * math.sin(2 * math.pi * f0 * 4 * t)
    )
    harmonics_r = (
        0.5 * math.sin(2 * math.pi * f1 * t) +
        0.25 * math.sin(2 * math.pi * f1 * 2 * t + 0.2) +
        0.12 * math.sin(2 * math.pi * f1 * 3 * t) +
        0.08 * math.sin(2 * math.pi * f1 * 4 * t + 0.5)
    )
    
    # Envelope: gentle fade-in, fade-out
    env = min(1.0, t / 2.0) * min(1.0, (dur - t) / 2.0)
    
    # Subtle resonant filter movement
    reso = 0.05 * math.sin(2 * math.pi * (220 + 60 * lfo1) * t)
    
    left = (harmonics_l + reso) * env * 0.6
    right = (harmonics_r + reso) * env * 0.6
    return left, right

# 2. Electric Spark / Neon Arc (Drawing SFX, 4s loopable/repeatable)
def gen_spark(t, dur, i):
    # Base hum: 120Hz (AC hum) + 240Hz
    hum = 0.2 * math.sin(2 * math.pi * 120 * t) + 0.15 * math.sin(2 * math.pi * 240 * t)
    # Buzz & crackle
    noise = (random.random() * 2 - 1)
    crackle = noise if random.random() < 0.15 else 0
    # Spark burst envelope
    burst = math.sin(2 * math.pi * 8 * t) ** 2
    
    signal = (hum * 0.4 + crackle * 0.4 + (noise * 0.1 * burst))
    env = min(1.0, t / 0.1) * min(1.0, (dur - t) / 0.2)
    return signal * env * 0.7, signal * env * 0.7

# 3. Whoosh / Transition Sweep (1.5s)
def gen_whoosh(t, dur, i):
    # Fast frequency-swept noise simulation
    env = math.sin(math.pi * (t / dur)) ** 3
    # center frequency shifts up then down
    cf = 200 + 1200 * math.sin(math.pi * (t / dur))
    tone = math.sin(2 * math.pi * cf * t)
    noise = (random.random() * 2 - 1)
    
    val = (0.6 * noise + 0.4 * tone) * env
    # stereo pan left to right
    pan = t / dur
    return val * (1 - pan) * 0.8, val * pan * 0.8

# 4. Tension Riser (4s)
def gen_riser(t, dur, i):
    p = t / dur # 0 to 1
    # Exponential frequency rise from 100Hz to 1600Hz
    freq = 80 * (20 ** p)
    tone = math.sin(2 * math.pi * freq * t)
    # Pulsing rate increases with time
    pulse = 0.5 + 0.5 * math.sin(2 * math.pi * (2 + 18 * (p ** 2)) * t)
    
    env = (p ** 1.8) * min(1.0, (dur - t) / 0.05)
    signal = tone * pulse * env * 0.75
    return signal, signal

# 5. Bass Impact Boom / Cinematic Slam (2.5s)
def gen_impact(t, dur, i):
    # Initial sharp attack crack
    attack_noise = (random.random() * 2 - 1) * math.exp(-t * 60)
    # Pitch drop from 160Hz down to 35Hz
    freq = 35 + 130 * math.exp(-t * 12)
    sub = math.sin(2 * math.pi * freq * t)
    
    # Sub decay envelope
    sub_env = math.exp(-t * 2.2)
    # Distortion saturation
    raw = sub * 1.5 + attack_noise * 0.8
    distorted = math.tanh(raw)
    
    decay = min(1.0, (dur - t) / 0.1)
    val = distorted * sub_env * decay * 0.9
    return val, val

base_path = "/data/user/0/com.termux/files/home/.gemini/antigravity-cli/scratch/remotion-glow-vector/public/audio"
create_wav(f"{base_path}/ambient_drone.wav", 24.0, 44100, 2, gen_drone)
create_wav(f"{base_path}/electric_spark.wav", 4.0, 44100, 2, gen_spark)
create_wav(f"{base_path}/whoosh_fast.wav", 1.5, 44100, 2, gen_whoosh)
create_wav(f"{base_path}/tension_riser.wav", 4.0, 44100, 2, gen_riser)
create_wav(f"{base_path}/bass_impact.wav", 3.0, 44100, 2, gen_impact)
print("All SFX successfully generated!")
