import { Link } from "react-router-dom";
import Users from "./Users";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link to="/formA">
          <button className="btn-gradient-primary ">Form A</button>
        </Link>
        <Link to="/formB">
          <button className="btn-gradient-secondary">Form B</button>
        </Link>
      </div>

      <Users />
    </div>
  );
};

export default Home;
