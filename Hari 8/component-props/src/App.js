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

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;