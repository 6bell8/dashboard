/* eslint-disable */

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// !-------메뉴 활성화 전역함수-------!

// 전역 함수를 생성하고 useContext로 선언한 전역함수를 전달
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  // initialState을 !clicked로 전환하면 전부가 변하기 때문에 스프레드 연산자로 객체를 뿌려서 clicked한 인자값만 true로 전환,,똑똑
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  return (
    // 키값이 같으면 activeMenu:activeMenu 뒤에 :activeMenu 생략가능
    // provider를 통해서 useState값 전달
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// 생성 된 전역 함수를 뿌려주는 함수
export const useStateContext = () => useContext(StateContext);
