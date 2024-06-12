// src/components/Alert/Alert.tsx
import React from 'react';
import './Alert.css';

interface AlertProps {
  message: string;
  type?: 'success' | 'warning' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'success' }) => {
  return <div className={`alert alert--${type}`}>{message}</div>;
};

export default Alert;
