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
	changeTerapiOmråde,
	changeTematiska,
	tematiskaFilterFunc,
	tematiska,
	terapiområde,
	terapiOmrådeFilterFunc,
}) => {
	return (
		<div>
			<form className={filterCSS.filterSection}>
				<SearchBar changeFilter={changeFilter} />
				<DropdownFilter
					categories={categories}
					language={language}
					changeCategory={changeCategory}
					changeLanguage={changeLanguage}
					categoriesFilter={categoriesFilter}
					languageFilter={languageFilter}
					changeTerapiOmråde={changeTerapiOmråde}
					changeTematiska={changeTematiska}
					tematiskaFilterFunc={tematiskaFilterFunc}
					tematiska={tematiska}
					terapiområde={terapiområde}
					terapiOmrådeFilterFunc={terapiOmrådeFilterFunc}
				/>
			</form>
		</div>
	);
};

export default Filter;
