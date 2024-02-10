// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";
import State from "./components/State";

function App() {
  // const [count, setCount] = useState(0);
  const navText = "Rambutan";
  const clicked = () => {
    return alert("Button ini di klik yahh");
  };

  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbarValue = () => {
    setNavbarValue("sasuke");
  };

  const paragraf = () => {
    return (
      <div>
        <i>Boleehhhh</i>
        <marquee>Mantap bwanggg</marquee>
        <b>
          <h4>Gw jagoo cokkkkk</h4>
        </b>
      </div>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Latihan aje nihhh yeee</h1>
      <div className="card">
        <Header paragraf={paragraf()}></Header>
        <Navbar test={navText}></Navbar>
        <MyButton clicked={clicked}></MyButton>
        {/* <p>{getNavbarValue}</p> */}
        <State getNavbarValue={getNavbarValue}></State>
        <button onClick={() => changeNavbarValue()}>NT Bosss</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
