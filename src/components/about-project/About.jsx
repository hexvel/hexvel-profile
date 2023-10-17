import { motion } from "framer-motion";
import styles from "./styles.module.css";

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const About = () => {
	return (
		<motion.div
			id="about-project"
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 1 }}
			className={styles.aboutProjectContainer}
		>
			<h1>О проекте</h1>
			<motion.div
				custom={0.2}
				variants={textAnimation}
				className={styles.textBlock}
			>
				<p>Изначально, проект был создан лишь для одной цели:</p>
				<ul>Практиковать свои знания языка Python.</ul>
			</motion.div>
			<motion.div
				custom={0.7}
				variants={textAnimation}
				className={styles.textBlock}
			>
				<p>
					Сейчас же, данный проект - это бот, разработанный для работы в ВК. Он
					предоставляет множество функциональных возможностей, которые могут
					быть использованы для автоматизации задач и усовершенствования
					пользовательского опыта. HEXVEL может отвечать на сообщения,
					автоматически добавлять друзей, управлять группами и многое другое. Он
					использует LongPoll API ВК для получения обновлений и реагирования на
					них. Если вас интересует создание ботов для работы в ВК, рекомендуем
					обратить внимание на проект HEXVEL{" "}
					<span>(в конце будут контакты для связи)</span>.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default About;
