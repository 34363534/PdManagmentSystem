import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nbar from "./Routing/Nbar";
import Homepp from "./Routing/Homep";
import EditProduct from "./Routing/EditPd";
import AddProduct from "./Routing/AddPd";
import Log from "./login/LogIn";
import SinUp from "./login/SinUp";
import FormValidationExample from "./login/SinUp1";



function App() {
  return (
    <div style={{ textAlign: "center" }}>
    <BrowserRouter>
    <Nbar/>
    <Routes>
     <Route path="/" element={<EditProduct />} />
     <Route path="/edit/:id" element={<Homepp />} />
     <Route path="/add" element={<AddProduct />} />
     <Route path="/Login" element={<Log/>} />
     <Route path="/reg" element={<SinUp />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
