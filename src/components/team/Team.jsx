import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import dima from "./assets/Dima.jpg";
import yura from "./assets/Yura.jpg";

const Team = () => {
	return (
		<div className={styles.teamContainer} id="team">
			<div className={styles.teamBlock}>
				<div className={styles.photo}>
					<img src={dima} alt="Loading..." />
					<h2>Дилмурод Абдукаримов</h2>
				</div>
				<p className={styles.text}>
					Низкоуровневый язык — это когда требуется внимание к вещам, которые
					никак не связаны с программами на этом языке.
				</p>
				<Link to={"https://vk.com/official_hexvel"} target="_blank">
					<button type="submit" className={styles.btnGoToProfile}>
						Перейти
					</button>
				</Link>
			</div>
			<div className={styles.teamBlock}>
				<div className={styles.photo}>
					<img src={yura} alt="Loading..." />
					<h2>Юрий Романов</h2>
				</div>
				<p className={styles.text}>
					Хорошо, Java, ВОЗМОЖНО, хороший пример того как должен выглядеть язык.
					Но тогда программы на Java — это хороший пример как НЕЛЬЗЯ писать
					программы.
				</p>
				<Link to={"https://vk.com/xxxevexxx"} target="_blank">
					<button type="submit" className={styles.btnGoToProfile}>
						Перейти
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Team;
