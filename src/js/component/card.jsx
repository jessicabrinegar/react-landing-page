import propTypes from "prop-types";
import React from "react";

export const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

//{prop.text}