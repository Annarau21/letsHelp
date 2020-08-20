import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../Lets_Help_Logo.png';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <div>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row row-content align-items-left">
                            <div className="col-4 col-lg-2 m-4">
                                <img height={200} width={200} src={logo}/>
                            </div>
                            <div className="col">
                                <h1>Let's Help</h1>
                                <h3>A place to learn the simple stuff.</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;