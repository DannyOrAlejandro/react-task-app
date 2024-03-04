import { useContext } from "react";
import { TaskContex } from "./TaskContex";
export function App() {
  /*const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data); uso el use effect apra que a la hora de que se cree el componente pueda coger los datos del array, paso esto al main apra que todo la app tenga acceso al array
  }, []);*/
  const {deleteTask,task} =useContext(TaskContex)
  if (task.length === 0) {
    return <h1 className="text-white text-2xl font-bold text-center">No hay tareas</h1>;
  }
  return (
    <div key={task.id} className="grid grid-cols-4 gap-2 p-4">
      {task.map((tasks) => (
       <div key={tasks.id} className="bg-gray-800 text-white p-4 rounded-md">
       <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
       <h3 className="text-sm text-gray-500">{tasks.description}</h3>
       <button className="bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md mt-4" onClick={()=>deleteTask(tasks.id)}>Eliminar Tarea</button>
     </div>
      ))}
    </div>
  );
}
