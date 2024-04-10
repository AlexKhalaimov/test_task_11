import React from 'react';
import Nav from 'react-bootstrap/Nav'
const BottomNav = () => {
    return (
      <Nav className='footer__bottom-nav column-gap-3'>
        <Nav.Item>
            <Nav.Link href="/home">© 2024 Prometheus</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="link-1">Політика конфіденційності</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="link-2">Договір публічної оферти</Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link href="link-3">Допомога</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

  export default BottomNav
