import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation = ({ setVisible, menuIsVisible }) => {
  return (
    <nav className={!menuIsVisible ? "menuInvisible" : undefined}>
      <Link to={"/"} className="link" style={{ textDecoration: "none" }}>
        <div>
          {/* div are here to increase the click zone without enlarge the icons */}
          <FontAwesomeIcon
            icon="fa-mask"
            size="xl"
            style={{ textDecoration: "none" }}
          />
          <span>Personnages</span>
        </div>
      </Link>
      <div
        onClick={() => setVisible((prevState) => !prevState)}
        className="loupe"
      >
        <FontAwesomeIcon
          icon="magnifying-glass"
          //clicking on the magnifying-glass set visible or not the search bar
          size="xl"
        />
        <span>Search</span>
      </div>
      <Link to={"/comics"} className="link" style={{ textDecoration: "none" }}>
        <div>
          <FontAwesomeIcon icon="book" size="xl" />
          <span>Comics</span>
        </div>
      </Link>
      <Link
        to={"/favorites"}
        className="link"
        style={{ textDecoration: "none" }}
      >
        <div>
          <FontAwesomeIcon icon="fa-solid fa-star" size="xl" />
          <span>Favoris</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
