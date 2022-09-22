import React from "react"
import { useState } from "react";

const App = () => {

  const [name, setName] = useState( "Anjas" )
  const [gender, setGender] = useState("Laki-laki")

  const handleChangeName = () => {
    setGender(gender === "Laki-laki" ? "Perempuan" : "Laki-laki")
  }

  return (
    <div className="card">

      { gender === "Laki-laki" ? <span>Pak</span> : <span>Buk</span> }

      <span> { name } </span>


      <button onClick={handleChangeName}> ganti nama </button>
    </div>
  )
}

export default App;
