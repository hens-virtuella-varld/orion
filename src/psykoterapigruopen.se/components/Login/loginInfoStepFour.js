import loginInfoStepFourCss from "./loginInfoStepFour.module.css";

const loginInfoStepFour = () => {
	return (
		<div className={loginInfoStepFourCss.container}>
			<h2 className={loginInfoStepFourCss.title}>
				Välj de nyckelord som matchar dig och din behandling du erbjuder
			</h2>
			<h3 className={loginInfoStepFourCss.subtitle}>Tematiska Områden</h3>
			<div className={loginInfoStepFourCss.expertiseChoicesBox}>
				<ul>

					{/* {blabla.map((bla) => (
						<li>{bla}</li>
					))} */}

				</ul>
			</div>
			<div className={loginInfoStepFourCss.questionSelection}>
				<div>
					<div
						className={`${loginInfoStepFourCss.btnPoint} ${loginInfoStepFourCss.selected}`}
					></div>
					<div className={loginInfoStepFourCss.btnPoint}></div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepFour;
