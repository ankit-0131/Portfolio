import { useState, useEffect } from 'react';
import './Loader.css';

const BOOT_MESSAGES = [
  { threshold: 0, text: 'INITIALIZING NEURAL INTERFACE...' },
  { threshold: 20, text: 'ESTABLISHING SECURE CONNECTION...' },
  { threshold: 45, text: 'DOWNLOADING WORKSTATION DATABASE...' },
  { threshold: 70, text: 'CALIBRATING WEBSHOOTER SYSTEM...' },
  { threshold: 90, text: 'Ankit Portfolio OS v2.0 ACTIVE' },
];

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [isFading, setIsFading] = useState(false);

  // Handle progress counter
  useEffect(() => {
    let timer;
    const startProgress = () => {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          // Dynamic randomized progress increment
          const remaining = 100 - prev;
          const increment = Math.min(
            remaining,
            Math.floor(Math.random() * 4) + 2 // Increments between 2 and 5
          );
          return prev + increment;
        });
      }, 35);
    };

    startProgress();
    return () => clearInterval(timer);
  }, []);

  // Handle terminal log messages based on progress
  useEffect(() => {
    BOOT_MESSAGES.forEach((msg) => {
      if (progress >= msg.threshold && !terminalLines.some((l) => l.text === msg.text)) {
        setTerminalLines((prev) => [...prev, { ...msg, id: msg.threshold }]);
      }
    });
  }, [progress, terminalLines]);

  // Handle fade out and cleanup when progress is 100%
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        const finishTimer = setTimeout(() => {
          onFinished();
        }, 600); // Matches CSS transition duration
        return () => clearTimeout(finishTimer);
      }, 500); // Hold at 100% for visual satisfaction
      return () => clearTimeout(fadeTimer);
    }
  }, [progress, onFinished]);

  return (
    <div className={`loader-overlay ${isFading ? 'fade-out' : ''}`} aria-busy="true" aria-label="Loading workstation">
      <div className="hud-container">
        {/* Futuristic SVG Spider & HUD Ticks */}
        <svg viewBox="0 0 100 100" className="hud-spider-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Rotating outer ring */}
          <circle cx="50" cy="50" r="45" className="hud-circle-outer" />
          
          {/* Counter-rotating inner ring */}
          <circle cx="50" cy="50" r="38" className="hud-circle-inner" />
          
          {/* Technical crosshairs */}
          <line x1="50" y1="6" x2="50" y2="16" className="hud-crosshair" />
          <line x1="50" y1="84" x2="50" y2="94" className="hud-crosshair" />
          <line x1="6" y1="50" x2="16" y2="50" className="hud-crosshair" />
          <line x1="84" y1="50" x2="94" y2="50" className="hud-crosshair" />

          {/* Spider Body - Stylized/Geometric */}
          <path 
            d="M50,33 C47.5,33 45.5,37 45.5,41 C45.5,45 47.5,47 50,47 C52.5,47 54.5,45 54.5,41 C54.5,37 52.5,33 50,33 Z" 
            className="spider-body-upper" 
          />
          <path 
            d="M50,48 C45.5,48 42,52.5 42,62.5 C42,72.5 45.5,76 50,76 C54.5,76 58,72.5 58,62.5 C58,52.5 54.5,48 50,48 Z" 
            className="spider-body-lower" 
          />

          {/* Spider Legs - Curves originating from junctions */}
          {/* Left Side */}
          <path d="M46,40 Q32,29 27,18" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M45,43 Q25,37 21,31" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M45,49 Q22,54 18,60" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M46,55 Q27,69 25,80" strokeWidth="1.8" fill="none" className="spider-leg" />

          {/* Right Side */}
          <path d="M54,40 Q68,29 73,18" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M55,43 Q75,37 79,31" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M55,49 Q78,54 82,60" strokeWidth="1.8" fill="none" className="spider-leg" />
          <path d="M54,55 Q73,69 75,80" strokeWidth="1.8" fill="none" className="spider-leg" />
        </svg>

        {/* Progress Bar & Numeric Indicator */}
        <div className="loader-progress">
          <div className="progress-number" aria-live="polite">
            {progress}
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Live Status Terminal Log */}
        <div className="loader-status-terminal">
          {terminalLines.slice(-3).map((line, idx) => {
            const isLast = idx === Math.min(terminalLines.length, 3) - 1;
            return (
              <div 
                key={`${line.id}-${idx}`} 
                className={`terminal-line ${isLast && progress < 100 ? 'active' : ''}`}
              >
                &gt; {line.text}
                {isLast && progress < 100 && <span className="terminal-cursor"></span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
