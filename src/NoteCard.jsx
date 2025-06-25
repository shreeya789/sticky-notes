import React from 'react'

const NoteCard = ({title,description,priority, remove}) => {
  return (
    <div className={`${priority=="High"?"bg-red-400": priority=="Medium"?"bg-yellow-400":"bg-green-400"} w-[250px] h-fit p-4 custom-border relative`}>
        <h1 className='text-2xl text-white capitalize my-2'>{title}</h1>
        <p className='text-lg text-white text-wrap '>- {description}</p>
        <button onClick={remove} className='text-white font-bold absolute top-2 right-2 text-xl cursor-pointer'>X</button>
    </div>
  )
}

export default NoteCard