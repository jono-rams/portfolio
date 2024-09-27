import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="pt-3">
      <Container className='footer'>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <p className="text-light mb-0 ms-1 powered">
              Powered by React, Bootstrap, and React Router
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <p className="text-light mb-0 me-1">
              Icons made by{' '}
              <Link to="https://fontawesome.com/" target="_blank">
                Font Awesome
              </Link>
            </p>
            <div>
              <p style={{display: 'inline-block'}}>Code for this site can be found on</p>
              <Link to="https://github.com/jono-rams/portfolio" className="text-light ms-3" target='_blank'>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
