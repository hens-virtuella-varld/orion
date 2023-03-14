import QuestionCardCss from "./QuestionCard.module.css";

const QuestionCard = ({ currentQuestion }) => {
	return (
		<div className={QuestionCardCss.container}>
			<h3>{currentQuestion.question}</h3>
			<ul>
				<li>
					<input type="checkbox" />
					<p>{currentQuestion.option1}</p>
				</li>
				<li>
					<input type="checkbox" />
					<p>{currentQuestion.option2}</p>
				</li>
				<li>
					<input type="checkbox" />
					<p>{currentQuestion.option3}</p>
				</li>
				<li>
					<input type="checkbox" />
					<p>{currentQuestion.option4}</p>
				</li>
				<li>
					<input type="checkbox" />
					<p>{currentQuestion.option5}</p>
				</li>
			</ul>
		</div>
	);
};

export default QuestionCard;
