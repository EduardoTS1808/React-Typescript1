
  import React from 'react';
  import './Card.css';
  
interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

const Card: React.FC<Omit<CardProps, 'footer'>> = ({ title, content }) => {
  return (
  
      <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
