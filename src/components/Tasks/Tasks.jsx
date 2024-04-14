import PinnedTasks from "../PinnedTasks/PinnedTasks";
import styles from "./tasks.module.css";
function Tasks({ pinnedTasks }) {
  return (
    <div className={styles.tasksParent}>
      <PinnedTasks pinnedTasks={pinnedTasks} />
      <p>hello</p>
    </div>
  );
}

export default Tasks;
