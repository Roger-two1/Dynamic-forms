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
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Yix7s2f0fpW01ia0QF73dj8hucgawR07DVA-Vk9yNcAQFGfmRiMhE-1nZx6R8P8s3djqlS2lwjW9/pubhtml?gid=604154347&single=true"
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
