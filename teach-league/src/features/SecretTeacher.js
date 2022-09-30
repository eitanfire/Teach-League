import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';

import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const SecretTeacher = () => {
    return (
        <Card>
            <CardBody className='responsive border border-4 border-danger'>
                <CardImg src="https://ichef.bbci.co.uk/images/ic/640xn/p08vy7s8.jpg"></CardImg>
                <CardTitle><h3>Secret Teacher</h3></CardTitle>
                <CardText>The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is.</CardText>
            </CardBody>
        </Card>
    );
}

export default SecretTeacher;