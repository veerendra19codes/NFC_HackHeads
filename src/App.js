import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.js";
import { Auth } from "./pages/auth.js";
import { Scholarships } from "./pages/scholarships.js";
import { Profile } from "./pages/profile.js";
import { Form } from "./pages/form.js";
import { Navbar } from "./components/navbar.js";

import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
