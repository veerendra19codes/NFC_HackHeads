import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Form = () => {
  //   const contextValue = {
  //     fullname,
  //   };
  const [fullname, setFullname] = useState("");

  const handleFullname = (e) => {
    setFullname(e.target.value);
    console.log(fullname);
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

        <form action="#">
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
                  <input type="number" placeholder="Enter Age" required />
                </div>
                <div className="input-field">
                  <label>Gender</label>
                  <input type="text" placeholder="Enter Gender" required />
                </div>
                <div className="input-field">
                  <label>Address</label>
                  <input type="text" placeholder="Enter Address" required />
                </div>
                <div className="input-field">
                  <label>Phone</label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" required />
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
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Qualification</label>
                  <input type="text" placeholder="SSC/HSC/Degree" required />
                </div>
                <div className="input-field">
                  <label>CGPA</label>
                  <input type="number" placeholder="Enter CGPA" />
                </div>
                <div className="input-field">
                  <label>12th Marks</label>
                  <input type="text" placeholder="Enter Marks" />
                </div>
                <div className="input-field">
                  <label>Graduation Year</label>
                  <input type="number" placeholder="Enter Graduation Year" />
                </div>
                <div className="input-field">
                  <label>CV/Resume</label>
                  <input
                    id="drop_zone"
                    ondrop="dropHandler(event);"
                    type="text"
                    placeholder="Upload CV/Resume"
                    required
                  />
                </div>
              </div>

              <button className="nextBtn" onClick={handlenext}>
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
