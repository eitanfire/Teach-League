import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../app/img/logo.png';
import TLlogo from '../app/img/teachLeagueLogo.png';

const Header = () => {
    return(
    <div className='App' id ='Header'>
            <Link to='/'>
            <Container>
                <Row >
                <Col className="col col-md-4 float-start">
                    <img id='logo' src={ logo } alt='logo' />
                    { TLlogo }
                </Col >
                <Col id='banner'>

                </Col>
        
                </Row>
            </Container>
            </Link>
    </div>
    );
}

export default Header;