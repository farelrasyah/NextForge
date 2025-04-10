import React, { useState, useEffect } from 'react';
import '../../styles/auth.css';

interface VisualContentProps {
  isLogin?: boolean;
}

const VisualContent: React.FC<VisualContentProps> = ({ isLogin = true }) => {
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // AI chat messages
  const aiMessages = [
    "Welcome back! Your finances look great today.",
    "Let me help you manage your money smarter.",
    "I've analyzed your spending patterns and found ways to save.",
    "Your financial goals are within reach!",
  ];
  
  // Neural network points for visualization
  const [networkPoints, setNetworkPoints] = useState<Array<{
    id: number;
    x: number;
    y: number;
    connections: number[];
  }>>([]);
  
  // Generate neural network visualization
  useEffect(() => {
    const pointCount = 20;
    const points: Array<{
      id: number;
      x: number;
      y: number;
      connections: number[];
    }> = [];
    
    // Generate random points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: [],
      });
    }
    
    // Create random connections between points (3-5 connections per point)
    points.forEach((point) => {
      const connectionCount = Math.floor(Math.random() * 3) + 2; // 2-4 connections
      
      for (let i = 0; i < connectionCount; i++) {
        let target;
        do {
          target = Math.floor(Math.random() * pointCount);
        } while (target === point.id || point.connections.includes(target));
        
        point.connections.push(target);
      }
    });
    
    setNetworkPoints(points);
  }, []);
  
  // AI chat typing effect
  useEffect(() => {
    if (!isTyping) return;
    
    const text = aiMessages[currentTextIndex];
    const textLength = text.length;
    
    if (typingText.length < textLength) {
      const timer = setTimeout(() => {
        setTypingText(text.substring(0, typingText.length + 1));
      }, 50);
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      
      // Wait and then start typing the next message
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTypingText('');
        setCurrentTextIndex((currentTextIndex + 1) % aiMessages.length);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [typingText, isTyping, currentTextIndex, aiMessages]);

  return (
    <div className="visual-content">
      {/* Neural network background */}
      <svg className="neural-network" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Connections */}
        {networkPoints.map((point) =>
          point.connections.map((targetId) => (
            <line
              key={`${point.id}-${targetId}`}
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${networkPoints[targetId].x}%`}
              y2={`${networkPoints[targetId].y}%`}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))
        )}
        
        {/* Nodes */}
        {networkPoints.map((point) => (
          <circle
            key={point.id}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="2"
            fill="white"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* AI assistant */}
      <div className="ai-assistant">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 1.7-1.4 3-3 3h-0.5c-0.7 1.8-2.5 3-4.5 3s-3.8-1.2-4.5-3H9c-1.6 0-3-1.3-3-3a10 10 0 0 1 10-10z"></path>
          <path d="M8 15v1a4 4 0 0 0 8 0v-1"></path>
          <path d="M9 10h.01"></path>
          <path d="M15 10h.01"></path>
        </svg>
      </div>

      {/* AI chat bubble */}
      <div className="ai-chat-bubble">
        <p>{typingText}</p>
        {isTyping && typingText.length === aiMessages[currentTextIndex].length ? null : (
          <div className="ai-typing">
            <div className="ai-typing-dot"></div>
            <div className="ai-typing-dot"></div>
            <div className="ai-typing-dot"></div>
          </div>
        )}
      </div>

      {/* Floating coins */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/272/272525.png" 
        alt="Digital Coin" 
        className="floating-coin coin-1" 
      />
      <img 
        src="https://cdn-icons-png.flaticon.com/512/6475/6475884.png" 
        alt="Bitcoin" 
        className="floating-coin coin-2" 
      />
      <img 
        src="https://cdn-icons-png.flaticon.com/512/6941/6941697.png" 
        alt="Financial Growth" 
        className="floating-coin coin-3" 
      />

      {/* Financial graph container */}
      <div className="graph-container">
        <div style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
          {/* Simple bar chart */}
          {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7].map((height, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                height: `${height * 100}%`,
                backgroundColor: index % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(16, 185, 129, 0.6)',
                margin: '0 2px',
                borderRadius: '3px 3px 0 0',
                transition: 'height 0.5s ease',
                animation: `pulse ${2 + index * 0.2}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content text */}
      <div style={{ position: 'absolute', bottom: '5%', left: '0', width: '100%', textAlign: 'center' }}>
        <h3 className="visual-title">
          {isLogin ? 'Welcome Back!' : 'Join Nexora Today'}
        </h3>
        <p className="visual-text">
          {isLogin
            ? 'Your AI-powered financial assistant is ready to help you make smarter decisions.'
            : 'Let AI help you manage your finances and reach your financial goals faster.'}
        </p>
      </div>
    </div>
  );
};

export default VisualContent;