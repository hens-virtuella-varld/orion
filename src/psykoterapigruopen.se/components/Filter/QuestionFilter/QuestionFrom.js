import { useState } from "react";
import QuestionCard from "./QuestionCard";
import QuestionFormCss from "./QuestionFrom.module.css";
const QuestionForm = ({ questions, handleStateChange }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const currentQuestion = questions[currentQuestionIndex];

	const handleNextClick = () => {
		if (currentQuestionIndex === questions.length - 1) {
			handleStateChange(currentQuestionIndex + 1);
			console.log("done");
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	const handlePrevClick = () => {
		if (currentQuestionIndex === 0) {
			return;
		} else {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const counter = [];

	for (let i = 0; i < questions.length; i++) {
		const isCurrent = currentQuestionIndex === i;
		const currentStyle = {
			backgroundColor: isCurrent ? "#69B1B0" : "#FFFFFF",
		};

		counter.push(
			<div
				key={i}
				className={QuestionFormCss.counter}
				style={currentStyle}
			></div>
		);
	}
	const firstQuestion = currentQuestionIndex === 0;

	const doNotDisplayPrev = {
		opacity: firstQuestion ? "0%" : "100%",
	};

	return (
		<div className={QuestionFormCss.container}>
			<h2>Answer These five questions to get the best therapist for you</h2>
			<div className={QuestionFormCss.counterContainer}>{counter}</div>
			<QuestionCard currentQuestion={currentQuestion} />
			<div className={QuestionFormCss.btnContainer}>
				<button
					className={QuestionFormCss.prevBtn}
					style={doNotDisplayPrev}
					onClick={handlePrevClick}
				>
					Föregående fråga
				</button>
				<button className={QuestionFormCss.nextBtn} onClick={handleNextClick}>
					{currentQuestionIndex === questions.length - 1
						? "Se resultat"
						: "Nästa fråga"}
				</button>
			</div>
		</div>
	);
};

export default QuestionForm;
