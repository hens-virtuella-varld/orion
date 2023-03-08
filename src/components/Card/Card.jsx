import React from "react";
import "./card.css";
const Card = () => {
	return (
		<div className="card-container">
			<img
				src="https://images.unsplash.com/photo-1595552900947-11d59614541d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
				alt=""
				width={240}
				height={240}
				style={{ borderRadius: 6, objectFit: "cover" }}
			/>
			<div className="content-container">
				<div className="content">
					<div className="content-first">
						<span>Leila</span>
						<br />
						<span>leg. psykoterpeut</span>
					</div>
					<div className="content-second">
						<span>
							<img src="/marker-pin.svg" alt="" /> Stockholm
						</span>
						<span>
							<img src="/videocamera.svg" alt="" /> videosamtal
						</span>
					</div>
				</div>
				<div className="address-price">
					<p>Svenska, Engelska och Spanska</p>
					<p>1200kr</p>
				</div>
				<div className="items">
					<span>Depression</span>
					<span>ADHD</span>

					<span>Ångest</span>
					<span>Parterapi</span>
					<span>KBT</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
