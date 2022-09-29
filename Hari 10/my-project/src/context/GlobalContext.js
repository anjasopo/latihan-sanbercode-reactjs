import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);

  //CRUD DATA
  const [input, setInput] = useState({
    name: "",
    // hobby: "",
  });

  const [fecthStatus, setFecthStatus] = useState(true);

  //indikator
  const [currentId, setCurrentId] = useState(-1);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    }
    // else if (name === "hobby") {
    //   setInput({ ...input, hobby: value });
    // }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    let { name } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/contestants", {
          name,
        })
        .then((res) => {
          console.log(res);
          setFecthStatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/contestants/${currentId}`,
          { name }
        )
        .then((res) => {
          setFecthStatus(true);
        });
    }

    setCurrentId(-1);

    setInput({
      name: "",
    });
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/contestants/${idData}`
      )
      .then((res) => {
        setFecthStatus(true);
      });
  };

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);

    axios
      .get(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
      .then((res) => {
        let data = res.data;

        setInput({
          name: data.name,
        });
      });
  };

  let fetchData = () => {
    axios
      .get("http://backendexample.sanbercloud.com/api/contestants")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});

    setFecthStatus(false);
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fecthStatus,
    setFecthStatus,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleInput,
    handleSumbit,
    handleDelete,
    handleEdit,
    fetchData,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
