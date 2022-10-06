import React from "react";
import CodeMateri from "./Code Materi/CodeMateri";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./components/navbar";
import CodeMateriForm from "./CodeMateriForm";
import Login from "./Login";
import Layout from "./components/Layout";
import Cookies from "js-cookie";

const App = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Layout>
                    <Login />
                  </Layout>
                </LoginRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
