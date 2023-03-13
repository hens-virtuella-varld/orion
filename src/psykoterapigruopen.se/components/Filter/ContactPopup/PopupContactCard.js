import map from "../../../assets/orion-map.png";

const PopupContactCard = () => {
	return (
		<div>
			<h2>
				You can directly call, email, or visit our office for get help finding a
				perfect therapist.
			</h2>
			<div>
				<p>Contact information : 1234567890</p>
				<p>Contact information : 1234567890</p>
				<p>Email address : test@test.com</p>
			</div>
			<img src={map} alt="Google Map" />
			<form action="">
				<label></label>
				<input
					type="text"
					placeholder="Send your massage here, and we will get back to you as soon as possible..."
				></input>
				<button>Send the message</button>
			</form>
		</div>
	);
};

export default PopupContactCard;
