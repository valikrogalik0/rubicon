import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="container">
                        <img src="./image/rubiconLogo.png" alt="Rubicon.com" />
                </div>
            </div>
        )
    }
}