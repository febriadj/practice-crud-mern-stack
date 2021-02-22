import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { lists: [] }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(result => result.body.map( list => ({
        title: list.title,
        author: list.author,
        rating: list.rating,
        synopsis: list.synopsis,
        url: list.url
      })))
      .then(result => this.setState({ lists: result }))
  }

  render() {
    const { lists } = this.state
    return (
      < >
        < Navbar />
        <div id="container">
          <div id="container-wrap">
            { lists.length > 0 ? lists.map( ( list, index ) => {
              return (
                <div className="lists" key={ index }>
                  <h2 className="title">{ list.title }</h2>
                  <p className="author">- { list.author }</p>
                  <p className="rating">Rating: { list.rating }</p>
                  <Link to={{
                    pathname: `details/${list.url}`,
                    state: {
                      synopsis: list.synopsis
                    }
                  }} className="link">Details</Link>
                </div>
              )
            }) : null }
          </div>
        </div>
      </>
    )
  }
}