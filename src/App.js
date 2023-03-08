import "./App.css";
import { useState } from "react";
import therapistData from "./psykoterapigruopen.se/therapists.json";
import Navbar from "./psykoterapigruopen.se/components/NavBar/NavBar";
import Hero from "./psykoterapigruopen.se/components/HeroSection/Hero";
import CardList from "./psykoterapigruopen.se/components/CardSection/CardList";
import Filter from "./psykoterapigruopen.se/components/Filter/Filter";
import TherapistInfo from "./psykoterapigruopen.se/components/CardSection/TherapistInfo";
import DirectionCardWrapper from "./psykoterapigruopen.se/components/Filter/DirectionCardWrapper";
import directionImgOne from "./psykoterapigruopen.se/assets/orion-filtersystem.svg";
import directionImgTwo from "./psykoterapigruopen.se/assets/orion-fa-personlig-hjalp.svg";
import directionImgThree from "./psykoterapigruopen.se/assets/orion-svara-pa-fragor.svg";

const App = () => {
	const [selected, setSelected] = useState("");
	const lokal = ["Stockholm", "Malmö", "Göteborg"];
	const region = ["Stockholm Region", "Malmö region", "Göteborg region"];
	const tematik = ["Stockholm tematik", "Malmö tematik", "Göteborg tematik"];
	const format = ["Stockholm format", "Malmö format", "Göteborg format"];

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

	const directionCardData = [
		{
			img: directionImgOne,
			text: "Använd filtersystemet",
		},
		{
			img: directionImgTwo,
			text: "Svara på frågor",
		},
		{
			img: directionImgThree,
			text: "Få personlig hjälp",
		},
	];

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<DirectionCardWrapper directionCardData={directionCardData} />
			<Filter
				changeFilter={changeFilter}
				selected={selected}
				setSelected={setSelected}
				lokal={lokal}
				region={region}
				tematik={tematik}
				format={format}
			/>
			<CardList therapistData={filteredTherapists} />

			<TherapistInfo therapistData={therapistData} />
		</div>
	);
};

export default App;
