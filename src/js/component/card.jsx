import propTypes from "prop-types";
import React from "react";

export const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-0">
                <img className="card-img-top" src="http://via.placeholder.com/500x325" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    text: propTypes.string,
}

//{prop.text}