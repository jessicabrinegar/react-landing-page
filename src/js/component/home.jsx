import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx"
import { Card } from "./card.jsx"
//create your first component
const Home = () => {
	return (
		<div><NavBar />
		<Jumbotron />
		<div className="d-flex">
		<Card text="placeholding text"/>
		<Card />
		<Card />
		<Card /></div></div>
	);
};

export default Home;
