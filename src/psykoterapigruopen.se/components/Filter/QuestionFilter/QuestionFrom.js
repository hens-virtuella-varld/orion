import { useState } from "react";
import QuestionCard from "./QuestionCard";
const QuestionForm = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const currentQuestion = questions[currentQuestionIndex];

	const handleNextClick = () => {
		if (currentQuestionIndex === questions.length - 1) {
			console.log("done");
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	return (
		<div>
			<h2>Answer These five questions to get the best therapist for you. </h2>
			<QuestionCard currentQuestion={currentQuestion} />
			<button onClick={handleNextClick}>
				{currentQuestionIndex === questions.length - 1
					? "Done"
					: "Next Question"}
			</button>
		</div>
	);
};

export default QuestionForm;
