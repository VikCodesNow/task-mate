import styles from "./taskcard.module.css";

import TaskCardControls from "../TaskCardControls/TaskCardControls";
import TaskDetails from "../TaskDetails/TaskDetails";
function TaskCard({ title, description }) {
  return (
    <div className={styles.cardparent}>
      <TaskCardControls />
      <TaskDetails title={title} description={description} />
    </div>
  );
}

export default TaskCard;
