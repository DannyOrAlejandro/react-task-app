import { createContext, useState,useEffect } from "react"; //para que todo los componentes tengan acceso a los datos de el contexto osea las raiz sin necesidad de hacer dorping se para por props las fucionaidades caomponente a componente
import { task as data } from "./task";
export const TaskContex = createContext();
export function TaskContexProvider(props) {
  //luego el archivo main encierro tds tds los demas componentes con este contex, para pasar datos tengo que usar la propiedad value y usa useContex donde valla a usar ese valor usando elnomre de la valrable que tiene la funcion creatContex
  const [task, setTask] = useState([]);
  function createTask(tasks, description) {
    setTask([
      ...task,
      {
        id: task.length,
        title: tasks,
        description: description,
      },
    ]); //aqui le digo que copue el arreglo existente y le agrgue cosas devolviendo un arreglo nuevo
  }
  function deleteTask(taskID) {
    setTask(task.filter((tasks) => tasks.id !== taskID)); //recorre el arra si la propiedad id coincide con el id que le pase lo eleminia arroja false si coincide
  }
  useEffect(() => {
    setTask(data);
  }, []);
  return (
    <TaskContex.Provider value={{ task, deleteTask, createTask }}>
      {props.children}
    </TaskContex.Provider>
  );
}
