
    
    
    import React from 'react';
    import './Alert.css';

interface BaseProps {
  message: string;
}

interface TypeProps {
  type: 'success' | 'error' | 'warning';
}

type AlertProps = BaseProps & TypeProps;

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Alert;
