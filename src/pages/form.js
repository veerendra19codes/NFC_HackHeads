import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App.js";

export const Form = () => {
  const {
    setUsername,
    setPhonenumber,
    setEmailid,
    setOccupation,
    setAddress,
    setQualification,
    setCollege,
    setCgpa,
    setHscmarks,
    setGraduation,
  } = useContext(AppContext);

  const handleFullname = (e) => {
    setUsername(e.target.value);
  };
  const handlephonenumber = (e) => {
    setPhonenumber(e.target.value);
  };
  const handleemailid = (e) => {
    setEmailid(e.target.value);
  };
  const handleoccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleaddress = (e) => {
    setAddress(e.target.value);
  };
  const handlequalification = (e) => {
    setQualification(e.target.value);
  };
  const handlecollege = (e) => {
    setCollege(e.target.value);
  };
  const handlecgpa = (e) => {
    setCgpa(e.target.value);
  };
  const handlegraduation = (e) => {
    setGraduation(e.target.value);
  };
  const navigate = useNavigate();

  const onsubmit = () => {
    navigate("/profile");
  };

  const handlenext = () => {
    navigate("/profile");
  };

  return (
    <div className="bodyform">
      <div className="container">
        <header>Registration</header>

        <form onSubmit={onsubmit}>
          <div className="form first">
            <div className="details-personal details">
              {/* <span className="title personal">Personal Details</span> */}
              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={handleFullname}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Enter Age"
                    // onChange={handleage}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Gender</label>
                  <input
                    type="text"
                    placeholder="Enter Gender"
                    // onChange={handlegender}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={handleaddress}
                    placeholder="Enter Address"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Phone</label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    onChange={handlephonenumber}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleemailid}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="details-educational details">
              {/* <span className="title educational">Educational Details</span> */}
              <div className="fields">
                <div className="input-field">
                  <label>College/University</label>
                  <input
                    type="text"
                    placeholder="Enter College/University"
                    onChange={handlecollege}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Qualification</label>
                  <input
                    type="text"
                    placeholder="SSC/HSC/Degree"
                    onChange={handlequalification}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>CGPA</label>
                  <input
                    type="number"
                    onChange={handlecgpa}
                    placeholder="Enter CGPA"
                  />
                </div>
                <div className="input-field">
                  <label>12th Marks</label>
                  <input
                    type="text"
                    // onChange={handlehscmarks}
                    placeholder="Enter Marks"
                  />
                </div>
                <div className="input-field">
                  <label>Graduation Year</label>
                  <input
                    type="number"
                    onChange={handlegraduation}
                    placeholder="Enter Graduation Year"
                  />
                </div>
                <div className="input-field">
                  <label>CV/Resume</label>
                  <input
                    id="drop_zone"
                    ondrop="dropHandler(event)"
                    type="text"
                    placeholder="Upload CV/Resume"
                    required
                  />
                </div>
              </div>

              <button className="nextBtn" type="submit" onCLick={handlenext}>
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
