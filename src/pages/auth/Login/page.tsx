import React from 'react';
import AuthHeader from '../../../components/auth/AuthHeader';
import LoginForm from '../../../components/auth/LoginForm';
import FormAnimation from '../../../components/auth/FormAnimation';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-page">
      <FormAnimation>
        <div className="auth-container">
          <AuthHeader
            title="Welcome Back!"
            subtitle="Log in to your account and manage your finances with ease."
            illustration="/images/login-illustration.svg"
          />
          <LoginForm />
        </div>
      </FormAnimation>
    </div>
  );
};

export default LoginPage;