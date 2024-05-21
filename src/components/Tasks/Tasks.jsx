import PinnedTasks from "../PinnedTasks/PinnedTasks";
import UnpinnedTasks from "../UnpinnedTasks/UnpinnedTasks";
import styles from "./tasks.module.css";
import { TaskContext } from "../../App";
import { useContext } from "react";
function Tasks({ updateTasks }) {
  const data = useContext(TaskContext);
  const pinnedTasks = data.tasks.filter((t) => t.pinned === true);
  const unpinnedtasks = data.tasks.filter((t) => t.pinned === false);
  return (
    <div className={styles.tasksParent}>
      <PinnedTasks pinnedTasks={pinnedTasks} updateTasks={updateTasks} />
      <UnpinnedTasks unpinnedtasks={unpinnedtasks} updateTasks={updateTasks} />
    </div>
  );
}

export default Tasks;
