
import React, { ReactNode } from 'react';
import './Container.css';

interface ContainerProps<T extends ReactNode> {
  children: T;
  fluid?: boolean;
}

const Container = <T extends ReactNode>({ children , fluid = false}: ContainerProps<T>): JSX.Element => {
  return <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>;
};

export default Container;
