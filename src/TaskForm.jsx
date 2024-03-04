import { useState,useContext } from "react";
import { TaskContex } from "./TaskContex";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createTask=useContext(TaskContex).createTask
  return (
    <div className="max-w-md mx-auto">
      <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(title,description)
        createTask(title,description)
        setDescription('')
        setTitle('')
      }} className="bg-slate-800 p-10 mb-4"
    >
      <h1 className="text-2xl font-bold text-white mb-3">Crea una Tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe Tu Tarea"
        onChange={(e) => setTitle(e.target.value)
    } value={title} autoFocus
      />
      <textarea placeholder="Descripcion de tarea" onChange={(e)=>
        setDescription(e.target.value)
        } value={description} className="bg-slate-300 p-3 w-full mb-2"></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}
