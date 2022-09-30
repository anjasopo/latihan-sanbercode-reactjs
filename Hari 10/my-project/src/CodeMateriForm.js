import React, { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const CodeMateriForm = () => {
  let { IdData } = useParams();

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
    if (IdData !== undefined) {
      axios
        .get(`https://backendexample.sanbercloud.com/api/contestants/${IdData}`)
        .then((res) => {
          let data = res.data;

          setInput({
            name: data.name,
          });
        });
    }
  }, []);

  console.log(data);

  return (
    <>
      <hr />

      <p>FORM DATA</p>

      <form onSubmit={handleSumbit}>
        <span>Nama : </span>
        <input onChange={handleInput} value={input.name} name="name" />
        <input type={"submit"} />
      </form>
    </>
  );
};

export default CodeMateriForm;
