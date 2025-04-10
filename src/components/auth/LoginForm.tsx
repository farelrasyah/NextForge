import React, { useState } from 'react';
import Link from 'next/link';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import SocialLogin from './SocialLogin';
import '../../styles/auth.css';

interface LoginFormProps {
  onSwitchToRegister?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Simple email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app you would make an API call to authenticate the user
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Logged in with:', formData);
      // Navigate to dashboard in a real app
      window.location.href = '/'; // Redirect to home for now
    } catch (error) {
      setErrors({
        ...errors,
        password: 'Invalid email or password',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-effect-circle effect-1"></div>
        <div className="form-effect-circle effect-2"></div>
        
        <AuthInput
          id="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
          autoComplete="email"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          }
        />
        
        <AuthInput
          id="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
          error={errors.password}
          autoComplete="current-password"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          }
        />
        
        <div className="flex justify-between items-center mb-6">
          <label className="auth-checkbox">
            <input type="checkbox" />
            <span className="auth-checkbox-custom"></span>
            <span className="text-sm">Remember me</span>
          </label>
          
          <Link href="/auth/forgot-password" className="auth-link">
            Forgot password?
          </Link>
        </div>
        
        <AuthButton
          text="Login"
          type="submit"
          isLoading={isLoading}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
          }
        />
      </form>
      
      <div className="auth-divider">
        <span>or continue with</span>
      </div>
      
      <SocialLogin />
      
      <div className="auth-helper-text">
        Don't have an account?{' '}
        <button onClick={onSwitchToRegister} className="auth-link">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;