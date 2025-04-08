import React from 'react';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  illustration: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle, illustration }) => {
  return (
    <div className="auth-header">
      <div className="auth-header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="auth-header-illustration">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default AuthHeader;