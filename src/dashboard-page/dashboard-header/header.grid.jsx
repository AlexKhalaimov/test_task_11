import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/logo_yellow_blue.svg'
import ProfileButton from './profile.button'
import { Button } from 'react-bootstrap'

const Header = ({ user }) => {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} className="logo" alt="logo" />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto column-gap-4 row-gap-2">
                <Nav.Link href="#home">Допомога</Nav.Link>
                <ProfileButton user = {user}></ProfileButton>
                <Button href="#link" as="a">Всі курси</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;
