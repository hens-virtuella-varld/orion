import { useState } from "react";
import SignUpImg from "../../assets/sign-up-orion.png";
import LoginCss from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [selectedButton, setSelectedButton] = useState(true);

	const handleClickRegister = () => {
		setSelectedButton(true);
	};
	const handleClickLogin = () => {
		setSelectedButton(false);
	};

	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/signupform");
	};

	return (
		<div className={LoginCss.container}>
			<div className={LoginCss.leftColumn}>
				<h2>Välkommen</h2>
				<p>Registrera dina uppgifter här</p>
				<div>
					<div className={LoginCss.leftColumnToggle}>
						<div
							onClick={handleClickRegister}
							className={`${LoginCss.btn} ${
								selectedButton && LoginCss.btnSelected
							}
							}`}
						>
							Registrera dig
						</div>
						<div
							onClick={handleClickLogin}
							className={`${LoginCss.btn} ${
								!selectedButton && LoginCss.btnSelected
							}
							}`}
						>
							Logga in
						</div>
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
							className={LoginCss.loginInput}
						/>
					</div>
					<div className={LoginCss.inputContainer}>
						<label htmlFor="">Lösenord</label>
						<input
							className={LoginCss.loginInput}
							type="password"
							name=""
							id=""
						/>
					</div>
					<div className={LoginCss.leftColumnRow}>
						<div className={LoginCss.checkbox}>
							<input type="checkbox" />
							<div className={LoginCss.rememberMe}>Kom ihåg mina uppgifter</div>
						</div>
						<div className={LoginCss.forgetPassword}>Glömt lösenord</div>
					</div>
					<div className={LoginCss.LoginBtnContainer}>
						<button className={LoginCss.loginBtn} onClick={handleClick}>
							Skapa konto
						</button>
						<button
							className={`${LoginCss.loginBtn} ${LoginCss.loginBtnGoogle}`}
						>
							Logga in med Google
						</button>
					</div>
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
