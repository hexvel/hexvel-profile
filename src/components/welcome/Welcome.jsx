import { useState } from "react";
import styles from "./styles.module.css";

const Welcome = () => {
  const [copiedRules, setCopiedRules] = useState(false);
  const [copiedCommands, setCopiedCommands] = useState(false);

  const commands = [
    `[prefix] пинг - время, за которое отправленный в сеть запрос достигает адресата и возвращается обратно.
[prefix] +др/-др - добавляет/удаляет друга.
[prefix] +чс/-чс - добавляет/убирает из чёрного списка.
[prefix] id/ид - отображает идентификатор пользователя.
[prefix] инфо - отображает информацию о пользователе.
[prefix] +адм/-адм - выдаёт/отбирает админку в беседе.
[prefix] дд [кол-во] - удаляет [кол-во] сообщений в данном диалоге.`,
  ];

  const rules = [
    `[prefix] - префикс команд
[admin_prefix] - префикс администратора
[squad_prefix] - префикс сквада
[script_prefix] - префикс скриптов
[text] - текст на ваше усмотрение
[кол-во] - количество, вводить цифрами
[user] - реплай/ссылка/упоминание
[enter] - перенос строки Основные команды`,
  ];

  const copyToClipboardRules = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedRules(true);
    setTimeout(() => {
      setCopiedRules(false);
    }, 600);
  };

  const copyToClipboardCommands = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommands(true);
    setTimeout(() => {
      setCopiedCommands(false);
    }, 600);
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.container}>
        <div>
          <h1>Вы пришли посмотреть команды? Здорово!</h1>
          <h2>🎉 Вот некоторые доступные команды для вас</h2>
          <hr className={styles.line} />
        </div>
        <div>
          <h2>
            Функционал модуля HEXVEL LP 😊 <br />
          </h2>
          <div className={styles.commandsBlock}>
            <div className={styles.commands}>
              <div className={styles.block}>
                <p className={styles.green}>[ Что нужно знать ]</p>
                <ul>
                  <li>
                    <span className={styles.green}>[prefix]</span> - префикс
                    команд
                  </li>
                  <li>
                    <span className={styles.green}>[admin_prefix]</span> -
                    префикс администратора
                  </li>
                  <li>
                    <span className={styles.green}>[squad_prefix]</span> -
                    префикс сквада
                  </li>
                  <li>
                    <span className={styles.green}>[script_prefix]</span> -
                    префикс скриптов
                  </li>
                  <li>
                    <span className={styles.green}>[text]</span> - текст на ваше
                    усмотрение
                  </li>
                  <li>
                    <span className={styles.green}>[кол-во]</span> - количество,
                    вводить цифрами
                  </li>
                  <li>
                    <span className={styles.green}>[user]</span> -
                    реплай/ссылка/упоминание
                  </li>
                  <li>
                    <span className={styles.green}>[enter]</span> - перенос
                    строки Основные команды
                  </li>
                </ul>
                <p
                  className={styles.copy}
                  onClick={() =>
                    copyToClipboardRules(rules[0].replace(/ /g, "\u00A0"))
                  }
                >
                  {copiedRules ? "Скопировано!" : "Копировать"}
                </p>
              </div>
              <div className={styles.block}>
                <p className={styles.green}>[ доступные для всех ]</p>
                <ul>
                  <li>
                    <span className={styles.green}>[prefix]</span> пинг - время,
                    за которое отправленный в сеть запрос достигает адресата и
                    возвращается обратно.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> +др/-др -
                    добавляет/удаляет друга.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> +чс/-чс -
                    добавляет/убирает из чёрного списка.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> id/ид -
                    отображает идентификатор пользователя.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> инфо -
                    отображает информацию о пользователе.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> +адм/-адм -
                    выдаёт/отбирает админку в беседе.
                  </li>
                  <li>
                    <span className={styles.green}>[prefix]</span> дд{" "}
                    <span className={styles.green}>[кол-во]</span> - удаляет{" "}
                    <span className={styles.green}>[кол-во]</span> сообщений в
                    данном диалоге.
                  </li>
                </ul>
                <p
                  className={styles.copy}
                  onClick={() =>
                    copyToClipboardCommands(commands[0].replace(/ /g, "\u00A0"))
                  }
                >
                  {copiedCommands ? "Скопировано!" : "Копировать"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
