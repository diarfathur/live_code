import React, { Component } from 'react';
import PropTypes from "prop-types";


class Content extends Component {

   render() {
      return (

         <div className="card mb-2">
            <div className="card-body">
               <img src={this.props.poster}/>
               <h5 className="card-title"><a href="#">{this.props.title}</a></h5>
               <p className="card-text"><small className="text-muted">Year {this.props.year}</small></p>
               <p className="card-text"><small className="text-muted">Catagory {this.props.catagory}</small></p>
               <p className="card-text">{this.props.sinopsis}</p>
            </div>
         </div>
      );
   }
}


export default Content;