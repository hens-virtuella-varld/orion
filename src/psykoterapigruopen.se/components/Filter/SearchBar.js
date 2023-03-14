import searchBarIcon from "../../assets/search-icon.svg";
import SearchBarCss from "./SearchBar.module.css";

const SearchBar = ({ changeFilter }) => {
	return (
		<div className={SearchBarCss.container}>
			<img src={searchBarIcon} alt="" className={SearchBarCss.icon} />
			<input
				className={SearchBarCss.input}
				type="text"
				name="searchBar"
				placeholder="Sök efter thereupet"
				onChange={changeFilter}
			/>
		</div>
	);
};

export default SearchBar;
