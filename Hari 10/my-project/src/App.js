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
    axios
      .post("https://backendexample.sanbercloud.com/api/contestants", { name })
      .then((res) => {
        console.log(res);
        setFecthStatus(true);
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
                  <li> {res.name} </li>
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
