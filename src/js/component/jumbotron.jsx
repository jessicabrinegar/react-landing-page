//<Jumbotron />, <Navbar />, <Card />
import React from "react";

export const Jumbotron = () => {
    return (
        <div class="jumbotron m-3 bg-light p-3 rounded">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos iusto debitis hic atque, ex, ipsam quia vitae tenetur nam magni, laboriosam voluptatum non. Saepe blanditiis, vero obcaecati totam iste aut!</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};
