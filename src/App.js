import { Header, Tasks } from "./components";
import { useState } from "react";
function App() {
  const [lightTheme, toggleLightTheme] = useState(true);
  const [pinnedTasks, updatePinnedTasks] = useState([]);
  return (
    <>
      <Header lightTheme={lightTheme} setTheme={toggleLightTheme} />
      <Tasks pinnedTasks={pinnedTasks} />
    </>
  );
}

export default App;
