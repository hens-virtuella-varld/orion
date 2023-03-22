import PopupContactCardCss from "./PopupContactCard.module.css";

const PopupContactCard = () => {
	return (
		<div className={PopupContactCardCss.container}>
			<h2>Fyll i din information så kontaktar vi dig</h2>
			<form className={PopupContactCardCss.form}>
				<div className={PopupContactCardCss.colOne}>
					<div className={PopupContactCardCss.colOneItem}>
						<h4>Fyll i ditt namn här</h4>
						<input type="text" />
					</div>
					<div className={PopupContactCardCss.colOneItem}>
						<h4>Var god skriv ditt telefonnummer här</h4>
						<input type="text" />
					</div>
				</div>
				<div className={PopupContactCardCss.colTwo}>
					<h4>Var god skriv din e-postadress här</h4>
					<input type="text" />
				</div>
				<div className={PopupContactCardCss.textareaContainer}>
					<h4>Här kan du skriva din situation och vad duvill ha hjälp med</h4>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<div className={PopupContactCardCss.colFour}>
					<div>
						<button>Skicka</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PopupContactCard;
