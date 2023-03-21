import LoginInfoStepOne from "./loginInfoStepOne";
import LoginInfoStepTwo from "./loginInfoStepTwo";
import LoginInfoStepThree from "./loginInfoStepThree";
import LoginContainerCss from "./LoginContainer.module.css";

const loginContainer = () => {
	return (
		<div>
			<LoginInfoStepOne />
			<LoginInfoStepTwo />
			<LoginInfoStepThree />
			<div className={LoginContainerCss.progressContainer}>
				<div>
					<button
						className={`${LoginContainerCss.prgressBtn} ${LoginContainerCss.btnPrevPage}`}
					>
						Tillbaka
					</button>
					<button
						className={`${LoginContainerCss.prgressBtn} ${LoginContainerCss.btnNextPage}`}
					>
						Nästa
					</button>
				</div>
				<div className={LoginContainerCss.stepCounterContainer}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default loginContainer;
