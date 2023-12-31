import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src={logo} height={60} alt="Говно грузится..." />
          <p>HEXVEL</p>
        </div>
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="/#" className={styles.links}>
              Главная
            </a>
          </li>
          <li>
            <a href="/#about-project" className={styles.links}>
              О проекте
            </a>
          </li>
          <li>
            <a href="/#team" className={styles.links}>
              Команда
            </a>
          </li>
        </ul>
      </nav>
      {localStorage.getItem("is_authorized") ? (
        <Link to={"/welcome"} className={styles.commandsBtn}>
          Команды
        </Link>
      ) : (
        <Link to={"/auth"} className={styles.authBtn}>
          Подключить
        </Link>
      )}
    </header>
  );
};

export default Header;
