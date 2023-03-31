/* eslint-disable */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
//index 함수 내에서 전역변수 선언 이후 app에서도 전역변수 선언
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    // setMode로 style을 제어 할 수 있음, 그래서 div 앞에 class dark를 써놓은 것
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="설정" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* 여기서 w 는 width를 뜻함 */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* className이 동일할 떄 백틱으로 나눠서 삼항연산자 사용 */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            <div>
              {/* true/true 나 string 아니면 무조건 false라서 두번째로 넘어감  */}
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />}></Route>
                <Route path="/ecommerce" element={<Ecommerce />}></Route>

                {/* Pages */}
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/employees" element={<Employees />}></Route>
                <Route path="/customers" element={<Customers />}></Route>

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />}></Route>
                <Route path="/editor" element={<Editor />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/color-picker" element={<ColorPicker />}></Route>

                {/* chart */}
                <Route path="/line" element={<Line />}></Route>
                <Route path="/area" element={<Area />}></Route>
                <Route path="/bar" element={<Bar />}></Route>
                <Route path="/pie" element={<Pie />}></Route>
                <Route path="/financial" element={<Financial />}></Route>
                <Route path="/color-mapping" element={<ColorMapping />}></Route>
                <Route path="/pyramid" element={<Pyramid />}></Route>
                <Route path="/stacked" element={<Stacked />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
