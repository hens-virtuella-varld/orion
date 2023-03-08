import searchBarIcon from "../../assets/search-icon.svg";

const SearchBar = ({ changeFilter }) => {
	return (
		<div>
			<label for="searchBar"></label>
			<img src={searchBarIcon} alt="" />
			<input
				type="text"
				name="searchBar"
				placeholder="Sök efter thereupet"
				onChange={changeFilter}
			/>
		</div>
	);
};

export default SearchBar;
