import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const Auth = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [resultText, setResultText] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [captchaImg, setCaptchaImg] = useState("");
	const [captchaSid, setCaptchaSid] = useState("");
	const [btnCaptcha, setBtnCaptcha] = useState(false);
	const [isCaptcha, setIsCaptcha] = useState(false);

	const params = {
		login: login,
		password: password,
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (isCaptcha) {
			params["captcha_key"] = captcha;
			params["captcha_sid"] = captchaSid;
		}

		await axios
			.get("http://localhost:5000/api/login", {
				params: params,
			})
			.then(async (res) => {
				const data = res.data;
				if ("error" in data || "detail" in data) {
					if ("error_description" in data) {
						setResultText(`⛔ ${data.error_description}`);
					} else if ("detail" in data) {
						setResultText(`⛔ Неверные данные`);
					}
				} else if ("captcha_sid" in data) {
					setCaptchaImg(data.captcha_img);
					setCaptchaSid(data.captcha_sid);
					setBtnCaptcha(true);
					setIsCaptcha(true);
				} else {
					setResultText(`💹 ${data.message}`);
				}
			});
	};

	const handleInputData = () => {
		return (
			<div className={styles.inputs}>
				<input
					type="text"
					required
					placeholder="Введите логин"
					onChange={(e) => setLogin(e.target.value)}
					value={login}
				/>
				<input
					type="password"
					required
					placeholder="Введите пароль"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>
		);
	};

	const handleCaptcha = () => {
		return (
			<div className={styles.captchaBox}>
				<img src={captchaImg} />
				<input
					type="text"
					required
					placeholder="Введите капчу"
					onChange={(e) => setCaptcha(e.target.value)}
					value={captcha}
				/>
			</div>
		);
	};

	return (
		<div className={styles.authContainer}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<img src={logo} alt="logo" />
				<h1>Авторизация</h1>
				{isCaptcha ? handleCaptcha() : handleInputData()}
				<p className={styles.resultText}>{resultText}</p>
				<button type="submit" className={styles.btnAuth}>
					{btnCaptcha ? "Отправить" : "Войти"}
				</button>
			</form>
		</div>
	);
};

export default Auth;
