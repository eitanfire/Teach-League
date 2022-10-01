import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import TheTeachersLounge from './pages/TheTeachersLounge';
import LoungeCardList from './utils/LoungeCardList';
import { accordionData } from './utils/teachersLoungeContent.js';


function App() {
  return (
    <div className="App">
  <Container>
    <Header className='col col-12' />
    <Col className="accordion col-12 col-lg-9 ">
                    {accordionData.map(({ title, content, image }) => (
                        <LoungeCardList title={title} content={content} image={image} />
                    ))}
                </Col>
    <TheTeachersLounge />
      {/* <h1>
        Hello World!
      </h1> */}
      <Footer />
  </Container>
  </div>
  );
}

export default App;