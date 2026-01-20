'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asLink = false,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950';

  const variantStyles = {
    primary: 'bg-gray-950 text-white hover:bg-gray-800',
    secondary: 'bg-gray-200 text-gray-950 hover:bg-gray-300',
    outline: 'border-2 border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white',
    ghost: 'text-gray-950 hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={buttonClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
