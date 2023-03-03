import searchBarIcon from "../../assets/search-icon.svg";

const SearchBar = () => {
	return (
		<div>
			<label for="searchBar"></label>
			<img src={searchBarIcon} alt="" />
			<input name="searchBar" placeholder="Sök efter thereupet" />
		</div>
	);
};

export default SearchBar;
