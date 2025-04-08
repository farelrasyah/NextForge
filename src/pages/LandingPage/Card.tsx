import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../components/hooks/useIntersectionObserver';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`feature-card fade-in ${isVisible ? 'visible' : ''}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;