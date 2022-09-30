import React from "react";
import CodeMateri from "./Code Materi/CodeMateri";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./components/navbar";
import CodeMateriForm from "./CodeMateriForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/code-materi" element={<CodeMateri />} />
            <Route path="/create" element={<CodeMateriForm />} />
            <Route path="/edit/:IdData" element={<CodeMateriForm />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
