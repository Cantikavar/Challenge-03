
import React from 'react'
import '../Card/CardCarDelete.css'
import { Card, Button } from 'react-bootstrap'
import carBeep from '../../IMG/Beep Beep - Medium Vehicle.png'
import cloudsBeep from '../../IMG/Beep Beep - Clouds.png'

export const CardCarDelete = () => {
  return (
    <div className='container-card'>
        <Card className='cardDelete'>
        <Card.Img variant="carBeep" src={cloudsBeep} />
        <Card.Img variant="carBeep" src={carBeep} />
        <Card.Body className='cardTengah'>
            <Card.Title><strong>Menghapus Data Mobil</strong></Card.Title>
            <Card.Text>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
            </Card.Text>
            <div className='buttonTengah'>
            <Button variant="primary" className='jarakButton'>Ya</Button>{' '}
            <Button variant="outline-primary">Tidak</Button>{' '}
            </div>
        </Card.Body>
        </Card>        
            
            
    </div>
  )
}

