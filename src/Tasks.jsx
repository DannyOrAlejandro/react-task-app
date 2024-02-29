import { TaskForm } from "./TaskForm.jsx";
import { task as data } from "./task";
import { App } from "./App.jsx";
import { useState, useEffect } from "react";
function Tasks() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);
  function createTask(tasks,description){
    setTask([...task,{
      id:task.length,
      title:tasks,
      description:description

    }]) //aqui le digo que copue el arreglo existente y le agrgue cosas devolviendo un arreglo nuevo
  }
  function deleteTask(taskID){
    setTask(task.filter(tasks =>tasks.id!==taskID))//recorre el arra si la propiedad id coincide con el id que le pase lo eleminia arroja false si coincide
  }
  return (//con el prop le paso el array al TaskList
    <>
      <TaskForm createTask={createTask} />
      <App task={task} deleteTask={deleteTask}/>
    </>
  );
}
export default Tasks;
