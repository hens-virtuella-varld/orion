import loginInfoStepOneCss from "./loginInfoStepOne.module.css";

const loginInfoStepOne = () => {
	return (
		<div className={loginInfoStepOneCss.container}>
			<h2 className={loginInfoStepOneCss.title}>Fyll i information nedan</h2>
			<div className={loginInfoStepOneCss.questionsContainer}>
				<div className={loginInfoStepOneCss.question}>
					<label>Förnamn</label>
					<input type="text" placeholder="Fyll i ditt förnamn" />
				</div>
				<div className={loginInfoStepOneCss.question}>
					<label>Efternamn</label>
					<input type="text" placeholder="Fyll i ditt förnamn" />
				</div>
				<div className={loginInfoStepOneCss.question}>
					<label>Ange de språk du kan arbeta på</label>
					<select name="" id=""></select>
					<option value="Språk">Språk</option>
				</div>
				<div className={loginInfoStepOneCss.question}>
					<label>Telefonnummer</label>
					<input type="text" placeholder="+46 123 456 789" />
				</div>
				<div className={loginInfoStepOneCss.question}>
					<h3>Hur erbjuder du att träffa patienter?</h3>
					<div className={loginInfoStepOneCss.btns}>
						<button>På mottagning</button>
						<button>Videosamtal</button>
						<button>Båda</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepOne;
