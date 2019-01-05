import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Header.css'
import Item from './Item'

export default class Header extends Component {

    toggleTitle = (e) => {
        console.log(e);
        e.currentTarget.children[0].classList.add('toggleTitle');
        e.currentTarget.onmouseout = (e) => e.currentTarget.children[0].classList.remove('toggleTitle');
    }

    render() {
        return(
            <React.Fragment>
            <div className="header" onMouseOver={ this.toggleTitle }>
                    <Link to="/" onmouse>
                        RUBICON
                    </Link>
                    <Route path="/" component={ Item } />
                {/* <div className="header-navigation"> */}
                    <ul className="header-menu">
                        <li className="sub-menu">
                            <Link to="/" >HOME</Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/shop" >SHOP ▾</Link>
                            {/* <span className="arrow" >▾</span> */}
                        </li>
                        <li className="sub-menu">
                            <Link to="/contacts" >CONTACTS</Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="" id="account">
                                
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link id="search" to=""></Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="" id="basket">
                            </Link>
                        </li>
                            {/* <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/> */}
                    </ul>
                {/* </div> */}
            </div>
            <div className="blue"></div>
            <div className="red"></div>
            </React.Fragment>
        )
    }
}