import React from 'react'
import { Container, TextInput, Select, Textarea,Button, Icon, Row } from 'react-materialize'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import {useState, useContext} from 'react';
import { ThemeContext } from './TnemeContext'
import './Contact.css'
export default function Contact() {
    const handleSubmit =(e)=> {
        e.preventDefault()
      }    
      const [films,setFilm]= useState([])
      const {theme, toggle, dark}= useContext(ThemeContext)
  return (
    <div className='Contact'style={!dark?{backgroundColor:'rgb(236, 236, 236)'}:{backgroundColor:'gray'}}>
    <Container >
        <Row>
        <h3 style={!dark?{color:'black'}:{color:'white'}}>Contact us</h3>
    <form onSubmit={handleSubmit}>
     <TextInput  id='TextInput-38' label="Your Name"/>
     <TextInput id='TextInput-39' label="Your Phone"/>
     <TextInput id='TextInput-41' label="Email" validate/>
    <Select id='Select-46' multiple={false} onChange={function noRefCheck(){}} value=''>
        <option  disabled value="">
            <p className='Nation'>Choose Your Nation</p>
        </option>
        <option value="1">
            England
        </option>
        <option value="2">
           Vietnam
        </option>
        <option value="3">
            China
        </option>
        <option value="4">
            Japan
        </option>
        </Select> 
        <Textarea icon={<FontAwesomeIcon icon={faPen} />} id='Textarea-28' label='Your content'/>
        <Button style={!dark?{color:'white'}:{color:'black'}}>Submit</Button>
    </form>
    </Row>
    </Container>
    </div>
  )
}
