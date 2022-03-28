import React from 'react'
import { Button, ButtonGroup, DropdownButton, Table, Dropdown, FormControl, InputGroup, ButtonToolbar, Pagination, Navbar,Container, Nav, Form } from 'react-bootstrap'
import Vektor from '../../Assets/IMG/Vector.png'
import fiSort from '../../Assets/IMG/fi_sort.png'
import Vectordown from '../../Assets/IMG/Vectordown.png'
import Batang from '../../Assets/IMG/Rectangle 9.png'
import logoSatu from '../../Assets/IMG/Rectangle 63.png'
import logoHomepage from '../../Assets/IMG/fi_home.png'
import logoTruck from '../../Assets/IMG/fi_truck.png'
import logoDua from '../../Assets/IMG/Rectangle 62.png'
import menuStrip from '../../Assets/IMG/fi_menu.png'
import logoU from '../../Assets/IMG/Group 15.png'
import kurungDown from '../../Assets/IMG/fi_chevron-down.png'
import '../Dashboard/Dashboard.css'


const GoHalamanC =()=>{
  window.location.href="/ListCar"
}


export const Dashboard = () => {
  return (
    <div className='main-container'>
    <div className='container-dashboard'>
        <img alt='' src={logoSatu} className='logoSatu' />

          <div>
            <a href='dashboard' className='tag'> <i>
              <img alt='' src={logoHomepage} className='logoHomepage' /></i>
                  Dashboard </a>
                </div>

          <div>
            <a href='ListCar' className='tag' onClick={()=>{GoHalamanC()}}> <i>
                <img alt='' src={logoTruck} className='logoTruck' /></i>
                        Cars</a>
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
                            aria-label="Search"/>
                          <Button variant="primary" className='btn-search'>Search</Button>
                          </Form>

                          <img alt='' src={logoU} className='logoU' />
                          <div className='akun-name'>Unis Badri</div>
                          <img alt='' src={kurungDown} />
                          </Navbar.Collapse>
                      </Container>
                    </Navbar>
                </div>

                <div className='container-content'>
                  <div className='menu'>
                    <div className='dashboard-up'>DASHBOARD</div>

                <div className='dashboard-low'>
                    <div className='dashboard-low-title'>Dashboard</div>
                </div>
                </div>

      {/* <CONTENT> */} 
      <div className='container-tabelcar'>
      <p className='paragraf1'>
        <strong>Dashboard   <img src={Vektor} alt='tanda-vektor' className='dashboard-vektor'
        /></strong>  Dashboard
      </p>
      <h2 className='paragraf2'>
        <strong>Dashboard</strong>
      </h2>
      <h3 className='list-order'> <img src={Batang} alt='biruBatang'/> List Order</h3>
    <div className='Table1'>
    <Table striped bordered hover>
          <thead>
              <tr className='tabelTop'>
                  <th>No<img src={fiSort}/></th>
                  <th>User Email<img src={fiSort}/></th>
                  <th>Car<img src={fiSort}/></th>
                  <th>Start Rent<img src={fiSort}/></th>
                  <th>Finish Rent<img src={fiSort}/></th>
                  <th>Price<img src={fiSort}/></th>
                  <th>Status<img src={fiSort}/></th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>2</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>3</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>4</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>5</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>6</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>7</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>8</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>9</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
                <td>10</td>
                <td>User Email</td>
                <td>Car</td>
                <td>Start Rent</td>
                <td>Finish Rent</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
          </tbody>
      </Table>
    </div>
    <div className='LimitJump'>
      <p>
        <div className='Limit'>Limit</div>
        <div className='JumpPage'>Jump to page</div>
      </p>
      <div className='ButtonTen'>
        <Button variant="outline-secondary">10 <img src={Vectordown} alt='Vectordown'/></Button>{' '}
      </div>
      <div className='ButtonGo'>
        <ButtonGroup>
          <Button variant="outline-secondary" className='buttonOne'> 1 <img src={Vectordown} alt='Vectordown'/></Button>{' '}
          <DropdownButton as={ButtonGroup} title="Go" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Go</Dropdown.Item>
            <Dropdown.Item eventKey="2">Go</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
      </div>

      <div className='buttonNine'>
      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups">
        
        <ButtonGroup aria-label="First group"></ButtonGroup>
        <InputGroup>
          <ButtonGroup aria-label="First group">
          <Pagination>
              <Pagination.First />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item disabled>{2}</Pagination.Item>
              <Pagination.Item disabled>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item disabled>{9}</Pagination.Item>
              <Pagination.Last />
          </Pagination>
        </ButtonGroup>
          </InputGroup>
            </ButtonToolbar>
      </div>





    <div className='list'>
    <h3 className='list-orderCar'> <img src={Batang} alt='biruBatang'/> List Order</h3>
    </div>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className='tabelTop'>
              <th>No<img src={fiSort}/></th>
              <th>Name<img src={fiSort}/></th>
              <th>Price<img src={fiSort}/></th>
              <th>Start Rent<img src={fiSort}/></th>
              <th>Finish Rent<img src={fiSort}/></th>
              <th>Created at<img src={fiSort}/></th>
              <th>Update at<img src={fiSort}/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>3</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>4</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>5</td>
            <td>Name</td>
            <td>price</td>
            <td>-</td>
            <td>-</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>6</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>7</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>8</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>9</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>10</td>
            <td>Name</td>
            <td>price</td>
            <td>Start Rent</td>
            <td>Finish Rent</td>
            <td>Created at</td>
            <td>Update at</td>
          </tr>
        </tbody>
      </Table>
      </div>
      
      <div className='LimitJump'>
      <p>
        <div className='Limit'>Limit</div>
        <div className='JumpPage'>Jump to page</div>
      </p>
      <div className='ButtonTen'>
        <Button variant="outline-secondary">50 <img src={Vectordown} alt='Vectordown'/></Button>{' '}
      </div>
      <div className='ButtonGo'>
        <ButtonGroup>
          <Button variant="outline-secondary" className='buttonOne'> 1 <img src={Vectordown} alt='Vectordown'/></Button>{' '}

          <DropdownButton as={ButtonGroup} title="Go" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Go</Dropdown.Item>
            <Dropdown.Item eventKey="2">Go</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    </div>

    <div className='buttonNine'>
      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group"></ButtonGroup>
        <InputGroup>
          <ButtonGroup aria-label="First group">
          <Pagination>
              <Pagination.First />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item disabled>{2}</Pagination.Item>
              <Pagination.Item disabled>{3}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item disabled>{9}</Pagination.Item>
              <Pagination.Last />
          </Pagination>
        </ButtonGroup>
          </InputGroup>
            </ButtonToolbar>
      </div>

      </div>





                    <div>
                        
                    </div>
                </div>
            </div>





  </div>
  )
}