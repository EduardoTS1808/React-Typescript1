
import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

// Envolva o ButtonProps com Partial para tornar todas as propriedades opcionais
const Button: React.FC<Partial<ButtonProps>> = ({ label = 'Default Label', onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

