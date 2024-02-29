export function App({task,deleteTask}) {
  /*const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data); uso el use effect apra que a la hora de que se cree el componente pueda coger los datos del array, paso esto al main apra que todo la app tenga acceso al array
  }, []);*/
  if (task.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div key={task.id}>
      {task.map((tasks) => (
       <div key={tasks.id}>
       <h1>{tasks.title}</h1>
       <h3>{tasks.description}</h3>
       <button onClick={()=>deleteTask(tasks.id)}>Eliminar Tarea</button>
     </div>
      ))}
    </div>
  );
}
