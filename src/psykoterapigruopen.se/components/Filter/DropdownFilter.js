import DropdownFilterCss from "./DropdownFilter.module.css";

const DropdownFilter = ({
	categories,
	language,
	changeCategory,
	changeLanguage,
	categoriesFilter,
	languageFilter,
}) => {
	return (
		<div className={DropdownFilterCss.container}>
			<select value={categoriesFilter} onChange={changeCategory}>
				<option value="">Alla kategorier</option>
				{categories.map((category, i) => (
					<option key={i} value={category}>
						{category}
					</option>
				))}
			</select>
			<select value={languageFilter} onChange={changeLanguage}>
				<option value="">Alla språk</option>
				{language.map((lang, i) => (
					<option key={i} value={lang}>
						{lang}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropdownFilter;
