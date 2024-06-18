import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Link to="/">
        <h1 className="text-center text-2xl py-4">Dynamic Forms</h1>
      </Link>
      <div className="flex justify-center m-3">
        <div className="text-center py-2 px-2 rounded-md border-2 border-green-600 w-fit hover:bg-green-600 hover:text-white">
          <a
            href="https://docs.google.com/spreadsheets/d/1grlTK00rSbve9DIqIHBUtyukmiM6ONO7ITONaWMkXCQ/edit?gid=604154347#gid=604154347"
            target="_blank"
          >
            Google Sheet
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formA" element={<Form type={"A"} />} />
        <Route path="/formB" element={<Form type={"B"} />} />
      </Routes>
    </Router>
  );
}

export default App;
