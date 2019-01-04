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
                <div className="header-navigation">
                    
                            <Link to="/" >HOME</Link>
                        
                            <Link to="/shop" >SHOP</Link>
                            <span className="arrow" >▾</span>
                        
                            <Link to="/contacts" >CONTACTS</Link>
                        
                            <Link to="" id="account"></Link>

                            <span id="search" ></span>
                        
                            <Link to="" id="basket"></Link>
                            {/* <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/>
                            <Route path='' component={}/> */}
                </div>
            </div>
            <div className="blue"></div>
            <div className="red"></div>
            </React.Fragment>
        )
    }
}