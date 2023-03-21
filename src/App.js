import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp/SignUp";
import SignUpForm from "./pages/SignUp/SignUpForm";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signupform" element={<SignUpForm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
