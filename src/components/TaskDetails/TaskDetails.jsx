import styles from "./taskdetails.module.css";

function TaskDetails({ title, description }) {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </>
  );
}

export default TaskDetails;
