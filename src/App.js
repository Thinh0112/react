import logo from "./logo.svg";

import "./App.css";
import HeaderFunc from "./components/HeaderFunc.jsx";
import HeaderClass from "./components/HeaderClass";
import HomeComponent from "./components/BaiTapLayout/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import Rendering_Conditions from "./Rendering_Conditions/Rendering_Conditions";
import Ex1StateDemo from "./StateDemo/Ex1StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import QuanLyDanhSachPhim from "./RenderWithMap/QuanLyDanhSachPhim";
import BaiTapXemChiTietSP from "./Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP";

function App() {
  return (
    <div className="App">
      <BaiTapXemChiTietSP />
      {/* <QuanLyDanhSachPhim /> */}
      {/* <RenderWithMap /> */}
      {/* <Ex1StateDemo /> */}
      {/* <Rendering_Conditions /> */}
      {/* <HandleEvent /> */}
      {/* <Databinding /> */}
      {/* <HomeComponent /> */}
      {/* Hello Cybersoft
      <HeaderClass />
      <HeaderFunc /> */}
    </div>
  );
}

export default App;
