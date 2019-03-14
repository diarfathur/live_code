import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom'

// import BlogControl from '../components/BlogControl';
// import TopNews from '../components/TopNews';
// import Article from '../components/Article';

class RomanceMovie extends Component {
    componentDidMount = () => {
        this.props.getMovies()
    }

    render() {
        return (
            
        )
    }
}

export default RomanceMovie
