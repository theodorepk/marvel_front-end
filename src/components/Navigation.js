import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation = ({ setVisible }) => {
  //   const navigate = useNavigate;

  return (
    <nav className="navigation">
      <Link to={"/"} className="link">
        <FontAwesomeIcon icon="fa-mask fa-10x" />
      </Link>
      <FontAwesomeIcon
        icon="magnifying-glass"
        className="loupe"
        onClick={() => setVisible((prevState) => !prevState)} //clicking on the magnifying-glass set visible or not the search bar
      />

      <Link to={"/comics"} className="link">
        <FontAwesomeIcon icon="book" />
      </Link>
    </nav>
  );
};

export default Navigation;
