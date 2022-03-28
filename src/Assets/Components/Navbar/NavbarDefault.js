import React from 'react' 
import { Button, Container,Dropdown,DropdownButton,Form,FormControl,Nav,Navbar} from 'react-bootstrap' 
import '../Navbar/NavbarDefault.css' 
import logoSatu from '../../IMG/Rectangle 63.png'
import logoHomepage from '../../IMG/fi_home.png'
import logoTruck from '../../IMG/fi_truck.png'
import logoDua from '../../IMG/Rectangle 62.png'
import menuStrip from '../../IMG/fi_menu.png'
import logoU from '../../IMG/Group 15.png'
import kurungDown from '../../IMG/fi_chevron-down.png'



export const NavbarDefault= () => { 
  return ( 
    <div className='main-container'>
            <div className='container-dashboard'>
                <img alt='' src={logoSatu} className='logoSatu' />

                <div>
                    <a href='dashboard' className='tag'> <i>
                        <img alt='' src={logoHomepage} className='logoHomepage' />
                    </i>
                       Dashboard
                    </a>
                </div>

                <div>
                    <a href='cars' className='tag'> <i>
                        <img alt='' src={logoTruck} className='logoTruck' />
                    </i>
                        Cars
                    </a>
                </div>

                
            </div>

            <div className='navbar-content'>
                <div className='container-navbar'>
                    <Navbar expand="lg" className='navbar-custom'>
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                    <img alt='' src={logoDua} />
                                    <img alt='' src={menuStrip} className='menuStrip' />

                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="primary" className='btn-search'>Search</Button>
                                </Form>

                                <img alt='' src={logoU} className='logoU' />
                                <div className='akun-name'>
                                    Unis Badri
                                </div>
                                <img alt='' src={kurungDown} />
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className='container-content'>
                    <div className='menu'>
                        <div className='dashboard-up'>
                            DASHBOARD
                        </div>

                        <div className='dashboard-low'>
                            <div className='dashboard-low-title'>
                                Dashboard
                            </div>
                        </div>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}