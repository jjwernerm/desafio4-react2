import { GiFullPizza } from 'react-icons/gi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {

  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container className="navbar-flex">
          <Navbar.Brand>            
            <Link to="/">
              <GiFullPizza />{' '} Pizzería Mamma Mía!
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/carrito">
              <BsFillCartCheckFill />{' '}
            </Link>              
          </Navbar.Brand>
        </Container>
      </Navbar>      
    </>
  );
}

