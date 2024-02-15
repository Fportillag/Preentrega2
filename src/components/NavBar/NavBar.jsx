import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from './img/farmacia.png';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <div className='logo'>
          <img
              src={logo}
              width="60px"
              height="60px"
              className="d-inline-block align-top"
            />
             <h1>Mi Farmacia</h1>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link>Cosméticos</Nav.Link>
            <Nav.Link>Cuidado Personal</Nav.Link>
            <Nav.Link>Medicamentos</Nav.Link>
            
          </Nav>
          <div className='cart'>
            <CartWidget/>
            <h6 style={{color:"white"}}>4</h6>
        </div>

        </Navbar.Collapse>
        

      </Container>
    </Navbar>
  );
}

export default NavBar;