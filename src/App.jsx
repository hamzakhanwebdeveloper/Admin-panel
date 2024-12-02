import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes and Route

// Import your page components
import User from "./Pages/User";
import Courses from "./Pages/Courses";
import Data from "./Pages/Data";
import Calendar from "./Pages/Calendar";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-100 " style={{ height: "100%" }}>
          {/* Replace Switch with Routes and update Route syntax */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/data" element={<Data />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      {/* <Dashborad/> */}
    </Router>
  );
}

export default App;
