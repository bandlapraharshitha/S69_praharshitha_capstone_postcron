import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/home">Schedule Post</Link>
      <Link to="/scheduled-posts">Scheduled Posts</Link>
      <Link to="/history">History</Link>
      <Link to="/analytics">Analytics</Link>
    </nav>
  );
}

export default Navbar;
