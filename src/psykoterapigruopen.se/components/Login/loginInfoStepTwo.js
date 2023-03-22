import loginInfoStepTwoCss from "./loginInfoStepTwo.module.css";
import uploadFileIcon from "../../assets/upload-file-icon.svg";

const logininfoStepTwo = () => {
	return (
		<div className={loginInfoStepTwoCss.container}>
			<h2 className={loginInfoStepTwoCss.title}>Ladda upp profilbild här</h2>
			<div className={loginInfoStepTwoCss.fileInputBox}>
				<img src={uploadFileIcon} />
				<label for="files">
					Drag din bild hit eller <span>Sök i datorn</span>
				</label>
				<p>Bilden skall vara i porträtt format med neutral bakgrund.</p>
			</div>
			<button className={loginInfoStepTwoCss.BtnUpload}>
				LADDA UPP BILDEN
			</button>
		</div>
	);
};

export default logininfoStepTwo;
