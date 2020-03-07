import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="login">
            <h1>Reppy, Set, GO!</h1>
            <h2 className="below__head">(but do you, bro?)</h2>
            <div className="login__form">
              <form>
                <div className="login__form__credentials">
                  <input type="text" placeholder="Username" name="username" id="username"/>
                  <input type="password" placeholder="Password" name="password" id="password"/>
                </div>
                <div className="login__form__controls">
                  <div className="login__form__remember">
                    <input type="checkbox" name="rememberMe" id="rememberMe"/>
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to='/dashboard'>Submit</Link>
                </div>
              </form>
            </div>
          </div>
        )
    }
}
