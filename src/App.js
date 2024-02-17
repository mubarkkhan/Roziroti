import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/home";

function Roziroti(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Roziroti}

