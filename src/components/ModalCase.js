import React from 'react'
import './modalshow.css'
import { useContext} from 'react';
import { ThemeContext } from './TnemeContext';
export default function ({setIsOpen,films}) {
    const {theme, toggle, dark}= useContext(ThemeContext)
  return (
    <div className='modal-show' onClick={()=>setIsOpen(false)}>
        <div id='modal1' className='modal' style={{display:'block', top:'35%'}}>
          <div className='modal-content' style={!dark?{backgroundColor:'white'}:{backgroundColor:'black'}}>
            <h4  style={!dark?{color:'black'}:{color:'white'}}> Video for {films.tittle}</h4>
            <p><iframe width="560" height="315" src={films.clip} title={films.titte}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
          </div>
          <div className='modal-footer' >
            <a className='modal-close red-text'>Close</a>
          </div>
        </div>
    </div>
  )
}

