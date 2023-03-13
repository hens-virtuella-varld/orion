import DropdownFilter from "./DropdownFilter";
import SearchBar from "./SearchBar";
import filterCSS from "./filter.module.css";

const Filter = ({
	categories,
	changeFilter,
	language,
	changeCategory,
	changeLanguage,
	categoriesFilter,
	languageFilter,
}) => {
	return (
		<div className={filterCSS.filterSection}>
			<form>
				<SearchBar changeFilter={changeFilter} />
				<DropdownFilter
					categories={categories}
					language={language}
					changeCategory={changeCategory}
					changeLanguage={changeLanguage}
					categoriesFilter={categoriesFilter}
					languageFilter={languageFilter}
				/>
			</form>
		</div>
	);
};

export default Filter;
