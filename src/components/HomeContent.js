import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <div class="card" height="400px" style={{ width: "18rem" }} style={{ border: "none" }}>
                            <h5 class="card-title text-center mb-0">Romance</h5>
                            <div class="card-body justify-content-center ml-auto mr-auto">
                                <img class="card-img-top mb-2 row text-center" src={require("../images/romance.jpg")} alt="romance" />
                                <Link to="/romance" class="btn btn-primary row text-center">View Movies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div class="card" height="400px" style={{ width: "18rem" }} style={{ border: "none" }}>
                            <h5 class="card-title text-center mb-0">Action</h5>
                            <div class="card-body justify-content-center ml-auto mr-auto">
                                <img class="card-img-top mb-2 row text-center" src={require("../images/action.jpg")} alt="action" />
                                <a href="#" class="btn btn-primary row text-center">View Movies</a>
                            </div>
                        </div>
                    </div><div className="col-3 text-center">
                        <div class="card" height="400px" style={{ width: "18rem" }} style={{ border: "none" }}>
                            <h5 class="card-title text-center mb-0">Fiction</h5>
                            <div class="card-body justify-content-center ml-auto mr-auto">
                                <img class="card-img-top mb-2 row text-center" src={require("../images/fiction.jpg")} alt="fiction" />
                                <a href="#" class="btn btn-primary row text-center">View Movies</a>
                            </div>
                        </div>
                    </div><div className="col-3 text-center">
                        <div class="card" height="400px" style={{ width: "18rem" }} style={{ border: "none" }}>
                            <h5 class="card-title text-center mb-0">Comedy</h5>
                            <div class="card-body justify-content-center ml-auto mr-auto">
                                <img class="card-img-top mb-2 row text-center" src={require("../images/comedy.jpg")} alt="comedy" />
                                <a href="#" class="btn btn-primary row text-center">View Movies</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default HomeContent