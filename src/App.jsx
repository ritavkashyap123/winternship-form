import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Linktree from "./Linktree";
import Events from "./Events";
import StudentForm from "./StudentForm";
import CompanyForm from "./CompanyForm";
import Navbar from "./Navbar";
import "./App.css";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Linktree />} />
        <Route path="/event" element={<Events />} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/company-form" element={<CompanyForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
