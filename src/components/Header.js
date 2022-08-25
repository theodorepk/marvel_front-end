import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  search,
  setSearch,
  visible,
  setVisible,
  setMenuIsVisible,
}) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="menu">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          size="xl"
          className="bars"
          onClick={(event) => {
            event.stopPropagation(); //click everywere else on the page close the menu. Here we stop the propagation to setup an open/close menu button
            setMenuIsVisible((prevState) => !prevState);
          }}
        />
      </div>

      <div className={visible ? "sbContainer" : undefined}>
        {visible && (
          <FontAwesomeIcon
            icon="fa-solid fa-angle-right"
            size="xl"
            onClick={() => {
              setVisible(false);
            }}
            className="return"
          />
        )}
        <input
          className={visible ? "searchBar" : "searchBarHidden"}
          type="search"
          placeholder="Votre comics préféré"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
      </div>

      {!visible && (
        <img
          onClick={() => {
            navigate("/");
            setSearch(``); //reset the search
          }}
          src={logo}
          alt="logo Marvel"
          className="logo"
        />
      )}

      <button>
        <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" />{" "}
      </button>
    </header>
  );
};

export default Header;
