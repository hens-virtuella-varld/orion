import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import filterCSS from "./filter.module.css";

const Filter = () => {
	return (
		<div className={filterCSS.filterSection}>
			<SearchBar />
			<FilterButton />
			<FilterButton />
			<FilterButton />
		</div>
	);
};

export default Filter;
