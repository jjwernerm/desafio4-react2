import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../Context";

export default () => {

  const { pizzasJSON } = useContext(Context);
  
  return (
    <>
      <Container>
        <div className="bg-gray">
          <Row>
            <Col> <h4> Detalles del pedido: </h4> </Col>
          </Row>
          <div className="bg-white">
            {pizzasJSON.filter((pizza) => pizza.car).map((pizza) => (
              <div key={pizza.id}>
                <Row>
                  <Col xs={3}><img className="img-pizza-car" src={pizza.img} alt="" /></Col>
                  <Col xs={4}><h6> {pizza.name} </h6></Col>
                  <Col xs={2}>$</Col>
                  <Col xs={1}><Button variant="danger">-</Button></Col>
                  <Col xs={1}>1</Col>
                  <Col xs={1}><Button variant="primary">+</Button></Col>
                </Row>
                <hr />
              </div>
            ))}          
            <Row>
              <Col> <h1> Total: $ </h1> </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="success">
                  Ir a Pagar
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}