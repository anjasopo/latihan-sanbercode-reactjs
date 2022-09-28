import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  //CRUD DATA
  const [input, setInput] = useState({
    name: "",
    // hobby: "",
  });

  const [fecthStatus, setFecthStatus] = useState(true);

  //indikator
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    if (fecthStatus === true) {
      axios
        .get("http://backendexample.sanbercloud.com/api/contestants")
        .then((res) => {
          setData([...res.data]);
        })
        .catch((error) => {});

      setFecthStatus(false);
    }
  }, [fecthStatus, setFecthStatus]);

  console.log(data);

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

  return (
    <>
      <div>
        <ul>
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <li>
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

export default App;
