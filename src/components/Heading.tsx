import { Container, Row, Col } from "react-bootstrap";

const Heading = () => (
  <Container className="text-center py-4">
    <Row>
      <Col md={8} className="mx-auto">
        <h1 className="lead-text-muted">Space-News, from space.</h1>
        <p>Just kidding, its from Earth</p>
      </Col>
    </Row>
  </Container>
);
export default Heading;
