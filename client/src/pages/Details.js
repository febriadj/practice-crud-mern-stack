import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Details extends Component {
  constructor(){
    super()
    this.state = { list: {} }
  }
  
  render() {
    return (
      <div id="container">
        <div id="container-wrap"></div>
      </div>
    )
  }
}