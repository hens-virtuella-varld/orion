import "./App.css";
import therapistData from "./psykoterapigruopen.se/therapists.json";
import Navbar from "./psykoterapigruopen.se/components/NavBar/NavBar";
import Hero from "./psykoterapigruopen.se/components/HeroSection/Hero";
import CardList from "./psykoterapigruopen.se/components/CardSection/CardList";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<CardList therapistData={therapistData} />
		</div>
	);
};

export default App;
