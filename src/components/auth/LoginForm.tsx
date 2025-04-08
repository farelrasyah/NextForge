import React, { useState } from 'react';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
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
      <AuthButton type="submit">Log In</AuthButton>
    </form>
  );
};

export default LoginForm;