import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import filterCSS from "./filter.module.css";

const Filter = ({ changeFilter }) => {
	return (
		<div className={filterCSS.filterSection}>
			<SearchBar changeFilter={changeFilter} />
			<FilterButton />
			<FilterButton />
			<FilterButton />
		</div>
	);
};

export default Filter;
