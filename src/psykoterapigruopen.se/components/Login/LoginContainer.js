import LoginInfoStepOne from "./loginInfoStepOne";
import LoginInfoStepTwo from "./loginInfoStepTwo";
import LoginInfoStepThree from "./loginInfoStepThree";
import LoginInfoStepFour from "./loginInfoStepFour";
import LoginInfoStepFive from "./loginInfoStepFive";
import LoginContainerCss from "./LoginContainer.module.css";

import { useState } from "react";

const LoginContainer = () => {
	const [currentSignUpStep, setCurrentSignUpStep] = useState(0);

	const handlNextClick = () => {
		setCurrentSignUpStep(currentSignUpStep + 1);
	};

	const handlPrevClick = () => {
		setCurrentSignUpStep(currentSignUpStep - 1);
	};

	console.log(currentSignUpStep);

	let currentStepComponent;

	switch (currentSignUpStep) {
		case 0:
			currentStepComponent = <LoginInfoStepOne />;
			break;
		case 1:
			currentStepComponent = <LoginInfoStepTwo />;
			break;
		case 2:
			currentStepComponent = <LoginInfoStepThree />;
			break;
		case 3:
			currentStepComponent = <LoginInfoStepFour />;
			break;
		case 4:
			currentStepComponent = <LoginInfoStepFive />;
			break;
	}

	const counter = [];

	for (let i = 0; i < 5; i++) {
		const isCurrent = currentSignUpStep === i;
		const currentStyle = {
			backgroundColor: isCurrent ? "#69B1B0" : "#D9D9D9",
		};

		counter.push(
			<div
				key={i}
				className={LoginContainerCss.stepCounterContainerStep}
				style={currentStyle}
			></div>
		);
	}

	return (
		<div>
			{currentStepComponent}
			<div className={LoginContainerCss.progressContainer}>
				<div>
					<button
						className={`${LoginContainerCss.prgressBtn} ${LoginContainerCss.btnPrevPage}`}
						onClick={handlPrevClick}
					>
						Tillbaka
					</button>
					<button
						className={`${LoginContainerCss.prgressBtn} ${LoginContainerCss.btnNextPage}`}
						onClick={handlNextClick}
					>
						Nästa
					</button>
				</div>
				<div className={LoginContainerCss.stepCounterContainer}>{counter}</div>
			</div>
		</div>
	);
};

export default LoginContainer;
