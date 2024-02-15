import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from './img/farmacia.png';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link  } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <div className='logo'>
          <Link to='/'>
          <img
              src={logo}
              width="60px"
              height="60px"
              className="d-inline-block align-top"
            />
            </Link>
             <h1>Mi Farmacia</h1>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <NavLink to={`/category/cosmeticos`} >Cosméticos</NavLink>
            <NavLink to={`/category/cuidado_personal`}>Cuidado Personal</NavLink>
            <NavLink to={`/category/medicamentos`}>Medicamentos</NavLink>
            
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