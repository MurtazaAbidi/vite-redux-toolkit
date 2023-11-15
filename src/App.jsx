import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { setDataInfo } from './Redux/Slices/mainSlice'

function App() {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => {
    return state.dataInfo;
  });
  return (
    <>
      <h1>Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => dispatch(setDataInfo(dataInfo+1))}>
          count is {dataInfo}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
       Redux-persist
      </p>
    </>
  )
}

export default App
