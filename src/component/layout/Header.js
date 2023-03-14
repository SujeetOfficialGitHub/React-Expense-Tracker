import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >ExpenseTracker</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/About">About</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </Nav>
          <Nav className='me-auto'>
            <Button className="p-1 h-25 mt-1" variant='secondary'>Logout</Button>
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header