import { GiFullPizza } from 'react-icons/gi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Navbar, Container } from "react-bootstrap";

export default () => {

  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container className="navbar-flex">
          <Navbar.Brand>
            <GiFullPizza />{' '}
              Pizzería Mamma Mía!
          </Navbar.Brand>
          <Navbar.Brand>
            <BsFillCartCheckFill />{' '}
              
          </Navbar.Brand>
        </Container>
      </Navbar>      
    </>
  );
}

