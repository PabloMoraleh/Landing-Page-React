import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container" >
				<Jumbotron />
				<div className="container text-center">
					<div className="row">
						<div className="col-md col-lg-3 px-2">
							<Card />
						</div>
						<div className="col-md col-lg-3 px-2">
							<Card />
						</div>
						<div className="col-md col-lg-3 px-2">
							<Card />
						</div>
						<div className="col-md col-lg-3 px-2">
							<Card />
						</div>
					</div>
				</div>
			</div>
			<div className="pt-5">
			<Footer />
			</div>
		</>
	);
};

export default Home;
