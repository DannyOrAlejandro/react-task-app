import { TaskForm } from "./TaskForm.jsx";
import { App } from "./App.jsx";
function Tasks() {

  return (//con el prop le paso el array al TaskList
    <div className="container-auto p-10">
      <TaskForm/>
      <App/>     
    </div>
  );
}
export default Tasks;
