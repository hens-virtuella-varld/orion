import loginInfoStepFourCss from "./loginInfoStepFour.module.css";
import Areas from "../../areas.json";

const loginInfoStepFour = () => {
	return (
		<div className={loginInfoStepFourCss.container}>
			<h2 className={loginInfoStepFourCss.title}>
				Välj de nyckelord som matchar dig och din behandling du erbjuder
			</h2>
			<h3 className={loginInfoStepFourCss.subtitle}>Tematiska Områden</h3>

			<ul className={loginInfoStepFourCss.areasList}>
				{Areas.map((area) => (
					<li>{area}</li>
				))}
			</ul>

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
