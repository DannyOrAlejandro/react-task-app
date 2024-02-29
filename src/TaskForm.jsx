import { useState } from "react";
export function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(title,description)
        createTask(title,description)
        setDescription('')
        setTitle('')
      }}
    >
      <input
        placeholder="Escribe Tu Tarea"
        onChange={(e) => setTitle(e.target.value)
    } value={title} autoFocus
      />
      <textarea cols="30" rows="10" placeholder="Descripcion de tarea" onChange={(e)=>
        setDescription(e.target.value)
        } value={description}></textarea>
      <button>Guardar</button>
    </form>
  );
}
