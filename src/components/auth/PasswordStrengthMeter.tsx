import React from 'react';

interface PasswordStrengthMeterProps {
  password: string;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const calculateStrength = () => {
    if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return 'Strong';
    } else if (password.length > 5) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const strength = calculateStrength();

  return (
    <div className="password-strength-meter">
      <p>Password Strength: <span className={strength.toLowerCase()}>{strength}</span></p>
    </div>
  );
};

export default PasswordStrengthMeter;