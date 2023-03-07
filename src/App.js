import "./App.css";
import { useState } from "react";
import therapistData from "./psykoterapigruopen.se/therapists.json";
import Navbar from "./psykoterapigruopen.se/components/NavBar/NavBar";
import Hero from "./psykoterapigruopen.se/components/HeroSection/Hero";
import CardList from "./psykoterapigruopen.se/components/CardSection/CardList";
import Filter from "./psykoterapigruopen.se/components/Filter/Filter";
import TherapistInfo from "./psykoterapigruopen.se/components/CardSection/TherapistInfo";

const App = () => {
	const [searchBarFilter, setSearchBarFilter] = useState("");

	const changeFilter = (e) => {
		setSearchBarFilter(e.target.value);
	};

	const keys = ["name", "city"];

	const searchFilter = (therapist) =>
		keys.some((key) =>
			therapist[key].toLowerCase().startsWith(searchBarFilter.toLowerCase())
		);

	const filteredTherapists = therapistData.filter(searchFilter);

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Filter changeFilter={changeFilter} />
			<CardList therapistData={filteredTherapists} />
			<TherapistInfo therapistData={therapistData} />
		</div>
	);
};

export default App;
