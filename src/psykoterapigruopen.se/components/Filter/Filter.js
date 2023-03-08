import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import filterCSS from "./filter.module.css";

const Filter = ({ changeFilter, categories, changeCategoryFilter }) => {
	return (
		<div className={filterCSS.filterSection}>
			<SearchBar changeFilter={changeFilter} />
			<FilterButton
				categories={categories}
				changeCategoryFilter={changeCategoryFilter}
			/>
		</div>
	);
};

export default Filter;
