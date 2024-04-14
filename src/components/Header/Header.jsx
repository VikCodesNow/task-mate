import logo from "../../assets/logo.png";
import light_mode from "../../assets/light_mode.svg";
import dark_mode from "../../assets/dark_mode.svg";
import new_task from "../../assets/add.svg";
import styles from "./header.module.css";
const Header = ({lightTheme,setTheme}) => {

  return (
    <div className={styles.parent}>
      <div className={styles.org}>
        <img src={logo} alt="Image Not Found" className={styles.brandImage} />
        <p className={styles.brandName}> Task Manager</p>
      </div>
      <div className={styles.operations}>
        <span
          onClick={() => setTheme(!lightTheme)}
          className={styles.action}
        >
          <img src={lightTheme ? light_mode : dark_mode} alt="theme" />
        </span>
        <span className={styles.action}>
          <img src={new_task} alt="settings" />
        </span>
      </div>
    </div>
  );
};

export default Header;
