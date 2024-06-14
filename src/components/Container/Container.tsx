import './Container.css';

interface ContainerProps<T> {
  children: T;
  fluid?: boolean;
}

const Container = <T,>({ children , fluid = false}: ContainerProps<T>): JSX.Element => {
  return <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>;
};

export default Container;
