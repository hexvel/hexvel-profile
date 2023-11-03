import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import profilePhoto from "./assets/Dima.jpg";

const cardAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const Team = () => {
  const contentFullScreen = () => {
    return (
      <motion.div variants={cardAnimation} className={styles.teamBlock}>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="Loading..." />
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
      </motion.div>
    );
  };

  const contentMinScreen = () => {
    return (
      <motion.div className={styles.teamBlock}>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="Loading..." />
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
      </motion.div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1 }}
      className={styles.teamContainer}
      id="team"
    >
      {window.innerWidth > 1362 ? contentFullScreen(1) : contentMinScreen(1)}
    </motion.div>
  );
};

export default Team;
