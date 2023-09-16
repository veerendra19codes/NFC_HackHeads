import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../App.js";

export const Profile = () => {
  //   const [isactive, setIsactive] = useState(true);
  const navigate = useNavigate();
  const {
    username,
    phonenumber,
    emailid,
    occupation,
    address,
    qualification,
    college,
    cgpa,
    hscmarks,
    graduation,
    skills,
    activities,
    achievements,
  } = useContext(AppContext);

  const handleupdate = () => {
    navigate("/form");
  };

  //   const onsubmit = () => {
  //     navigate("/scholarships");
  //   };

  return (
    <>
      <div className="profilebody">
        <div className="prof_container">
          <div className="prof_container_row">
            <div className="left">
              <div className="sidebar_container">
                {/* <img src="../src/pages.profilepic.jpg" alt="" /> */}
                <h3>{username}</h3>
                <div className="card-body">
                  <p>
                    <strong>Phone Number: </strong> {phonenumber}
                  </p>
                  <p>
                    <strong>Email Id: </strong> {emailid}
                  </p>
                  <p>
                    <strong>Occupation: </strong> {occupation}
                  </p>
                  <p>
                    <strong>Address: </strong> {address}
                  </p>
                  <p>
                    <strong>SKills </strong> {skills}
                  </p>
                  <p>
                    <strong>Activities </strong> {activities}
                  </p>
                  <p>
                    <strong>Achievemnts </strong> {achievements}
                  </p>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="right-top">
                <h3> Academic Detail</h3>
                <div className="right-top-body">
                  <p>
                    <strong>Qualification: </strong> {qualification}
                  </p>
                  <p>
                    <strong>College/University: </strong> {college}
                  </p>
                  <p>
                    <strong>CGPA: </strong> {cgpa}
                  </p>
                  <p>
                    <strong>12 Marks: </strong> {hscmarks}
                  </p>
                  <p>
                    <strong>Graduation Year: </strong> {graduation}
                  </p>
                </div>
              </div>
              <div className="right-bottom">
                <button className="btn" onClick={handleupdate}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="resources">
          <div className="content">
            <h1> Some Popular Courses</h1>

            <h3>Bachelors</h3>
            <div className="coursenames">
              1. Bachelor of Arts (BA) <br></br>
              2. Bachelor of Science (BS or BSc)<br></br> 3. Bachelor of Fine
              Arts (BFA) <br></br>
              4. Bachelor of Business Administration (BBA) <br></br>5. Bachelor
              of Engineering (BEng or BE) <br></br> 6. Bachelor of Architecture
              (BArch) <br></br>7. Bachelor of Nursing (BSN) <br></br>8. Bachelor
              of Education (BEd) <br></br>9. Bachelor of Music (BMus) <br></br>{" "}
              10. Bachelor of Social Work (BSW)
            </div>

            <h3>Masters</h3>
            <div className="coursename">
              1. Master of Arts (MA) <br />
              2. Master of Science (MS or MSc) <br />
              3. Master of Business Administration (MBA) <br />
              4. Master of Fine Arts (MFA)<br></br>
              5. Master of Education (MEd) <br />
              6. Master of Engineering (MEng or ME) <br />
              7. Master of Architecture (MArch) <br /> 8. Master of Nursing
              (MSN) <br />
              9. Master of Social Work (MSW) <br />
              10. Master of Communication (MComm or MA in Communication)
            </div>

            <h3>PhD</h3>
            <div className="coursenames">
              1. Ph.D. in Humanities <br /> 2. Ph.D. in Social Sciences <br />
              3. Ph.D. in Natural Sciences <br />
              4. Ph.D. in Engineering <br /> 5. Ph.D. in Business Administration
              (DBA) <br />
              6. Ph.D. in Education <br />
              7. Ph.D. in Psychology <br />
              8. Ph.D. in Computer Science <br /> 9. Ph.D. in Economics <br />
              10. Ph.D. in Political Science
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
