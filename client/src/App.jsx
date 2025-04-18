import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"
import SchedulePost from "./pages/SchedulePost";
import ScheduledPosts from "./pages/ScheduledPosts";
import History from "./pages/History";
import Analytics from "./pages/Analytics";
import EditPost from "./pages/EditPost"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<SchedulePost />} />
        <Route path="/scheduled-posts" element={<ScheduledPosts />} />
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
