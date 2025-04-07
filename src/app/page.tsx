"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (!soundEnabled) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setSoundEnabled(!soundEnabled);
    }
  };

  return (
    <div className="splash-screen">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/ambient-sound.mp3"
        loop
      />
      
      {/* Brand header */}
      <div className="brand-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="brand-logo"
        >
          NEXT-FORGE
        </motion.div>
      </div>
      
      {/* Loading section */}
      <motion.div 
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="loading-text">
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            INITIALIZING SYSTEM — {loadingPercentage}%
          </motion.span>
        </div>
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar-progress"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.div 
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="https://kpverse.com/kpco/foundation/hidden_files"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="link-prefix">&#x2192;</span> kpverse.com/kpco/foundation/hidden_files
        </a>
      </motion.div>
      
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          margin: 0;
          padding: 0;
          background-color: #fff;
          font-family: 'Space Mono', 'Roboto Mono', monospace;
          cursor: none;
          overflow: hidden;
          color: #111;
        }

        /* Enhanced cursor styles */
        @media (pointer: fine) {
          .cursor-wrapper {
            position: fixed;
            width: 80px; /* Smaller, more elegant cursor */
            height: 80px; /* Smaller, more elegant cursor */
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
          }
          
          .cursor-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            opacity: 0.8;
            transition: all 0.2s ease;
          }
          
          .cursor-circle-effect {
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.02) 0%,
              rgba(0, 0, 0, 0) 70%
            );
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.4s ease;
          }
          
          .cursor-wrapper.active .cursor-circle-effect {
            opacity: 0.2;
            transform: scale(1.1);
          }
          
          .cursor-ring-inner {
            position: absolute;
            top: 30%;
            left: 30%;
            right: 30%;
            bottom: 30%;
            border: 1px dashed rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            animation: rotate 12s linear infinite;
            transition: all 0.3s ease;
          }
          
          .cursor-dot {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background-color: #000;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: transform 0.15s ease-out;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          
          .cursor-wrapper.active .cursor-dot {
            transform: translate(-50%, -50%) scale(1.8);
          }

          .cursor-wrapper.active .cursor-ring {
            border-color: rgba(0, 0, 0, 0.7);
            transform: scale(0.9);
          }

          .cursor-wrapper.active .cursor-ring-inner {
            border-color: rgba(0, 0, 0, 0.5);
            transform: scale(0.8);
            animation-duration: 8s;
          }
          
          .cursor-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
          }
          
          .cursor-wrapper.hovering .cursor-content,
          .cursor-wrapper:hover .cursor-content {
            opacity: 1;
            transform: scale(0.9);
          }
          
          .cursor-wrapper.hovering .cursor-ring,
          .cursor-wrapper:hover .cursor-ring {
            border-color: rgba(0, 0, 0, 0.7);
          }
          
          .cursor-sound-icon {
            width: 15px;
            height: 15px;
            margin-bottom: 3px;
            opacity: 0.8;
            animation: fadeInOut 2s infinite ease-in-out;
          }
          
          .cursor-text {
            font-size: 7px;
            white-space: nowrap;
            text-align: center;
            color: rgba(0, 0, 0, 0.7);
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            line-height: 1;
          }
          
          .cursor-wrapper.hovering .cursor-ring-inner,
          .cursor-wrapper:hover .cursor-ring-inner {
            border-color: rgba(0, 0, 0, 0.6);
            animation-duration: 8s;
          }
          
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes rotateReverse {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }

          .cursor-glow {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.1) 0%,
              rgba(0, 0, 0, 0) 70%
            );
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: blur(2px);
            opacity: 0.5;
          }
          
          .cursor-wrapper.active .cursor-glow {
            width: 30px;
            height: 30px;
            opacity: 0.7;
          }
          
          /* Trail effect */
          .cursor-trail {
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.05);
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: difference;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, opacity 0.3s;
          }
        }
      `}</style>
      
      <style jsx>{`
        .splash-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
          padding: 40px 20px;
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Brand Header */
        .brand-header {
          margin-top: 40px;
        }
        
        .brand-logo {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #111;
          position: relative;
        }
        
        .brand-logo::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #111;
          transform: scaleX(0.6);
        }

        /* Loading Section */
        .loading-container {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 500px;
        }

        .loading-text {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 15px;
          color: #333;
        }

        .loading-bar-container {
          width: 100%;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .loading-bar-progress {
          height: 100%;
          background-color: #111;
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
        }

        /* Footer */
        .footer {
          margin-bottom: 20px;
        }

        .footer-link {
          font-size: 13px;
          color: #333;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .footer-link:hover {
          color: #111;
        }

        .link-prefix {
          font-size: 14px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .splash-screen {
            padding: 30px 15px;
          }
          
          .brand-logo {
            font-size: 20px;
          }
          
          .loading-container {
            max-width: 85%;
          }
        }
      `}</style>

      {/* Enhanced custom cursor with sound text and icon */}
      <EnhancedCursor soundEnabled={soundEnabled} toggleSound={toggleSound} />
    </div>
  );
}

// Enhanced custom cursor component with sound control functionality
function EnhancedCursor({ soundEnabled, toggleSound }: { soundEnabled: boolean, toggleSound: () => void }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number; opacity: number }[]>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    interface CursorPosition {
      x: number;
      y: number;
    }
    
    let lastPos = { x: -100, y: -100 };
    let trailTimeout: NodeJS.Timeout;
    
    const updatePosition = (e: MouseEvent): void => {
      const currentPos = { x: e.clientX, y: e.clientY };
      setPosition(currentPos);
      
      // Only add trail if mouse moved a certain distance
      const distance = Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y);
      if (distance > 20) {
        addTrail(currentPos.x, currentPos.y);
        lastPos = { ...currentPos };
      }
    };

    const addTrail = (x: number, y: number) => {
      const id = trailIdRef.current++;
      
      setTrails(prev => [...prev, { id, x, y, opacity: 0.7 }]);
      
      clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => {
        setTrails(prev => prev.map(trail => ({ ...trail, opacity: trail.opacity - 0.1 }))
          .filter(trail => trail.opacity > 0));
      }, 50);
    };

    const handleMouseDown = () => {
      setIsActive(true);
    };
    
    const handleMouseUp = () => {
      setIsActive(false);
    };
    
    const handleClick = (e: MouseEvent) => {
      // Check if we're clicking anywhere that's not a specific interactive element
      const target = e.target as HTMLElement;
      if (!target.closest('a') && !target.closest('button') && !target.closest('.footer-link')) {
        toggleSound();
      }
    };
    
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a') || !!target.closest('button') || !!target.closest('.footer-link'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mouseover', checkHover);
      clearTimeout(trailTimeout);
    };
  }, [toggleSound]);

  return (
    <>
      {/* Trail effect */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <motion.div 
        className={`cursor-wrapper ${isActive ? 'active' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="cursor-circle-effect"></div>
        <div className="cursor-ring"></div>
        <div className="cursor-ring-inner"></div>
        <div className="cursor-glow"></div>
        
        <motion.div
          className="cursor-content"
          animate={{ 
            opacity: soundEnabled ? [0.7, 0.9, 0.7] : 0.8,
            scale: isActive ? 0.95 : 1
          }}
          transition={{ 
            opacity: { repeat: Infinity, duration: 2 },
            scale: { duration: 0.2 } 
          }}
        >
          <div className="cursor-sound-icon">
            {soundEnabled ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                <path d="M19.07 4.93C21.9 7.76 21.9 12.24 19.07 15.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.54 8.46C16.9 9.82 16.9 12.18 15.54 13.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 9L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L23 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <div className="cursor-text">
            {soundEnabled ? "SOUND ON" : "CLICK FOR SOUND"}
          </div>
        </motion.div>
        <div className="cursor-dot"></div>
      </motion.div>
    </>
  );
}
