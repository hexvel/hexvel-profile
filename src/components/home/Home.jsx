import { motion } from "framer-motion";
import gif from "../../assets/anime.gif";
import styles from "./styles.module.css";

const gifAnimation = {
	hidden: {
		x: -100,
		display: "none",
	},
	visible: {
		x: 0,
		display: "block",
		transition: { delay: 0.3 },
	},
};

const textAnimation = {
	hidden: {
		x: 100,
		display: "none",
	},
	visible: {
		x: 0,
		display: "block",
		transition: { delay: 0.3 },
	},
};

const Home = () => {
	const contentFullScreen = () => {
		return (
			<>
				<motion.img
					variants={gifAnimation}
					className={styles.gif}
					src={gif}
				></motion.img>
				<motion.p variants={textAnimation} className={styles.homeText}>
					Модуль предоставляет множество функционала, который может быть
					использован для автоматизации действий и улучшения пользовательского
					опыта в ВК. Данный сайт был разработан в качестве документации, а
					также, для управления модулем.
				</motion.p>
			</>
		);
	};

	const contentMinScreen = () => {
		return (
			<>
				<motion.img className={styles.gif} src={gif}></motion.img>
				<motion.p className={styles.homeText}>
					Модуль предоставляет множество функционала, который может быть
					использован для автоматизации действий и улучшения пользовательского
					опыта в ВК. Данный сайт был разработан в качестве документации, а
					также, для управления модулем.
				</motion.p>
			</>
		);
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			className={styles.homeContainer}
		>
			{window.innerWidth > 1362 ? contentFullScreen() : contentMinScreen()}
		</motion.div>
	);
};

export default Home;
