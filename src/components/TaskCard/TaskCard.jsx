import styles from "./taskcard.module.css";

import TaskCardControls from "../TaskCardControls/TaskCardControls";
import TaskDetails from "../TaskDetails/TaskDetails";
function TaskCard({ id, title, description, pinned, updateTasks }) {
  return (
    <div className={styles.cardparent}>
      <TaskCardControls updateTasks={updateTasks} pinned={pinned} id={id} />
      <TaskDetails title={title} description={description} />
    </div>
  );
}

export default TaskCard;
