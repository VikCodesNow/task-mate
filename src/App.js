import { Header, Tasks } from "./components";
import React, { useState } from "react";

export const TaskContext = React.createContext();

function App() {
  let dummyTasks = [
    {
      id: 1,
      title: "Modify the code to use proper structure",
      description:
        "Currrrrrrrrrrrrent using dummy data use arrrrrrrray to seeeeeee the posibility of csssss break",
      pinned: true,
      completed: false,
    },
    {
      id: 2,
      title: "Modify the code to enable unpin",
      description: "Repmove from pinned task on click of note",
      pinned: true,
      completed: false,
    },
    {
      id: 3,
      title: "Modify the code to enable unpin",
      description: "Use Local Storage for taskssssss",
      pinned: false,
      completed: false,
    },
  ];
  const [lightTheme, toggleLightTheme] = useState(true);
  let [tasks, updateTasks] = useState(dummyTasks);

  const updateState = (id, action) => {
    switch (action) {
      case "UNPIN":
        let unpinnedTask = tasks.find((t) => t.id === id);
        unpinnedTask.pinned = false;
        break;
      case "PIN":
        let pinnedTask = tasks.find((t) => t.id === id);
        pinnedTask.pinned = true;
        break;
      case "EDIT":
        break;
      case "DELETE":
        break;
    }
    updateTasks([...tasks]);
  };

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <Header lightTheme={lightTheme} setTheme={toggleLightTheme} />
        <Tasks updateTasks={updateState} />
      </TaskContext.Provider>
    </>
  );
}

export default App;
