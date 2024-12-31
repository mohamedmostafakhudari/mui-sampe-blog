import { Button, CssBaseline } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Navbar />
			<Hero />
			<Carousel />
			<Posts />
			<Footer />
		</React.Fragment>
	);
}

export default App;
