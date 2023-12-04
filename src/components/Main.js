import React, { Component } from 'react'
import { Fimls } from '../container/ListOfFilm'
import Content from './Content'
import Detail from './Detail'
export default class Main extends Component {
    constructor(){
        super()
        this.state={
            Fimls10k: Fimls
        }
    }
  render() {
    return (
      <div>
        <Content Fimls5k={this.state.Fimls10k}/>
      </div>
    )
  }
}
