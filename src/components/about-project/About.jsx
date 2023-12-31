import styles from "./styles.module.css";

const About = () => {
  const contentFullScreen = () => {
    return (
      <>
        <div className={styles.textBlock}>
          <p>Изначально, проект был создан лишь для одной цели:</p>
          <ul>Практиковать свои знания языка Python.</ul>
        </div>
        <div className={styles.textBlock}>
          <p>
            Сейчас же, данный проект - это бот, разработанный для работы в ВК.
            Он предоставляет множество функциональных возможностей, которые
            могут быть использованы для автоматизации задач и усовершенствования
            пользовательского опыта. HEXVEL может отвечать на сообщения,
            автоматически добавлять друзей, управлять группами и многое другое.
            Он использует LongPoll API ВК для получения обновлений и
            реагирования на них. Если вас интересует создание ботов для работы в
            ВК, рекомендуем обратить внимание на проект HEXVEL{" "}
            <span>(в конце будут контакты для связи)</span>.
          </p>
        </div>
      </>
    );
  };

  const contentMinScreen = () => {
    return (
      <>
        <div className={styles.textBlock}>
          <p>Изначально, проект был создан лишь для одной цели:</p>
          <ul>Практиковать свои знания языка Python.</ul>
        </div>
        <div className={styles.textBlock}>
          <p>
            Сейчас же, данный проект - это бот, разработанный для работы в ВК.
            Он предоставляет множество функциональных возможностей, которые
            могут быть использованы для автоматизации задач и усовершенствования
            пользовательского опыта. HEXVEL может отвечать на сообщения,
            автоматически добавлять друзей, управлять группами и многое другое.
            Он использует LongPoll API ВК для получения обновлений и
            реагирования на них. Если вас интересует создание ботов для работы в
            ВК, рекомендуем обратить внимание на проект HEXVEL{" "}
            <span>(в конце будут контакты для связи)</span>.
          </p>
        </div>
      </>
    );
  };

  return (
    <div id="about-project" className={styles.aboutProjectContainer}>
      <h1>О проекте</h1>
      {window.innerWidth > 1362 ? contentFullScreen() : contentMinScreen()}
    </div>
  );
};

export default About;
