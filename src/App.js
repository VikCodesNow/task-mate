import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Tasks, Settings } from "./components";
import React, { useState } from "react";

export const TaskContext = React.createContext();

function App() {
  let appdata = {
    configs: {
      email_alerts:true,
      user_email_id:"dummy",
      send_email_for_high_after:1,
      high_duration_in:'days',
      send_email_for_medium_after:1,
      high_duration_in:'weeks',
      send_email_for_low_after:1,
      high_duration_in:'months'
    },
    tasks: [
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
    ],
  };
  const [lightTheme, toggleLightTheme] = useState(true);
  let [data, updateData] = useState(appdata);

  const updateState = (id, action) => {
    let updatedTasks = data.tasks;
    switch (action) {
      case "UNPIN":
        let unpinnedTask = updatedTasks.find((t) => t.id === id);
        unpinnedTask.pinned = false;
        break;
      case "PIN":
        let pinnedTask = updatedTasks.find((t) => t.id === id);
        pinnedTask.pinned = true;
        break;
      case "EDIT":
        break;
      case "DELETE":
        break;
    }
    updateData({
      configs: data.configs,
      tasks: updatedTasks,
    });
  };

  const updateConfig = (updatedConfig) => {
    updateData({
      configs:updateConfig,
      tasks:data.tasks
    })
  }

  return (
    <>
      <BrowserRouter>
        <Header lightTheme={lightTheme} setTheme={toggleLightTheme} />
        <TaskContext.Provider value={data}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Tasks updateTasks={updateState} />}
            />
            <Route exact path="settings" element={<Settings updateConfig={updateConfig} />} />
          </Routes>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
