import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Stuff from "./pages/Stuff.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div className="m-8 md:w-full lg:w-[40vw]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/things" element={<Stuff />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
