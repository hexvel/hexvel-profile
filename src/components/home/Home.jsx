import gif from "../../assets/anime.gif";
import styles from "./styles.module.css";

const Home = () => {
  const contentFullScreen = () => {
    return (
      <>
        <img className={styles.gif} src={gif}></img>
        <p className={styles.homeText}>
          Модуль предоставляет множество функционала, который может быть
          использован для автоматизации действий и улучшения пользовательского
          опыта в ВК. Данный сайт был разработан в качестве документации, а
          также, для управления модулем.
        </p>
      </>
    );
  };

  const contentMinScreen = () => {
    return (
      <>
        <img className={styles.gif} src={gif}></img>
        <p className={styles.homeText}>
          Модуль предоставляет множество функционала, который может быть
          использован для автоматизации действий и улучшения пользовательского
          опыта в ВК. Данный сайт был разработан в качестве документации, а
          также, для управления модулем.
        </p>
      </>
    );
  };

  return (
    <div className={styles.homeContainer}>
      {window.innerWidth > 1362 ? contentFullScreen() : contentMinScreen()}
    </div>
  );
};

export default Home;
