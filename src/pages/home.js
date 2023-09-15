import { useNavigate } from "react-router-dom";
import bg from "../bg.jpg";
export const Home = () => {
  const navigate = useNavigate();

  const onget = () => {
    navigate("/auth");
  };

  return (
    <div className="homebody">
      <section className="home">
        <div className="home-text">
          <span>Welcome To</span>
          <h1>ScholarSync</h1>
          <h2>Your Path to Educational Excellence!</h2>
          <button className="btn" onClick={onget}>
            Get Started
          </button>
        </div>

        <div className="home-img">
          <image src={bg} alt="image" />
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="heading">
          <h1>Why Choose Us?</h1>
        </div>

        <div className="shop-container">
          <div className="box">
            <h2>Profile</h2>
            <p>
              A personalized section where registered users manage their
              personal information, share academic and career goals, track
              application history, and control privacy settings.
            </p>
          </div>

          <div className="box">
            <h2>Recommandations</h2>
            <p>
              Real-time updates on the progress of scholarship applications,
              including status, document uploads, messages with administrators,
              and interview scheduling.
            </p>
          </div>

          <div className="box">
            <h2>Application Status</h2>
            <p>
              A feature allowing users to request and track recommendation
              letters or evaluations for their scholarship applications from
              teachers, mentors, or peers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
