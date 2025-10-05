import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex">
      <nav className="flex flex-box gap-4 text-xl text-blue-600 text-decoration-line: underline">
        <Link to="/">home</Link>
        <Link to="/blog">blog</Link>
        <Link to="/things">my things</Link>
      </nav>
    </div>
  );
}

export default NavBar;
