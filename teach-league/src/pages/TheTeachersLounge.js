import { Col, Row, Container } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import SecretTeacher from '../features/SecretTeacher.js';
import LoungeCard from '../components/LoungeCard';

const TheTeachersLounge = () => {
    return (
        <Container>
            <Card>
           <CardBody>
            <Row>
                <Col>
        { <h1>The Teachers Lounge</h1> }
                </Col>
                <Col col col-md-8>
        { <h2>Know that dream where you show up for the final and realize you forgot to go to class? Yeah we have that too but were supposed to be teaching it!</h2> }
                </Col>
        </Row>
        <LoungeCard />
        <SecretTeacher />
        </CardBody>
        </Card>
        </Container>
    );
}

export default TheTeachersLounge