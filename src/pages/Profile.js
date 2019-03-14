import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom"; //penting untuk global state dan routing
import { connect } from 'unistore/react';
import {actions} from '../Store'

const Profile = props => {
    
    if (!props.is_login) {
        return <Redirect to={{ pathname: "/signin" }} />;
    } else {
        return (
            <section className="container mt-5">
                <center>
                    <h1>Profile</h1>
                    <img className="mt-5" src={props.avatar} height="100px"/>
                    <p >Email: {props.email}</p>
                    <p>Fullname: {props.username}</p>
                </center>
            </section>
        );
    }
};

export default connect (
    "is_login, email, username, avatar",
    actions
    )(withRouter(Profile))