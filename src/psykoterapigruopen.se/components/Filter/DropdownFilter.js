const DropdownFilter = ({
	categories,
	language,
	changeCategory,
	changeLanguage,
	categoriesFilter,
	languageFilter,
}) => {
	return (
		<div>
			<select value={categoriesFilter} onChange={changeCategory}>
				<option value="">Kategorier</option>
				{categories.map((category, i) => (
					<option key={i} value={category}>
						{category}
					</option>
				))}
			</select>
			<select value={languageFilter} onChange={changeLanguage}>
				<option value="">Språk</option>
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
