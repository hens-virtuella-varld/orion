import React from "react";
import Footer from "../../psykoterapigruopen.se/components/Footer/Footer";
import Navbar from "../../psykoterapigruopen.se/components/NavBar/NavBar";
import "./profile.css";
const Profile = () => {
	return (
		<>
			<Navbar />
			<div className="profile">
				<div className="sidebar">
					<img
						width={"100%"}
						height={400}
						style={{ objectFit: "cover" }}
						src="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
						alt="ice-cream"
					/>
					<h2>Leila</h2>
					<p className="gray-color">Leg, psykoterapeut</p>
					<div className="first-icon">
						<img src="./assets/location.svg" alt="location" />
						<span>Stockholm</span>
					</div>
					<div className="second-icon">
						<img src="./assets/videoicon.svg" alt="video" />
						<span>Tillgänglig för videosamtal</span>
					</div>
					<p>
						<b>Pris: </b>1500 kr/h
					</p>
					<button>Kontakta mig</button>
				</div>
				<div className="profile-content">
					<div>
						<h3>SAMMANFATTNING AV DIG SOM EN PSYKOTERAPEUT</h3>
						<p>
							Har du kämpat med känslor av ångest, depression eller andra
							utmaningar inom mental hälsa? Som licensierad psykoterapeut är jag
							här för att hjälpa dig att övervinna dessa hinder och uppnå högre
							emotionellt och mental välbefinnande. Min metod är empatisk,
							klientcentrerad och beprövad, där jag använder en rad terapeutiska
							tekniker som är skräddarsydda för dina unika behov och mål. Med
							mitt stöd kan du utveckla de färdigheter och strategier du behöver
							för att hantera symtom och leda ett mer uppfyllande liv. Låt inte
							utmaningar inom mental hälsa hålla dig tillbaka - kontakta mig
							idag för att boka en konsultation och ta det första steget mot en
							ljusare framtid.
						</p>
					</div>
					<div className="icons-container">
						<div className="icons-first">
							<button>Deppression</button>
							<button>ADHD</button>
							<button>KBT</button>
							<button>Ångest</button>
							<button>Parterapi</button>
							<button>Dyselexi</button>
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

export default Profile;
