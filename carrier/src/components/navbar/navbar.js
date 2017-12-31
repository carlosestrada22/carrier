import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        match: {
            url: ""
        }
    }
    componentDidMount = () => { this.props.$(".button-collapse").sideNav() }
    render() {
        return (
            <div className="">
                <nav>
                    <div className="nav-wrapper white ">
                        <div className="container navbar">
                            <img src="http://via.placeholder.com/150x64" alt="logo" className="left responsive-img hide-on-med-and-down" />
                            {/* <NavLink to={`${this.state.match.url}/`} className="left brand-logo">LOGO</NavLink> */}
                            <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons black-text">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to={`${this.state.match.url}/`} >Home</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/about-us`} activeClassName='link-active'>About us</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/carriers`} activeClassName='link-active'>Carriers</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/enterprise`} activeClassName='link-active'>Enterprise</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/packages`} activeClassName='link-active'>Packages</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/public-sector`} activeClassName='link-active'>Public sector</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/contact-us`} activeClassName='link-active'>Contact us</NavLink></li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo">
                                <li><NavLink to={`${this.state.match.url}/`}>Home</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/about-us`}>About us</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/carriers`}>Carriers</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/enterprise`}>Enterprise</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/packages`}>Packages</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/public-sector`}>Public sector</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/contact-us`}>Contact us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar