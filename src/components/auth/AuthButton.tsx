import React from 'react';

interface AuthButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({ type, children }) => {
  return (
    <button className="auth-button" type={type}>
      {children}
    </button>
  );
};

export default AuthButton;