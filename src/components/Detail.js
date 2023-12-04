import React from 'react'
import { ThemeContext } from './TnemeContext'
import { useState, useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Fimls } from '../container/ListOfFilm'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'

import './Detail.css'
import ModalCase from './ModalCase';
export default function Detail() {
  const filmsid  = useParams()
  const FilmID = filmsid.id
  const [filmdata, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const {theme, toggle, dark}= useContext(ThemeContext)
  useEffect(() => {
    fetch(`https://6535e207c620ba9358ecbed0.mockapi.io/projecttest/${FilmID}`).then((res) => {
        return res.json();
    }).then((resp) => {
      setData(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, []);

   
   return(
    <div className='detail-card' style={!dark?{backgroundColor:'rgb(236, 236, 236)'}:{backgroundColor:'gray'}}>
    <Row>
    <Col
      m={6}
      s={12}
    >
      <Card className='Card-detail'
        style={!dark?{backgroundColor:'#fff'}:{backgroundColor:'rgb(197, 191, 191)'}}
        header={<CardTitle image={filmdata.img}></CardTitle>}
        revealIcon={<Icon>more_vert</Icon>}
      >
        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <FontAwesomeIcon icon={faPlayCircle} />
                  
 </a>
 {isOpen && <ModalCase setIsOpen={setIsOpen} films={filmdata} />}
        <h1   style={!dark?{color:'black'}:{color:'#fff'}}>{filmdata.tittle}</h1>
        <p style={!dark?{color:'black'}:{color:'#fff'}}>Episode: {filmdata.episode}</p>
       <p style={!dark?{color:'black'}:{color:'#fff'}}>{filmdata.info}</p>
      </Card>
    </Col>
  </Row>
  </div>
   )
}
