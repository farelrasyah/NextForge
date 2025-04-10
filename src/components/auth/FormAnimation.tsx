import React, { ReactNode, useEffect, useState } from 'react';
import '../../styles/auth.css';

interface FormAnimationProps {
  show: boolean;
  children: ReactNode;
  direction?: 'left' | 'right';
}

const FormAnimation: React.FC<FormAnimationProps> = ({ show, children, direction = 'left' }) => {
  const [mounted, setMounted] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (show) {
      setMounted(true);
      // Small timeout to ensure the DOM has updated
      setTimeout(() => {
        setAnimationClass('slide-in');
      }, 50);
    } else {
      setAnimationClass('slide-out');
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setMounted(false);
      }, 500); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!mounted) return null;

  return (
    <div 
      className={`auth-form-animation ${animationClass}`} 
      style={{ 
        animationDirection: direction === 'right' ? 'reverse' : 'normal',
      }}
    >
      {children}
    </div>
  );
};

export default FormAnimation;