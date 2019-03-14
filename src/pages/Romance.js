import React, { Component } from 'react';
import Content from '../components/Content';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'
const baseUrl = 'https://api-todofancy.herokuapp.com/api/movies'

class Romance extends Component {

    componentDidMount = () => {
        this.props.getMovies()
    }

    render() {
        return (
            <div>
                <div class="col-12">
                    {this.props.listMovies
                        // .filter(item => {return item.Catagory === "romance"})
                        .map((item, key) => {
                        const poster = item.Poster
                        const catagory = item.Catagory;
                        const title = item.Title;
                        const sinopsis = item.Synopsis;
                        const year = item.Year;
                        

                        return <Content key={key}
                            poster={poster} 
                            catagory={catagory} 
                            title={title}
                            sinopsis={sinopsis}
                            year={year} />

                    })}
                </div>
            </div>
        )
    }
}

export default connect("listMovies, username, is_login", actions)(withRouter(Romance));