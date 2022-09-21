import React from "react";
import Welcome from "./WelcomeComponents";
import Button from "./components/button";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Halo</h1>
        <Welcome name="Anjas"/>
        <Welcome name="Anjas lagi"/>
        <Button />
      </div>
    </React.Fragment>
  );
}

export default App;