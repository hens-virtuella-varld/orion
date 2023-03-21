import loginInfoStepFiveCss from "./loginInfoStepFive.module.css";
import Orientaions from "../../orientation.json";

const loginInfoStepFive = () => {
	return (
		<div className={loginInfoStepFiveCss.container}>
			<h2 className={loginInfoStepFiveCss.title}>
				Välj de nyckelord som matchar dig och din behandling du erbjuder
			</h2>
			<h3 className={loginInfoStepFiveCss.subtitle}>Terapiinriktning</h3>

			<ul className={loginInfoStepFiveCss.areasList}>
				{Orientaions.map((orientaion) => (
					<li>{orientaion}</li>
				))}
			</ul>

			<div className={loginInfoStepFiveCss.questionSelection}>
				<div>
					<div
						className={`${loginInfoStepFiveCss.btnPoint} ${loginInfoStepFiveCss.selected}`}
					></div>
					<div className={loginInfoStepFiveCss.btnPoint}></div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepFive;
