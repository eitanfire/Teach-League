import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return (
    <div className="App">
  <Container>
    <Header className='col col-12' />
      {/* <h1>
        Hello World!
      </h1> */}
      <Footer />
  </Container>
  </div>
  );
}

export default App;
