//<Jumbotron />, <Navbar />, <Card />
import React from "react";

export const Jumbotron = () => {
    return (
        <div class="jumbotron">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    );
};