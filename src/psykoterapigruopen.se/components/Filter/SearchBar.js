import searchBarIcon from "../../assets/search-icon.svg";

const SearchBar = ({ changeFilter }) => {
	return (
		<div>
			<label>
				<img src={searchBarIcon} alt="" />
				<input
					type="text"
					name="searchBar"
					placeholder="Sök efter thereupet"
					onChange={changeFilter}
				/>
			</label>
		</div>
	);
};

export default SearchBar;
