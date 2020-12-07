import React, { useState } from "react";
import { Panel } from "./Components/Panel";
import { Preview } from "./Components/Preview";
import { Buttons } from "./Components/Buttons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState({
    bgColor: { hex: "#B12222" },
    fontSize: 36,
    fontFamily: "Cursive",
    url: "",
    pastedURL: "https://i.imgur.com/6CFneTS.png",
    text: "Avito",
    link: "",
  });

  const handleText = (e) => {
    const { name, value } = e.target;
    let firstThreeColumns = value.split("\n").slice(0, 3).join("\n");
    setState((prevState) => ({ ...prevState, [name]: firstThreeColumns }));
  };
  const handleSet = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChange = (bgColor) => {
    setState((prevState) => ({ ...prevState, bgColor: bgColor }));
  };
  const handleNewLogo = (e) => {
    const { name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: state.url }));
  };

  return (
    <div className="d-flex">
      <Panel
        init={state}
        func={{ handleText, handleSet, handleChange, handleNewLogo }}
      />
      <div className="outer d-flex flex-column align-items-center">
        <Preview init={state} />
        <Buttons init={state} />
      </div>
    </div>
  );
}

export default App;
