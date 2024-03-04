import React from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./Tasks";
import { TaskContexProvider } from "./TaskContex";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContexProvider>
      <main className="bg-zinc-900 h-screen">
        <Tasks />
      </main>
    </TaskContexProvider>
  </React.StrictMode>
);
