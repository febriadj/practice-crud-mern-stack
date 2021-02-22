import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { endpoint: props.match.params.title, result: {} }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/' + this.state.endpoint)
      .then(res => res.json())
      .then(res => this.setState({ result: res.body }))
  }

  render() {
    const { result } = this.state
    return (
      < >
      < Navbar />
      <div id="container">
        <div id="container-wrap">
          <h2>{ result.title }</h2>
          <p>{ result.synopsis }</p>
        </div>
      </div>
      </>
    )
  }
}