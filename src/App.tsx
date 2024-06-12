import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';
import Image from './components/Images/Image';




function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
      <Container>
  <Alert message=" tudo certo" type="success"/>
  <Card title="Card Titulo" content=" Exemplo de exibição de texto content." />
  <Image
  src="https://via.placeholder.com/150"
  alt="Placeholder Image"
  width="150px"
  height="150px"
  borderRadius="8px"
/>
</Container>

<Container fluid>
  <Card title="Card Titulo" content=" Exemplo de exibição de texto content." />
</Container>

      </header>
    </div>
      
  );
}

export default App;