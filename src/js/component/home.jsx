import React from "react";

import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx"
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
		<NavBar />
		<Jumbotron />
		<div className="row m-0" style={{width:"100%"}}>
		<Card text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus beatae ullam eum vel consectetur."/>
		<Card text="Lorem quo quisquam sit amet consectetur eveniet similique. Exercitationem placeat ad laborum et fugiat!"/>
		<Card text="Lorem ipsum dolor sit amet eum vel elit. Libero qui, id beatae quo quisquam neque."/>
		<Card text="Lorem ipsum, ullam eum vel consectetur ullam eum vel. Natus, soluta necessitatibus eveniet similique."/>
		</div>
		<Footer />
		</div>
	);
};
export default Home;
