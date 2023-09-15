import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.js";
import { Auth } from "./pages/auth.js";
import { Scholarships } from "./pages/scholarships.js";
import { Profile } from "./pages/profile.js";
import { Form } from "./pages/form.js";
import { Navbar } from "./components/navbar.js";
import { useState, createContext } from "react";

import "./App.css";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Veerendra");
  const [phonenumber, setPhonenumber] = useState("1234567890");
  const [emailid, setEmailid] = useState("xyz@gmail.com");
  const [occupation, setOccupation] = useState("Student");
  const [address, setAddress] = useState("123 Street");
  const [qualification, setQualification] = useState("B.E.");
  const [college, setCollege] = useState("ABC College");
  const [cgpa, setCgpa] = useState("7");
  const [hscmarks, setHscmarks] = useState("89");
  const [graduation, setGraduation] = useState("2024");
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          username,
          setUsername,
          phonenumber,
          setPhonenumber,
          emailid,
          setEmailid,
          occupation,
          setOccupation,
          address,
          setAddress,
          qualification,
          setQualification,
          college,
          setCollege,
          cgpa,
          setCgpa,
          hscmarks,
          setHscmarks,
          graduation,
          setGraduation,
          country,
          setCountry,
          course,
          setCourse,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/form" element={<Form />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
