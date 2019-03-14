import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Romance from './pages/Romance';
import Profile from './pages/Profile';


class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/romance" component={Romance} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        )
    }
}

export default MainRoute;