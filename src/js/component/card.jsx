import propTypes from "prop-types";
import React from "react";

export const Card = (props) => {
    return (
            <div className="card col-sm-12 col-md-6 col-lg-3 p-0">
                <img className="card-img-top" src="http://via.placeholder.com/50x50" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}
Card.propTypes = {
    text: propTypes.string,
}

//{prop.text}