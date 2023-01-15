import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx"
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="container-fluid"><NavBar />
		<Jumbotron />
		<div className="row m-auto" style={{width:"100%"}}>
		<Card text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae ullam eum vel consectetur."/>
		<Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem placeat ad laborum et fugiat!"/>
		<Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui, id beatae quo quisquam neque."/>
		<Card text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, soluta necessitatibus eveniet similique."/>
		</div>
		<Footer /></div>
	);
};
export default Home;
