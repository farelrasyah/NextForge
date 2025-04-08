import React, { useState } from 'react';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering with:', { email, password, confirmPassword });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <AuthInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordStrengthMeter password={password} />
      <AuthInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <AuthButton type="submit">Register</AuthButton>
    </form>
  );
};

export default RegisterForm;