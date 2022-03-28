import React from 'react'
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import '../SideBar/SideBar.css'

export const SideBar = () => {
  return (
    <div>
    <Navbar expand={false}>
    <Container className='sidebarAwal'>
        <Nav>
          <Nav.Link href="#action1"><strong>DASHBOARD</strong></Nav.Link>
          <Nav.Link href="#action2">Dashboard</Nav.Link>
        </Nav>
  </Container>
</Navbar>
    </div>
  )
}
