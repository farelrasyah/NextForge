import React, { useState } from 'react';
import '../../styles/auth.css';

interface AuthInputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  autoComplete?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  id,
  type,
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  error,
  icon,
  className = '',
  autoComplete,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // For animating label movement
  const isActive = isFocused || value.length > 0;
  
  // Handle password visibility toggle
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  return (
    <div className={`auth-form-group ${className}`}>
      <label htmlFor={id} className={`auth-label ${isActive ? 'auth-label-active' : ''}`}>
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`auth-input ${error ? 'border-red-500' : ''} ${isFocused ? 'auth-input-focused' : ''}`}
          autoComplete={autoComplete}
        />
        
        {/* Icon displays on the right side of input */}
        {icon && (
          <div className="auth-input-icon">
            {icon}
          </div>
        )}
        
        {/* Password visibility toggle */}
        {type === 'password' && (
          <div 
            className="auth-input-icon cursor-pointer" 
            onClick={() => setShowPassword(!showPassword)}
            style={{ right: '3rem' }}
          >
            {showPassword ? (
              // Eye-off icon
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              // Eye icon
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </div>
        )}
        
        {/* Animated border effect */}
        <div className={`auth-input-border ${isFocused ? 'auth-input-border-active' : ''}`}></div>
      </div>
      
      {/* Error message */}
      {error && <p className="auth-error">{error}</p>}
    </div>
  );
};

export default AuthInput;