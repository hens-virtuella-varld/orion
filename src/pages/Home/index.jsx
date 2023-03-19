import "../../App.css";
import { useState } from "react";
import therapistData from "../../psykoterapigruopen.se/therapists.json";
import Navbar from "../../psykoterapigruopen.se/components/NavBar/NavBar";
import Hero from "../../psykoterapigruopen.se/components/HeroSection/Hero";
import CardList from "../../psykoterapigruopen.se/components/CardSection/CardList";
import Filter from "../../psykoterapigruopen.se/components/Filter/Filter";
import TherapistInfo from "../../psykoterapigruopen.se/components/CardSection/TherapistInfo";
import DirectionCardWrapper from "../../psykoterapigruopen.se/components/Filter/DirectionCardWrapper";
import directionImgOne from "../../psykoterapigruopen.se/assets/orion-filtersystem.svg";
import directionImgTwo from "../../psykoterapigruopen.se/assets/orion-fa-personlig-hjalp.svg";
import directionImgThree from "../../psykoterapigruopen.se/assets/orion-svara-pa-fragor.svg";
import PopupContactCard from "../../psykoterapigruopen.se/components/Filter/ContactPopup/PopupContactCard";
import questions from "../../psykoterapigruopen.se/questions.json";
import QuestionForm from "../../psykoterapigruopen.se/components/Filter/QuestionFilter/QuestionFrom";
import Footer from "../../psykoterapigruopen.se/components/Footer/Footer";
import RecommendedTherapists from "../../psykoterapigruopen.se/components/Filter/QuestionFilter/RecommendedTherapists";
const Home = () => {
	const [showFilterPopup, setShowFilterPopup] = useState(true);
	const [showContactPopup, setShowContactPopup] = useState(false);
	const [showQuestionsPopup, setShowQuestionsPopup] = useState(false);

	const [selected, setSelected] = useState("");
	const [searchBarFilter, setSearchBarFilter] = useState("");
	const [categoriesFilter, setCategoriesFilter] = useState("");
	const [languageFilter, setLanguageFilter] = useState("");

	const [questionValue, setQuestionValue] = useState("");

	const handleStateChange = (newValue) => {
		setQuestionValue(newValue);
	};

	const showRecommended = questionValue === 5;

	const categories = [
		...new Set(therapistData.flatMap((data) => data.category)),
	];

	const language = [...new Set(therapistData.flatMap((data) => data.language))];

	const togglePopup = (id) => {
		if (id === "01") {
			setShowFilterPopup(true);
			setShowQuestionsPopup(false);
			setShowContactPopup(false);
			setQuestionValue("");
		}
		if (id === "02") {
			setShowQuestionsPopup(true);
			setShowFilterPopup(false);
			setShowContactPopup(false);
			setQuestionValue("");
		}
		if (id === "03") {
			setShowContactPopup(true);
			setShowFilterPopup(false);
			setShowQuestionsPopup(false);
			setQuestionValue("");
		}
	};
	// filter logic bellow
	const changeFilter = (e) => {
		setSearchBarFilter(e.target.value);
	};

	const keys = ["name", "city"];

	const searchFilter = (therapist) =>
		keys.some((key) =>
			therapist[key].toLowerCase().startsWith(searchBarFilter.toLowerCase())
		);

	const changeCategory = (e) => {
		setCategoriesFilter(e.target.value);
	};

	const changeLanguage = (e) => {
		setLanguageFilter(e.target.value);
	};

	const categoryFilter = (therapist) => {
		if (categoriesFilter.length === 0) {
			return true;
		}
		return therapist.category.includes(categoriesFilter);
	};

	const langFilter = (therapist) => {
		if (languageFilter.length === 0) {
			return true;
		}
		return therapist.language.includes(languageFilter);
	};

	const filteredTherapists = therapistData
		.filter(searchFilter)
		.filter(categoryFilter)
		.filter(langFilter);
	// should be moved to json?
	const directionCardData = [
		{ key: "01", img: directionImgOne, text: "Använd filtersystemet" },
		{ key: "02", img: directionImgTwo, text: "Svara på frågor" },
		{ key: "03", img: directionImgThree, text: "Få personlig hjälp" },
	];

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<DirectionCardWrapper
				togglePopup={togglePopup}
				directionCardData={directionCardData}
			/>
			{showContactPopup && <PopupContactCard />}
			{!showRecommended && showQuestionsPopup && (
				<QuestionForm
					questions={questions}
					handleStateChange={handleStateChange}
				/>
			)}
			{showRecommended && (
				<RecommendedTherapists therapistData={therapistData} />
			)}
			{showFilterPopup && (
				<Filter
					changeFilter={changeFilter}
					changeCategory={changeCategory}
					changeLanguage={changeLanguage}
					selected={selected}
					setSelected={setSelected}
					categories={categories}
					language={language}
					categoriesFilter={categoriesFilter}
					languageFilter={languageFilter}
				/>
			)}
			{showFilterPopup && <CardList therapistData={filteredTherapists} />}

			<Footer />

			{/* <TherapistInfo therapistData={therapistData} /> */}

		</div>
	);
};

export default Home;