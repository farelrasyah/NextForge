import React, { useState, useEffect } from 'react';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import SocialLogin from './SocialLogin';
import '../../styles/auth.css';

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    className: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Update password strength when password changes
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength({
        score: 0,
        label: '',
        className: '',
      });
      return;
    }

    // Calculate password strength
    let score = 0;
    
    // Length check
    if (formData.password.length >= 8) score += 1;
    
    // Has uppercase
    if (/[A-Z]/.test(formData.password)) score += 1;
    
    // Has lowercase
    if (/[a-z]/.test(formData.password)) score += 1;
    
    // Has number
    if (/[0-9]/.test(formData.password)) score += 1;
    
    // Has special character
    if (/[^A-Za-z0-9]/.test(formData.password)) score += 1;

    let label: string;
    let className: string;

    switch (true) {
      case score === 0:
        label = '';
        className = '';
        break;
      case score <= 2:
        label = 'Weak';
        className = 'strength-weak';
        break;
      case score <= 3:
        label = 'Medium';
        className = 'strength-medium';
        break;
      case score <= 4:
        label = 'Strong';
        className = 'strength-strong';
        break;
      default:
        label = 'Very Strong';
        className = 'strength-very-strong';
    }

    setPasswordStrength({
      score,
      label,
      className,
    });
  }, [formData.password]);

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
    
    // If confirm password changes, check if it matches password
    if (name === 'confirmPassword' && formData.password && value) {
      if (formData.password !== value) {
        setErrors(prev => ({
          ...prev,
          confirmPassword: 'Passwords do not match',
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          confirmPassword: '',
        }));
      }
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
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
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    // Terms check
    if (!acceptTerms) {
      alert('Please accept the Terms of Service and Privacy Policy');
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
      // In a real app you would make an API call to register the user
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registered user:', formData);
      
      // After successful registration, switch to login
      if (onSwitchToLogin) {
        onSwitchToLogin();
      }
    } catch (error) {
      setErrors({
        ...errors,
        email: 'This email is already registered',
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
          id="name"
          type="text"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          error={errors.name}
          autoComplete="name"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          }
        />
        
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
          autoComplete="new-password"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          }
        />
        
        {formData.password && (
          <div className="password-strength mt-1 mb-4">
            <div className={`password-strength-bar ${passwordStrength.className}`}></div>
            {passwordStrength.label && (
              <div className="text-xs flex justify-between mt-1">
                <span>{passwordStrength.label}</span>
                <span className="opacity-70">
                  {passwordStrength.score < 3 && 'Add symbols & numbers for stronger password'}
                </span>
              </div>
            )}
          </div>
        )}
        
        <AuthInput
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          error={errors.confirmPassword}
          autoComplete="new-password"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          }
        />
        
        <div className="mb-6">
          <label className="auth-checkbox">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <span className="auth-checkbox-custom"></span>
            <span className="text-sm">
              I agree to the{' '}
              <a href="#" className="auth-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="auth-link">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
        
        <AuthButton
          text="Create Account"
          type="submit"
          isLoading={isLoading}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          }
        />
      </form>
      
      <div className="auth-divider">
        <span>or continue with</span>
      </div>
      
      <SocialLogin />
      
      <div className="auth-helper-text">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="auth-link">
          Login here
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;