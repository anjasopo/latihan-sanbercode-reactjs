import React from "react";
import CodeMateri from "./Code Materi/CodeMateri";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <CodeMateri />
      </GlobalProvider>
    </>
  );
};

export default App;
