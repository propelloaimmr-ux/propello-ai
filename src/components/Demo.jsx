import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaCode, FaDesktop } from 'react-icons/fa';

const waveHeights = Array.from({ length: 40 }, (_, i) => 8 + Math.abs(Math.sin(i * 0.6)) * 32);

const formatTime = (secs) => {
  if (!isFinite(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const Demo = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <style>{`
        /* Responsive container */
        #demo .container {
          background: white;
          padding: 5rem 3rem;
          border-radius: 48px;
          max-width: 1300px;
          width: 100%;
          position: relative;
          z-index: 1;
          border: 2px solid rgba(230, 61, 0, 0.2);
          box-shadow:
            0 0 30px rgba(230, 103, 0, 0.1),
            inset 0 0 40px rgba(230, 61, 0, 0.1);
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        #demo .container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(230, 61, 0, 0.05) 0%, transparent 70%);
          z-index: 0;
        }

        #demo .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        #demo .video-box {
          position: relative;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #f8f9fa, #f1f3f5);
          border-radius: 32px;
          border: 1px solid rgba(230, 61, 0, 0.3);
          box-shadow:
            inset 0 0 25px rgba(230, 61, 0, 0.1),
            0 10px 30px rgba(230, 103, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          padding: 2rem;
          box-sizing: border-box;
        }

        #demo .audio-label {
          position: absolute;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #E66700;
          opacity: 0.75;
        }

        #demo .audio-waveform {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          height: 44px;
          width: 100%;
          max-width: 320px;
        }

        #demo .audio-bar {
          flex: 1;
          max-width: 5px;
          border-radius: 3px;
          background: linear-gradient(180deg, #E63D00, #ffb366);
          transform: scaleY(0.35);
          transform-origin: center;
          transition: transform 0.3s ease;
          opacity: 0.5;
        }

        #demo .audio-bar.active {
          opacity: 1;
          animation: demo-wave 1.1s ease-in-out infinite;
        }

        @keyframes demo-wave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }

        #demo .audio-progress-track {
          width: 100%;
          max-width: 340px;
          height: 4px;
          border-radius: 2px;
          background: rgba(230, 61, 0, 0.15);
          overflow: hidden;
        }

        #demo .audio-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #E63D00, #E66700);
          border-radius: 2px;
          transition: width 0.15s linear;
        }

        #demo .audio-time {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 340px;
          font-size: 0.78rem;
          color: #78716c;
          margin-top: -0.75rem;
        }

        #demo .video-box:hover {
          transform: translateY(-5px);
          box-shadow: 
            inset 0 0 25px rgba(230, 61, 0, 0.1),
            0 15px 40px rgba(230, 103, 0, 0.15);
        }

        #demo .play-btn {
          position: relative;
          z-index: 2;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle at center, rgba(230, 61, 0, 0.9) 0%, rgba(230, 103, 0, 0.9) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow:
            0 0 20px rgba(230, 61, 0, 0.5),
            0 0 40px rgba(230, 103, 0, 0.5);
          border: 2px solid white;
          flex-shrink: 0;
        }

        #demo .play-btn.is-playing {
          font-size: 2.1rem;
        }

        #demo .play-btn:hover,
        #demo .play-btn:active {
          transform: scale(1.1);
          box-shadow:
            0 0 30px rgba(230, 61, 0, 0.7),
            0 0 50px rgba(230, 103, 0, 0.7);
        }

        #demo .features {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        #demo .feature-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: white;
          padding: 1.5rem;
          border-radius: 24px;
          border: 1px solid rgba(230, 61, 0, 0.2);
          box-shadow: 
            0 5px 20px rgba(230, 103, 0, 0.05),
            inset 0 0 20px rgba(230, 61, 0, 0.05);
          transition: all 0.3s ease;
        }

        #demo .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 10px 30px rgba(230, 103, 0, 0.1),
            inset 0 0 20px rgba(230, 61, 0, 0.1);
        }

        #demo .feature-icon {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          flex-shrink: 0;
          margin-top: 0.3rem;
        }

        #demo .feature-text h3 {
          font-size: 1.5rem;
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        #demo .feature-text p {
          color: #555;
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        #demo .demo-btn {
          margin-top: 1rem;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(to right, #E63D00, #E66700);
          padding: 1.2rem 2.5rem;
          font-weight: 600;
          color: white;
          font-size: 1.1rem;
          border-radius: 999px;
          border: none;
          box-shadow:
            0 0 20px rgba(230, 61, 0, 0.3),
            0 0 40px rgba(230, 103, 0, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        #demo .demo-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #E66700, #E63D00);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        #demo .demo-btn:hover,
        #demo .demo-btn:active {
          transform: translateY(-3px);
          box-shadow:
            0 0 30px rgba(230, 61, 0, 0.4),
            0 0 50px rgba(230, 103, 0, 0.3);
        }

        #demo .demo-btn:hover::before {
          opacity: 1;
        }

        #demo h2 {
          text-align: center;
          font-size: 3.2rem;
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 3.5rem;
          font-weight: 800;
          position: relative;
          display: inline-block;
          padding-bottom: 1rem;
        }

        #demo h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #E63D00, #E66700);
          border-radius: 2px;
        }

        @media (max-width: 1200px) {
          #demo .container {
            padding: 4rem 2.5rem;
          }
          
          #demo .grid {
            gap: 2rem;
          }
          
          #demo .play-btn {
            width: 100px;
            height: 100px;
            font-size: 2.5rem;
          }
          
          #demo h2 {
            font-size: 2.8rem;
          }
          
          #demo .feature-item {
            padding: 1.25rem;
          }
          
          #demo .feature-icon {
            font-size: 2rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.3rem;
          }
          
          #demo .demo-btn {
            padding: 1rem 2rem;
          }
        }

        @media (max-width: 992px) {
          #demo .container {
            max-width: 95%;
            padding: 3.5rem 2rem;
            border-radius: 36px;
          }
          
          #demo .grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          #demo .video-box {
            padding-top: 75%;
          }
          
          #demo .play-btn {
            width: 90px;
            height: 90px;
            font-size: 2.2rem;
          }
          
          #demo h2 {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }
          
          #demo .features {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          #demo .container {
            padding: 3rem 1.5rem;
          }
          
          #demo h2 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
          }
          
          #demo .feature-item {
            padding: 1.2rem;
            gap: 1.2rem;
          }
          
          #demo .feature-icon {
            font-size: 1.8rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.2rem;
          }
          
          #demo .feature-text p {
            font-size: 0.95rem;
          }
          
          #demo .demo-btn {
            padding: 0.9rem 1.8rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          #demo .container {
            padding: 2.5rem 1.5rem;
            border-radius: 28px;
          }
          
          #demo h2 {
            font-size: 2rem;
            padding-bottom: 0.8rem;
          }
          
          #demo h2::after {
            width: 80px;
            height: 3px;
          }
          
          #demo .play-btn {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
          
          #demo .feature-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem;
          }
          
          #demo .feature-icon {
            margin-top: 0;
          }
          
          #demo .demo-btn {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          #demo .container {
            padding: 2rem 1.25rem;
            border-radius: 24px;
          }
          
          #demo h2 {
            font-size: 1.8rem;
          }
          
          #demo .feature-text h3 {
            font-size: 1.1rem;
          }
          
          #demo .feature-text p {
            font-size: 0.9rem;
          }
          
          #demo .demo-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 400px) {
          #demo h2 {
            font-size: 1.6rem;
          }
          
          #demo .play-btn {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section
        id="demo"
        style={{
          padding: '7rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="section-backdrop" aria-hidden="true">
          <span className="backdrop-glow glow-a" />
          <span className="backdrop-glow glow-b" />
        </div>
        <div className="container">
          <h2>Experience Propello AI in Action</h2>

          <div className="grid">
            {/* Audio Demo Box */}
            <div className="video-box">
              <audio ref={audioRef} src="/demo-call-sample.mp3" preload="metadata" />

              <div className="audio-label">Sample Call Recording</div>

              <div className={`play-btn ${isPlaying ? 'is-playing' : ''}`} onClick={togglePlay} role="button" aria-label={isPlaying ? 'Pause sample call' : 'Play sample call'}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </div>

              <div className="audio-waveform" aria-hidden="true">
                {waveHeights.map((h, i) => (
                  <span
                    key={i}
                    className={`audio-bar ${isPlaying ? 'active' : ''}`}
                    style={{ height: `${h}px`, animationDelay: `${i * 0.04}s` }}
                  />
                ))}
              </div>

              <div className="audio-progress-track">
                <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="audio-time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Features + Button */}
            <div className="features">
              <div className="feature-item">
                <FaCode className="feature-icon" />
                <div className="feature-text">
                  <h3>Propello AI makes every call count</h3>
                  <p>Watch how our AI agent processes real calls with clarity, empathy and precision.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <FaDesktop className="feature-icon" />
                <div className="feature-text">
                  <h3>Seamless Integration</h3>
                  <p>See how our solution integrates effortlessly with your existing systems and workflows.</p>
                </div>
              </div>
              
              <button className="demo-btn">
                <FaDesktop />
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;