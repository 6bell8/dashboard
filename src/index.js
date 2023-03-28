import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// index에 전역함수 넣어서 돌리기
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
