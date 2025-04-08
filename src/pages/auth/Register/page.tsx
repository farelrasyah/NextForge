import React from 'react';
import AuthHeader from '../../../components/auth/AuthHeader';
import RegisterForm from '../../../components/auth/RegisterForm';
import FormAnimation from '../../../components/auth/FormAnimation';

const RegisterPage: React.FC = () => {
  return (
    <div className="auth-page">
      <FormAnimation>
        <div className="auth-container">
          <AuthHeader
            title="Join Us Today!"
            subtitle="Create an account and start managing your finances like a pro."
            illustration="/images/register-illustration.svg"
          />
          <RegisterForm />
        </div>
      </FormAnimation>
    </div>
  );
};

export default RegisterPage;