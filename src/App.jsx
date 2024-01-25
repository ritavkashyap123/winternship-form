import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Linktree from "./Linktree";
import Events from "./Events";
import StudentForm from "./StudentForm";
import CompanyForm from "./CompanyForm";
import Navbar from "./Navbar";
import "./App.css";
import Header from "./Header";
import Links from "./Links";
import Participants from "./Participants";
import StudentSubmission from "./StudentSubmission";
import Submitted from "./Submitted";
import Participant from "./Participant";

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
        <Route path="/links" element={<Links />} />
        {/* <Route path="/participant-list" element={<Participants />} /> */}
        <Route path="/participant-list" element={<Participant />} />
        <Route path="/submission" element={<StudentSubmission />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
