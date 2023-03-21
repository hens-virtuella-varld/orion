import SignUpImg from "../../assets/sign-up-orion.png";
import LoginCss from "./Login.module.css";

const Login = () => {
	return (
		<div className={LoginCss.container}>
			<div className={LoginCss.leftColumn}>
				<h2>Välkommen</h2>
				<p>Registrera dina uppgifter här</p>
				<div>
					<div className={LoginCss.leftColumnToggle}>
						<div className={LoginCss.btn}>Registrera dig</div>
						<div className={LoginCss.btn}>Logga in</div>
					</div>
				</div>
				<form action="">
					<div className={LoginCss.inputContainer}>
						<label htmlFor="">E-post</label>
						<input
							type="text"
							name=""
							id=""
							placeholder="Ange din e-postadress"
						/>
					</div>
					<div className={LoginCss.inputContainer}>
						<label htmlFor="">Lösenord</label>
						<input type="password" name="" id="" />
					</div>
					<div className={LoginCss.leftColumnRow}>
						<div className={LoginCss.checkbox}>
							<input type="checkbox" />
							<div>Kom ihåg mina uppgifter</div>
						</div>
						<div>Glömt lösenord</div>
					</div>
					<button>Logga in</button>
					<button>
						<img src="" alt="" />
						Logga in med Google
					</button>
				</form>
			</div>
			<div className={LoginCss.rightColumn}>
				<img src={SignUpImg} alt="" />
				<div>
					Vi söker ständigt efter nya terapeuter som vill ansluta sig till vårt
					nätverk. Målet är att erbjuda en bredd av expertisområden och
					behandlingsformer för att möta olika kunders behov.
				</div>
			</div>
		</div>
	);
};

export default Login;
