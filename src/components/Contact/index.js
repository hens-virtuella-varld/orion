import React from "react";
import "./contact.css";
const Contact = () => {
	return (
		<div className="contact-container">
			<div className="content">
				<h2>Kontaktformulär</h2>
				<p>
					Vi vill att om en patient är intresserad av att komma i kontakt med en
					specifik psykoterapeut som de hittat på vår sida, så önskar vi att
					denne fyller i ett kontaktformulär, och att den infon skickas till
					psykoterapi@psykoterapigruppenorion.se med en rubrik som visar på att
					en patient söker terapeut. På så sätt kan vi som arbetar med det
					administrativa på Orion förmedla kontakten till psykoterapeuterna och
					då också debitera denne för förmedlingen av den patient som blivit
					möjlig genom vår sida. I kontaktformuläret önskar vi att patienten
					bara behöver skriva ner:
				</p>
			</div>
			<div className="contact-form">
				<form action="#">
					<div className="left-form">
						<div>
							<label htmlFor="">Namn</label>
							<br />
							<div style={{ display: "flex", gap: "1rem" }}>
								<input type="text" name="" id="" placeholder="Förnamn" />
								<input type="text" name="" id="" placeholder="Efternamn" />
							</div>
						</div>
						<div>
							<label htmlFor="">Kön</label>
							<br />
							{/* <input type="text" placeholder="Välj alternativ" /> */}
							<select name="cars" id="cars">
								<option value="Välj alternativ">Välj alternativ</option>
								<option value="Välj alternativ">Välj alternativ</option>
								<option value="Välj alternativ">Välj alternativ</option>
								<option value="Välj alternativF">Välj alternativ</option>
							</select>
						</div>
						<br />
						<div>
							<label htmlFor="">Ålder</label>
							<br />
							<input type="text" placeholder="32" />
						</div>
						<br />
						<div>
							<label htmlFor="">E-post</label>
							<br />
							<input type="text" placeholder="Ange din e-postadress" />
						</div>
						<br />
						<div>
							<label htmlFor="">Telefonnummer</label>
							<br />
							<input type="text" placeholder="+46 123 456 789" />
						</div>
						<br />
					</div>
					{/* right form */}
					<div className="right-form">
						<div>
							<label htmlFor="">Mer information</label>
						</div>

						<textarea
							name=""
							id=""
							cols="50"
							rows="10"
							placeholder="Här kan du skriva mer infromation som du tycker är viktigt."
						></textarea>
						<br />

						<div className="rightflex">
							<input type="checkbox" />
							<p>Jag instämmer att den information jag har angivit stämmer.</p>
						</div>
						<div className="rightflex">
							<input type="checkbox" />

							<p>Jag godkänner att Psykoterapigruppen Orion kontaktar mig.</p>
						</div>
						<div className="rightflex">
							<input type="checkbox" />

							<p>
								Jag samtycker till villkoren på Psykoterapigruppen Orions <br />
								hemsida.
							</p>
							<button>Skicka</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
