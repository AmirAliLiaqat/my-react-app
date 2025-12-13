import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <div className='container-full'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <NavLink to='/' className="text-decoration-none text-white mx-2">Home</NavLink>
            <NavLink to='/about' className="text-decoration-none text-white mx-2">About</NavLink>
            <NavLink to='/contact' className="text-decoration-none text-white mx-2">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
