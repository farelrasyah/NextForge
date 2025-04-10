import React, { ReactNode, useState, useEffect } from 'react';
import '../../styles/auth.css';

interface AuthCardProps {
  children: ReactNode;
  visualContent?: ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children, visualContent }) => {
  // Create random particles for background effect
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Generate random particles for visual effect
    const particleCount = 15;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // random position as percentage of container
        y: Math.random() * 100,
        size: Math.random() * 4 + 1, // random size between 1-5px
        opacity: Math.random() * 0.5 + 0.1, // random opacity between 0.1-0.6
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="auth-container">
      {/* Background elements */}
      <div className="auth-bg-grid"></div>
      <div className="auth-bg-gradient"></div>
      <div className="auth-bg-blob auth-blob-blue"></div>
      <div className="auth-bg-blob auth-blob-green"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="auth-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        ></div>
      ))}

      {/* Main auth card */}
      <div className="auth-card">
        <div className="auth-panel">
          {children}
        </div>
        
        {visualContent && (
          <div className="auth-visual">
            {visualContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;