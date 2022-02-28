import logo from "./logo.svg";

import "./App.css";
import HeaderFunc from "./components/HeaderFunc.jsx";
import HeaderClass from "./components/HeaderClass";
import HomeComponent from "./components/BaiTapLayout/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      <HandleEvent />
      {/* <Databinding /> */}
      {/* <HomeComponent /> */}
      {/* Hello Cybersoft
      <HeaderClass />
      <HeaderFunc /> */}
    </div>
  );
}

export default App;
