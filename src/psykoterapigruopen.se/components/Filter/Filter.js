import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import filterCSS from "./filter.module.css";
import { useState } from "react";

const Filter = ({selected, setSelected, lokal, region, format, tematik}) => {
	return (
		<div className={filterCSS.filterSection}>
			<SearchBar />
			<Dropdown selected={(selected)} setSelected={(setSelected)} options={(lokal)}/>
			<Dropdown selected={(selected)} setSelected={(setSelected)} options={(region)}/>
			<Dropdown selected={(selected)} setSelected={(setSelected)} options={(format)}/>
			<Dropdown selected={(selected)} setSelected={(setSelected)} options={(tematik)}/>
		</div>
	);
};

export default Filter;
