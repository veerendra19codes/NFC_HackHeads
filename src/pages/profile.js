import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const handleupdate = () => {
    navigate("/form");
  };

  return (
    <div className="profilebody">
      <div className="prof_container">
        <div className="prof_container_row">
          <div className="left">
            <div className="sidebar_container">
              <img src="../client/src/pages/profilepic.jpg" alt="" />
              <h3>{fullname}</h3>
              <div className="card-body">
                <p>
                  <strong>Phone Number: </strong> 9757235996
                </p>
                <p>
                  <strong>Email Id: </strong> veerendra@gmail.com
                </p>
                <p>
                  <strong>Occupation: </strong> Student
                </p>
                <p>
                  <strong>Address: </strong> Mumbai, India
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right-top">
              <h3> Academic Detail</h3>
              <div className="right-top-body">
                <p>
                  <strong>Qualification: </strong> B.E
                </p>
                <p>
                  <strong>College/University: </strong> Mumbai University
                </p>
                <p>
                  <strong>CGPA: </strong> 8.75
                </p>
                <p>
                  <strong>12 Marks: </strong> 93.6
                </p>
                <p>
                  <strong>Graduation Year: </strong> 2024
                </p>
              </div>
            </div>
            <div className="right-bottom">bottom</div>
          </div>
        </div>
      </div>

      <button onClick={handleupdate}>Update Profile</button>
    </div>
  );
};
