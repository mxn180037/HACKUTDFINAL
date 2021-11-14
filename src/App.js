import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import logo from "./utd.jpeg";
import Dashboard from "./components/ProfileCard/index.html";
import Profile from "./components/profile";
import Form from "./components/theform";
import pic from "./butterfly.jpg";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{ margin: 10 }} href="#">
          <img
            src={pic}
            width="200"
            height="200"
            alt="UTD"
            style={{ marginRight: 60, marginLeft: 30 }}
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="/"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/dashboard"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                Find a New Friend
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/theform"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                Frienship Form
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/profile"
                style={{ marginRight: 10, marginLeft: 350 }}
              >
                My Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/theform" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
