import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <h1>ScholarSync</h1>

      <div className="ul">
        <Link to="/" className="navitems">
          Home
        </Link>
        <Link to="/scholarships" className="navitems">
          Scholarships
        </Link>
        <Link to="/profile" className="navitems">
          Profile
        </Link>
        {!cookies.access_token ? (
          <Link to="/auth" className="navitems">
            Login/Register
          </Link>
        ) : (
          <button onClick={logout} className="btn">
            {" "}
            Logout{" "}
          </button>
        )}
      </div>
    </div>
  );
};
