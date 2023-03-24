import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../therapists.json";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./cardsmall.css";
const CardSmall = () => {
	const { id } = useParams();
	const item = productsData.find((prod) => prod.id === id);
	return (
		<>
			<Navbar />
			<div className="profile">
				<div className="sidebar">
					<img
						width={"100%"}
						height={400}
						style={{ objectFit: "cover" }}
						src={item.img}
						alt="ice-cream"
					/>
					<h2>{item.name}</h2>
					<p className="gray-color">{item.title}</p>
					<div className="first-icon">
						<img src={item.img} alt={"location" + item.id} />
						<span>{item.city}</span>
					</div>
					<div className="second-icon">
						<img src={item.img} alt="video" />
						<span>{item.method}</span>
					</div>
					<p>
						<b>Pris: </b>
						{item.price}
					</p>
					<button>Kontakta mig</button>
				</div>
				<div className="profile-content">
					<div>
						<h3>SAMMANFATTNING AV DIG SOM EN PSYKOTERAPEUT</h3>
						<p>{item.info}</p>
					</div>
					<div className="icons-container">
						<div className="icons-first">
							{item.category.map((items) => (
								<span
									style={{
										margin: "0rem 1rem",
										background: "#e1efef",
										padding: ".5rem 1rem",
										borderRadius: "1rem",
									}}
								>
									{items}
								</span>
							))}
						</div>
						<div className="icons-second">
							<button>Sömnproblem</button>
							<button>Självkänsla</button>
							<button>Fobier</button>
							<button>PTSD</button>
						</div>
					</div>

					<div>
						<h4>OM MIG</h4>
						<p>
							Jag är en legitermerad psykoterapeut som jobbar med barn (1-10).
							Jag använder olika terapeutiska områden att stödja barn. Jag är en
							legitermerad psykoterapeut som jobbar med barn (1-10). Jag
							använder olika terapeutiska områden att stödja barn. Jag är en
							legitermerad psykoterapeut som jobbar med barn (1-10). Jag
							använder olika terapeutiska områden att stödja barn.
						</p>
					</div>
					<div>
						<h4>YRKESBAKGRUND</h4>
						<p>
							Jag är en psykoterapeut som är utbildad för att tillhandahålla
							terapi till individer eller grupper som upplever emotionella,
							mentala eller beteendemässiga problem. Som psykoterapeut hjälper
							jag mina klienter att utforska och lösa sina psykologiska och
							emotionella problem.
						</p>
						<p>
							Mina ansvarsområden inkluderar att genomföra bedömningar, utveckla
							behandlingsplaner, tillhandahålla individuella eller
							gruppterapisessioner och dokumentera klienternas framsteg. Jag
							arbetar med klienter för att identifiera deras problem och hjälpa
							dem att utveckla hanteringsstrategier för att hantera sina symtom.
							Målet med psykoterapi är att främja mental hälsa och emotionellt
							välbefinnande, öka självmedvetenheten och förbättra klienternas
							livskvalitet.
						</p>
					</div>
					<div>
						<h4>PSYKOTERAPEUTISK ERFARENHET</h4>
						<p>
							Som psykoterapeut är min erfarenhet en ständig interaktion med
							människor från alla samhällsskikt, lyssna på deras berättelser och
							hjälpa dem att navigera genom deras emotionella och mentala
							utmaningar. Det är en tillfredsställande och ofta ödmjukande
							erfarenhet att bli anförtrodd de djupaste delarna av mina
							klienters liv och att arbeta med dem mot positiv förändring.
						</p>
						<p>
							Varje dag är annorlunda, och varje klient presenterar unika
							utmaningar som kräver att jag använder min utbildning och
							erfarenhet för att hitta rätt tillvägagångssätt. Vissa dagar
							innebär intensiva enskilda sessioner där jag behöver gräva djupt i
							en klients tidigare erfarenheter för att hjälpa dem att bearbeta
							trauma eller förstå deras nuvarande beteende. Andra dagar kan jag
							facilitera gruppterapisessioner där klienter kan stödja och lära
							av varandra.
						</p>
					</div>
					<div>
						<h4>HUR JAG ARBETAR I PSYKOTERAPIN</h4>
						<p>
							Som psykoterapeut är min metod klientcentrerad, empatisk och
							samarbetsvillig. Jag strävar efter att skapa en trygg och
							stödjande miljö där mina klienter kan utforska sina känslor och
							utmaningar inom mental hälsa. Genom att använda beprövade
							terapeutiska tekniker utvecklar jag individuella behandlingsplaner
							som tar hänsyn till mina klienters unika behov och mål. Jag följer
							upp deras framsteg, anpassar behandlingen vid behov och ger
							kontinuerligt stöd och uppmuntran. Mitt främsta mål är att hjälpa
							klienter att utveckla de färdigheter och strategier de behöver för
							att hantera symtom och uppnå en högre emotionell och mental
							välbefinnande.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CardSmall;
