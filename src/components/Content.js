import React from 'react'
import './Content.css'
import { Fimls } from '../container/ListOfFilm'
import {useState, useContext, useEffect} from 'react';
import { ThemeContext } from './TnemeContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons'
export default function Content() {
  const [films,setFilm]= useState([])
  const {theme, toggle, dark}= useContext(ThemeContext)
  const [data, setData] = useState([])
  const baseUrl = `https://6535e207c620ba9358ecbed0.mockapi.io/projecttest`
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response)
      .then(e => e.json())
      .then(e => setData(e))
      .catch(error => console.log(error.message))
  }, [])
  return (
    <div className='Content-films' style={!dark?{backgroundColor:'rgb(236, 236, 236)'}:{backgroundColor:'gray'}}>
       <div className='Slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1' />
          <input type='radio' name='radio-btn' id='radio2' />
          <input type='radio' name='radio-btn' id='radio3' />
          <input type='radio' name='radio-btn' id='radio4' />
          <div className='slide first'>
            <img src='/filmsimg/banner4.jpg' alt='' />
          </div>
          <div className='slide '>
            <img src='/filmsimg/banner2.jpg' alt='' />
          </div>
          <div className='slide '>
            <img src='/filmsimg/banner3.jpg' alt='' />
          </div>
          <div className='slide '>
            <img src='/filmsimg/banner1.jpg' alt='' />
          </div>
        </div>
        <div className='navigation-manual'>
          <label for='radio1' className='manual-btn'></label>
          <label for='radio2' className='manual-btn'></label>
          <label for='radio3' className='manual-btn'></label>
          <label for='radio4' className='manual-btn'></label>
        </div>
      </div> 
   <div className='content' >
   <div className='container' >
    <div className='row animelist ' >    
      {data.map((item)=>(
          <div className='col-lg-4 col-md-5 col-sm-6 card ' style={{backgroundColor: theme.backgroundColor, color:theme.color}}  >
            <img className='filmscontent' src={item.img}></img>
          <h1 style={!dark?{color:'black'}:{color:'white'}}>{item.tittle}</h1>
          <p style={!dark?{color:'black'}:{color:'gray'}}>{item.Year}</p>
          <p style={!dark?{color:'black'}:{color:'gray'}}>{item.Nation}</p>      
          <Link to={`detail/${item.id}`}> 
   <div className='view-product'>
                        <button className='view-btn'><FontAwesomeIcon icon={faEye} /></button>
                    </div>
</Link>
          </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  )
}
