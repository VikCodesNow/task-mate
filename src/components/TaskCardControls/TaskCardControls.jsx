import unpin from "../../assets/unpin.svg";
import pin from "../../assets/pin.svg"
import delete_icon from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import styles from "./taskcardcontrol.module.css";
const TaskCardControls = ({ id, pinned, updateTasks }) => {
  const handleUnpin = (id) => {
    console.log("Unpinning for ", id);
    updateTasks(id, "UNPIN");
  };

  const handlePin = (id) => {
    console.log("Pinning for ", id);
    updateTasks(id, "PIN");
  };

  const handleEdit = (id) => {
    updateTasks(id, "EDIT");
  };

  const handleDelete = (id) => {
    updateTasks(id, "DELETE");
  };
  return (
    <div className={styles.cardControls}>
      {pinned ? (
        <span className={styles.control} onClick={() => handleUnpin(id)}>
          <img src={unpin} />
        </span>
      ) : (
        <span className={styles.control} onClick={() => handlePin(id)}>
          <img src={pin} />
        </span>
      )}

      <span className={styles.control} onClick={() => handleEdit(id)}>
        <img src={edit} />
      </span>
      <span className={styles.control} onClick={() => handleDelete(id)}>
        <img src={delete_icon} />
      </span>
    </div>
  );
};

export default TaskCardControls;
