import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx"
//create your first component
const Home = () => {
	return (
		<Jumbotron />
		<NavBar />
	);
};

export default Home;
