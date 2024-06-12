// src/components/Display/Display.tsx
import React from 'react';
import './Display.css';

interface DisplayProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const Display: React.FC<DisplayProps> = ({ text, size = 'medium' }) => {
  return <div className={`display display--${size}`}>{text}</div>;
};

export default Display;
