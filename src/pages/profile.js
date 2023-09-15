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
                <img src="../src/pages.profilepic.jpg" alt="" />
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
              <div className="right-bottom">bottom</div>
            </div>
          </div>
        </div>

        <button onClick={handleupdate}>Update Profile</button>
      </div>
    </>
  );
};
