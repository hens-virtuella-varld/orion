const loginInfoStepOne = () => {
	return (
		<div>
			<h2>Fyll i information nedan</h2>
			<div>
				<label>Förnamn</label>
				<input type="text" placeholder="Fyll i ditt förnamn" />
				<label>Telefonnummer</label>
				<input type="text" placeholder="+46 123 456 789" />
			</div>
			<div>
				<label>Efternamn</label>
				<input type="text" placeholder="Fyll i ditt förnamn" />
				<h3>Hur erbjuder du att träffa patienter?</h3>
				<div>
					<button>Bara på kontor</button>
					<button>Bara videosamtal</button>
					<button>Båda</button>
				</div>
			</div>
			<label>Välj vilka språk du erbjuder</label>
			<select name="" id=""></select>
			<option value="Språk">Språk</option>
		</div>
	);
};

export default loginInfoStepOne;
