import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
    return (
        <div className="container-fluid mb-5 border">
            <div className="row aboutheader">
                <div className="col-md-3 col-sm-12 col-12">
                    <nav className="justify-content-start">
                        <ul className="nav justify-content-start headerlist" id="navbarku">
                            <li className="nav-item">
                                <img className="nav-link" src={require("../logo.svg")} height="80%" alt="logo-alterra" />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">MOVIES</a>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div className="col-md-9 col-sm-12 col-12">
                    <nav className="justify-content-end">
                        <ul className="nav justify-content-end headerlist" id="navbarku">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">PROFILE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-success" to="/signin">SIGN IN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-danger" to="/" onClick={() => this.props.postSignout()}>SIGN OUT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};


export default Header;