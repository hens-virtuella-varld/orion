import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignUpForm from "./pages/SignUp/SignUpForm";
import Card from "./psykoterapigruopen.se/components/CardSection/Card";
import CardSmall from "./psykoterapigruopen.se/components/CardSection/CardSmall";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cards" element={<Card />} />
				<Route path="/cards/:id" element={<CardSmall />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signupform" element={<SignUpForm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
