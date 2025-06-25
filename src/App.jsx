import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const App = () => {;
  const[data,setData]= useState(JSON.parse(localStorage.getItem("notes"))||[])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(data));
  },[data])

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { title: title, description: description, priority: priority },
    ]);

    setTitle("");
    setDescription("");
    setPriority("");
  };

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handlePriority(e) {
    setPriority(e.target.value);
  }

  function handleRemove(i) {
    
    let value = window.confirm("Are you sure you want to delete this note?");
    if(value){
      let newData = data.filter((_, index) => i !== index)
       setData(newData); 
       localStorage.setItem("notes", JSON.stringify(newData));
    }
    else{
        return
    }
  }

  return (
    <div className="p-8 flex flex-col gap-8 w-screen">
      <h1 className="text-3xl">Sticky Notes</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitle}
          className="w-[400px] h-fit p-2 text-lg border-2 border-blue-400 rounded-md"
        />
        <textarea
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={handleDescription}
          className="w-[400px] h-fit p-2 text-lg border-2 border-blue-400 rounded-md"
        />
        <select
          value={priority}
          onChange={handlePriority}
          className="w-[180px] h-fit p-2 text-lg border-2 border-blue-400 rounded-md"
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Normal">Normal</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 px-6 py-4 text-white w-fit h-fit text-xl font-semibold cursor-pointer rounded-lg"
        >
          Add
        </button>
      </form>

      <div className="grid grid-cols-4 gap-6">
        {data.map((item, index) => {
          return (
            <NoteCard
              key={index}
              title={item.title}
              description={item.description}
              priority={item.priority}
              remove={()=>{handleRemove(index)}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
