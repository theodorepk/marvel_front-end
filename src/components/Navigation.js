import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation = ({ setVisible }) => {
  //   const navigate = useNavigate;

  return (
    <nav>
      <Link to={"/"} className="link">
        <div>
          {/* div are here to increase the click zone without enlarge the icons */}
          <FontAwesomeIcon icon="fa-mask" size="xl" />
        </div>
      </Link>
      <div>
        <FontAwesomeIcon
          icon="magnifying-glass"
          className="loupe"
          onClick={() => setVisible((prevState) => !prevState)} //clicking on the magnifying-glass set visible or not the search bar
          size="xl"
        />
      </div>

      <Link to={"/comics"} className="link">
        <div>
          <FontAwesomeIcon icon="book" size="xl" />
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
