import "../styles/catigories.css";
import { Link } from "react-router-dom";
import Male from "../components/male";
import Female from "../components/female";

function Catigories() {
  return (
    <>
      <div className="content-cat">
        <Link to="/male">
          <Male />
        </Link>
        <Link to="/female">
          <Female />
        </Link>
      </div>
    </>
  );
}

export default Catigories;
