import { Container, Row, Col } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4} className="img-pizza-triste"></Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={4}><h5> Lo siento... la página que consultas no existe </h5></Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

