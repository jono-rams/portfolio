import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './NavBar.css';
import Footer from './Footer';

const NavBar = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container className='text-center'>
            <Navbar.Brand className='me-auto'><NavLink className="nav-brand" to='/'>Jonathan Rampersad's Portfolio</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className='nav-body nav-link' to="/">Home</NavLink>
                <NavLink className='nav-body nav-link' to="/about">About</NavLink>
                <Link className='nav-body nav-link' to="https://github.com/jono-rams" target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </Link>
                <Link className='nav-body nav-link' to="https://www.linkedin.com/in/jonathan-rampersad-47458a1a0/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ paddingBottom: '50px' }}></div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default NavBar;