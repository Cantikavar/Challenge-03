import React from 'react'
import '../ListCar/ListCar.css'
import logoSatu from '../../Assets/IMG/Rectangle 63.png'
import logoHomepage from '../../Assets/IMG/fi_home.png'
import logoTruck from '../../Assets/IMG/fi_truck.png'
import logoDua from '../../Assets/IMG/Rectangle 62.png'
import menuStrip from '../../Assets/IMG/fi_menu.png'
import logoU from '../../Assets/IMG/Group 15.png'
import kurungDown from '../../Assets/IMG/fi_chevron-down.png'
import stripKiri from '../../Assets/IMG/Vector.png'
import carMobil from '../../Assets/IMG/image 1.png'
import logoKey from '../../Assets/IMG/fi_key.png'
import logoWatch from '../../Assets/IMG/fi_clock.png'
import logoTrash from '../../Assets/IMG/fi_trash-2.png'
import logoEdit from '../../Assets/IMG/fi_edit.png'

import { Nav, Navbar, Container, Form, FormControl, Button, Card  } from 'react-bootstrap'

export const ListCar = () => {
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
                            CARS
                        </div>

                        <div className='dashboard-low'>
                            <div className='dashboard-low-title'>
                                List Car
                            </div>
                        </div>
                    </div>

                    <div className='container-table'>
                            <div className='main-container-table-cars'>

                                <div className='content-table'>
                                    <div className='dashboard-table'>
                                        Cars
                                    </div>

                                    <div className='chevron-right'>
                                        <img alt='' src={stripKiri} />
                                    </div>

                                    <div className='dashboard-table-2'>
                                        List Cars
                                    </div>

                                </div>

                                <div className='dashboard-3-cars'>
                                    List Cars
                                    <div className='container-btn-new-car'>
                                        <Button variant="primary" className='btn-new-car' href='new-cars'>+ Add New Car</Button>{' '}
                                    </div>

                                </div>

                                <div className='list-btn'>
                                    <Button variant="outline-primary" className='btn-group'>All</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Small</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Medium</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Large</Button>{' '}
                                </div>


                                <div className='cards-group'>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                            <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                            <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                            <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={carMobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={logoKey} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={logoWatch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'> <img alt='' src={logoTrash} />Delete</Button>{' '}
                                                <Button variant="success" className='btn-edit'> <img alt='' src={logoEdit} />Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
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

