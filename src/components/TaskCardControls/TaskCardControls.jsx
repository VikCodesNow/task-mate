import unpin from "../../assets/unpin.svg";
import delete_icon from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";

import styles from './taskcardcontrol.module.css'
const TaskCardControls = () => {
  return (
    <div className={styles.cardControls}>
      <span className={styles.control}>
        <img src={unpin} />
      </span>
      <span className={styles.control}>
        <img src={edit} />
      </span>
      <span className={styles.control}>
        <img src={delete_icon} />
      </span>
    </div>
  );
};

export default TaskCardControls;
