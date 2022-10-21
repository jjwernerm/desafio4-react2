import { FaPizzaSlice } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

export default () => {

  const [pizzaDetail, setPizzaDetail] = useState([]);
  const { pizzasJSON } = useContext(Context);
  const { pizzaid } = useParams();

  const getPizza = () => {
    const result = pizzasJSON.find((pizza) => (pizza.id) === pizzaid);
    setPizzaDetail(result || {});
  }

  useEffect(() => {
    getPizza();
  }, [pizzasJSON]);  

  return (
    <>
      <Container>
        <Card style={{ width: '100%' }}>
          <div className="card-pizza">
            <div>
              <Card.Img className="card-img-top-1" variant="top" src={pizzaDetail.img} />
            </div>
            <div>
              <Card.Body className="card-body-1">
                <Card.Title><strong>{pizzaDetail.name}</strong></Card.Title>
                <hr />
                <Card.Text>
                  <p>{pizzaDetail.desc}</p>
                </Card.Text>
                <p><strong>Ingredientes:</strong></p>
                <Card.Text>
                  <li><FaPizzaSlice />{' '}Ingrediente 1</li>
                  <li><FaPizzaSlice />{' '}Ingrediente 2</li>
                  <li><FaPizzaSlice />{' '}Ingrediente 3</li>
                  <li><FaPizzaSlice />{' '}Ingrediente 4</li>
                </Card.Text>
                <div className="price-btn">
                  <Card.Title>
                    <strong>Precio: ${pizzaDetail.price}</strong>
                  </Card.Title>
                  <Button
                    variant="danger">
                    Añadir{' '}<BsFillCartCheckFill />
                  </Button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}