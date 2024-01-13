import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Linktree from "./Linktree";
import Events from "./Events";
import Form from "./Form";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Linktree />} />
          <Route path="/event" element={<Events />} />
          <Route path="/form" element={<Form />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
