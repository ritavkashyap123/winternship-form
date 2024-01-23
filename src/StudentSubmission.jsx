import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaUpload } from "react-icons/fa";
import { db, storage } from "./firebaseUtils";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const StudentSubmission = () => {
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState("");
  const [eventName, setEventName] = useState("");

  const [leadName, setLeadName] = useState("");
  const [mem2Name, setMem2Name] = useState("");
  const [mem3Name, setMem3Name] = useState("");
  const [gitLink, setGitLink] = useState("");

  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setEventName(option);
    setDropdownOpen(false);
  };

  const options = [
    "Sales Event",
    "Tech Event",
    "Design Event",
    "Marketing Event",
  ];

  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `file/${fileUpload.name}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((fileUrls) => {
        setFileUrls(fileUrls);
      });
    });
  };

  const handleFileChange = (event) => {
    const fileName = event.target.files[0].name;
    document.getElementById("file-name").innerHTML = fileName;
    setFileUpload(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "submission"), {
        teamName: teamName,
        eventName: eventName,
        leadName: leadName,
        mem2Name: mem2Name,
        mem3Name: mem3Name,
        gitLink: gitLink,
        fileUrls: fileUrls,
      });
      alert("Submission Successful 👍");
      navigate("/submitted");
    } catch (e) {
      alert("Submission failed error: ", e);
    }
    setTeamName("");
    setEventName("");
    setLeadName("");
    setMem2Name("");
    setMem3Name("");
    setGitLink("");
    setFileUrls("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="box">
          <div className="head">Student Registration Form</div>
        </div>
        <div className="box">
          <div className="head2">
            Team Name <span className="required">*</span>
          </div>
          <input
            id="team-name"
            type="text"
            className="input"
            placeholder="Team Name"
            required
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <div className="head2">
            Participating Events <span className="required">*</span>
          </div>
          <div className="Dropdown">
            <div
              className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {eventName ? eventName : "Select the Event"}
              <div className="custom-down-icon">
                <FaChevronDown />
              </div>
            </div>
            {dropdownOpen && (
              <div className="options">
                {options.map((option) => (
                  <div
                    key={option}
                    className="option"
                    onChange={() => handleOptionClick(option)}
                    onClick={() => handleOptionClick(option)}
                    value={eventName}
                    required
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="head2">
            Lead Name <span className="required">*</span>
          </div>
          <input
            id="team-lead-name"
            type="text"
            className="input"
            placeholder="Leader Name"
            required
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
          />
          {eventName == "Tech Event" ? (
            <>
              <div className="head2">2nd Member Name</div>
              <input
                id="team-lead-name"
                type="text"
                className="input"
                placeholder="2nd Member Name"
                value={mem2Name}
                onChange={(e) => setMem2Name(e.target.value)}
              />
              <div className="head2">3rd Member Name</div>
              <input
                id="team-lead-name"
                type="text"
                className="input"
                placeholder="3rd Member Name"
                value={mem3Name}
                onChange={(e) => setMem3Name(e.target.value)}
              />
              <div className="head2">
                Github Repository Link <span className="required">*</span>
              </div>
              <input
                id="team-lead-name"
                type="text"
                className="input"
                placeholder="Github Repo Link"
                required
                value={gitLink}
                onChange={(e) => setGitLink(e.target.value)}
              />
            </>
          ) : (
            ""
          )}

          <div className="head2">
            Submit your Solution <span className="required">*</span>
          </div>
          <div className="head5">Preferably in .zip or .pdf file</div>
          <div className="filemain">
            <div className="inputfile-box">
              <input
                type="file"
                id="file"
                className="inputfile"
                onChange={handleFileChange}
                required
              />
              <label htmlFor="file">
                <span id="file-name" className="file-box"></span>
                <span className="file-button">Select File</span>
              </label>
            </div>
            <div className="fileSubmit" onClick={uploadFile}>
              <div className="fileSubmitbtn">Upload</div>
            </div>
          </div>
          <div className="btn">
            {fileUrls == "" ||
            teamName == "" ||
            eventName == "" ||
            leadName == "" ? (
              <div
                className="button"
                style={{
                  boxShadow:
                    "inset .2rem .2rem .5rem #ff9696, inset -.2rem -.2rem .5rem #ff9191",
                }}
              >
                Fill The Required Fields{" "}
              </div>
            ) : (
              <button
                type="submit"
                style={{
                  boxShadow:
                    "inset .2rem .2rem .5rem #b3ffb3, inset -.2rem -.2rem .5rem #91ffda",
                }}
              >
                Submit Now
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentSubmission;
