const FilterButton = ({ categories, changeCategoryFilter }) => {
	return (
		<div>
			{categories.map((category) => (
				<button onClick={changeCategoryFilter}>{category}</button>
			))}
		</div>
	);
};

export default FilterButton;
