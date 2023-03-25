import DropdownFilterCss from "./DropdownFilter.module.css";

const DropdownFilter = ({
	categories,
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
			<select onChange={changeTematiska}>
				<option value="">Alla tematiska områden</option>
				{tematiska.map((tema, i) => (
					<option key={i} value={tema}>
						{tema}
					</option>
				))}
			</select>
			<select onChange={changeTerapiOmråde}>
				<option value="">Alla terapiinriktningar</option>
				{terapiområde.map((terapi, i) => (
					<option key={i} value={terapi}>
						{terapi}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropdownFilter;
