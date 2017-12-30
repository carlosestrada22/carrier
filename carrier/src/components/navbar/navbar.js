import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                            <img src="http://via.placeholder.com/150x64" alt="logo" className="left"/>
                            {/* <Link to={`${this.state.match.url}/`} className="left brand-logo">LOGO</Link> */}
                            <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to={`${this.state.match.url}/`} >Home</Link></li>
                                <li><Link to={`${this.state.match.url}/about-us`}>About us</Link></li>
                                <li><Link to={`${this.state.match.url}/carriers`}>Carriers</Link></li>
                                <li><Link to={`${this.state.match.url}/enterprise`}>Enterprise</Link></li>
                                <li><Link to={`${this.state.match.url}/packages`}>Packages</Link></li>
                                <li><Link to={`${this.state.match.url}/public-sector`}>Public sector</Link></li>
                                <li><Link to={`${this.state.match.url}/contact-us`}>Contact us</Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo">
                                <li><Link to={`${this.state.match.url}/`}>Home</Link></li>
                                <li><Link to={`${this.state.match.url}/about-us`}>About us</Link></li>
                                <li><Link to={`${this.state.match.url}/carriers`}>Carriers</Link></li>
                                <li><Link to={`${this.state.match.url}/enterprise`}>Enterprise</Link></li>
                                <li><Link to={`${this.state.match.url}/packages`}>Packages</Link></li>
                                <li><Link to={`${this.state.match.url}/public-sector`}>Public sector</Link></li>
                                <li><Link to={`${this.state.match.url}/contact-us`}>Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar