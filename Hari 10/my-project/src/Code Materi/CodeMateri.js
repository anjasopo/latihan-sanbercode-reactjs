import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

const CodeMateri = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    input,
    setInput,
    fecthStatus,
    setFecthStatus,
    currentId,
    setCurrentId,
  } = state;

  const { handleInput, handleSumbit, handleDelete, handleEdit, fetchData } =
    handleFunction;

  useEffect(() => {
    if (fecthStatus === true) {
      fetchData();
    }
  }, [fecthStatus, setFecthStatus]);

  console.log(data);

  return (
    <>
      <hr />
      <div>
        <ul>
          {data !== null &&
            data.map((res, index) => {
              return (
                <>
                  <li key={index}>
                    {res.name} | &nbsp;
                    <button onClick={handleEdit} value={res.id}>
                      Edit
                    </button>
                    <button onClick={handleDelete} value={res.id}>
                      Delete
                    </button>
                  </li>
                </>
              );
            })}
        </ul>
      </div>

      <p>FORM DATA</p>

      <form onSubmit={handleSumbit}>
        <span>Nama :</span>
        <input onChange={handleInput} value={input.name} name="name" />
        <input type={"submit"} />
      </form>
    </>
  );
};

export default CodeMateri;
