import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import S05Challenge from "./s05-basic-jsx/Challenge";
import S05Solution from "./s05-basic-jsx/Solution";

import S06Challenge from "./s06-component-jsx/Challenge";
import S06Solution from "./s06-component-jsx/Solution";

import S07Challenge from "./s07-self-introduction/Challenge";
import S07Solution from "./s07-self-introduction/Solution";

import S08Challenge from "./s08-default-parameters/Challenge";
import S08Solution from "./s08-default-parameters/Solution";

import S09Challenge from "./s09-conditional-rendering/Challenge";
import S09Solution from "./s09-conditional-rendering/Solution";

import S11Challenge from "./s11-render-array/Challenge";
import S11Solution from "./s11-render-array/Solution";

import S12Challenge from "./s12-render-object/Challenge";
import S12Solution from "./s12-render-object/Solution";

import S13Challenge from "./s13-children-prop/Challenge";
import S13Solution from "./s13-children-prop/Solution";

import S14Challenge from "./s14-prop-types/Challenge";
import S14Solution from "./s14-prop-types/Solution";

function App() {
  // to switch between the challenge and the solution, change the line below:
  return <S05Challenge />;
}

export default App;
