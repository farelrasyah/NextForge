'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthCard from '../../../components/auth/AuthCard';
import AuthHeader from '../../../components/auth/AuthHeader';
import LoginForm from '../../../components/auth/LoginForm';
import RegisterForm from '../../../components/auth/RegisterForm';
import VisualContent from '../../../components/auth/VisualContent';
import FormAnimation from '../../../components/auth/FormAnimation';
import '../../../styles/auth.css';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <AuthCard
      visualContent={<VisualContent isLogin={isLogin} />}
    >
      <AuthHeader 
        title={isLogin ? "Welcome Back" : "Create Account"} 
        subtitle={
          isLogin 
            ? "Log in to continue your financial journey with Nexora" 
            : "Join Nexora and let AI transform your financial future"
        }
      />
      
      {isLogin ? (
        <FormAnimation show={isLogin}>
          <LoginForm onSwitchToRegister={handleSwitchToRegister} />
        </FormAnimation>
      ) : (
        <FormAnimation show={!isLogin} direction="right">
          <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
        </FormAnimation>
      )}
    </AuthCard>
  );
};

export default LoginPage;