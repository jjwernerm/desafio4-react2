import { FaPizzaSlice } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

export default () => {

  const { pizzasJSON } = useContext(Context);
  const navigate = useNavigate();

    const verPizzaid = (pizzaid) => {
    navigate(`/pizza/${pizzaid}`);
  }

  return (
    <>
      <Container className="catalogue">
        {pizzasJSON.map((pizza) => (
          <div key={pizza.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                <Card.Title><strong>{pizza.name}</strong></Card.Title>
                <hr />
                <p><strong>Ingredientes:</strong></p>
                <Card.Text>
                  <li><FaPizzaSlice />{' '}{pizza.ingredients[0]}</li>
                  <li><FaPizzaSlice />{' '}{pizza.ingredients[1]}</li>
                  <li><FaPizzaSlice />{' '}{pizza.ingredients[2]}</li>
                  <li><FaPizzaSlice />{' '}{pizza.ingredients[3]}</li>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Card.Title className="price-card"><strong>$ {pizza.price}</strong></Card.Title>
                <div className="button-flex">
                  <Button className="button-card" variant="info" onClick={() => verPizzaid(pizza.id)}>Ver Más{' '}<GiMagnifyingGlass /></Button>
                  <Button className="button-card" variant="danger">Añadir{' '}<BsFillCartCheckFill /></Button>
                </div>
              </ListGroup>
            </Card>
          </div>        
        ))}
      </Container>
    </>
  );
}