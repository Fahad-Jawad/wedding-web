// Button.jsx
import React from 'react';

const Button = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-secondary text-white w-max fancy-button text-xs md:text-sm lg:text-base ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
