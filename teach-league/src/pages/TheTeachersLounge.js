import { Col, Row, Container } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';

const TheTeachersLounge = () => {
    return (
        <Container>
            <Card>
           <CardBody>
            <Row>
                <Col>
        { <h1>The Teachers Lounge</h1> }
                </Col>
                <Col>
        { <h2>Know that dream where you show up for the final and realize you forgot to go to class? Yeah we have that too but were teaching the class.</h2> }
                </Col>
        </Row>
        </CardBody>
        </Card>
        </Container>
    );
}

export default TheTeachersLounge