// src/components/Container/Container.tsx
import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, fluid = false }) => {
  return <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>;
};

export default Container;
