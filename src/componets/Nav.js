import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import WhiteLion from "../white_lion.jpg"

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" to="/"><img src={WhiteLion} alt="logo" width="40" height="25"/> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="Sign up">Sign up</Link>
              <Link className="nav-link" to="Login">Login</Link>
              <Link className="nav-link" to="Todo">Todo</Link>
              {/* <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link> */}
              {/* <p className='nav-link'>Logged in as  {this.props.user.username} </p> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
