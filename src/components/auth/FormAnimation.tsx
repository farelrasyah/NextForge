import React from 'react';

interface FormAnimationProps {
  children: React.ReactNode;
}

const FormAnimation: React.FC<FormAnimationProps> = ({ children }) => {
  return <div className="form-animation fade-in visible">{children}</div>;
};

export default FormAnimation;