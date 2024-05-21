import styles from "./settings.module.css";
import { useRef, useContext } from "react";
import { TaskContext } from "../../App";
function Settings({ updateConfig }) {
  const emailReminderRef = useRef();
  const emailIdRef = useRef();

  const high_duration_ref = useRef();
  const high_duration_type = useRef();

  const medium_duration_ref = useRef();
  const medium_duration_type = useRef();

  const low_duration_ref = useRef();
  const low_duration_type = useRef();

  const saveConfig = () => {
    const newConfig = {
      email_alerts: emailReminderRef.current.checked,
      user_email_id: emailIdRef.current.value,
      send_email_for_high_after: high_duration_ref.current.value,
      high_duration_in: high_duration_type.current.value,
      send_email_for_medium_after: medium_duration_ref.current.value,
      medium_duration_in: medium_duration_type.current.value,
      send_email_for_low_after: low_duration_ref.current.value,
      low_duration_in: low_duration_type.current.value,
    };
    updateConfig(newConfig);
  };
  const data = useContext(TaskContext);
  const currentConfigs = data.configs;
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          alignContent: "baseline",
        }}
      >
        Would you like to subscribe to email reminders for tasks ?{" "}
        <input
          type="checkbox"
          style={{ marginLeft: "1rem" }}
          ref={emailReminderRef}
          defaultChecked={currentConfigs.email_alerts}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label>Email Id :</label>
        <input type="email" style={{ marginLeft: "1rem" }} ref={emailIdRef} />
        <p>
          Email for <b>High</b> priority tasks to be sent after{" "}
          <input type="number" min="1" ref={high_duration_ref} />{" "}
          <select defaultValue="days" ref={high_duration_type}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </p>
        <p>
          Email for <b>Medium</b> priority tasks to be sent after{" "}
          <input type="number" min="1" ref={medium_duration_ref} />{" "}
          <select defaultValue="months" ref={medium_duration_type}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </p>
        <p>
          Email for <b>Low</b> priority tasks to be sent after{" "}
          <input type="number" min="1" ref={low_duration_ref} />{" "}
          <select defaultValue="weeks" ref={low_duration_type}>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </p>
      </div>
      <button onClick={saveConfig}>Save</button>
    </div>
  );
}

export default Settings;
