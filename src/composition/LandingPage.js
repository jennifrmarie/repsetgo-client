import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div class="login-screen">
                <span>This is where a login screen will go...</span>
                <Link to="/dashboard">CLICK TO ENTER!</Link>
            </div>
        )
    }
}
