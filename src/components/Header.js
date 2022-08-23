import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch, visible, setVisible }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="menu">
        {/* {visible && (
          <FontAwesomeIcon
            icon="fa-solid fa-angle-right"
            size="xl"
            onClick={() => {
              setVisible(false);
            }}
          />
        )} */}
        <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" className="bars" />
      </div>
      {/* <FontAwesomeIcon icon="bars" className="menu" /> */}
      {/* <div className="hidden"> */}
      {/* {visible && (
          <FontAwesomeIcon
            icon="fa-solid fa-angle-right"
            size="xl"
            onClick={() => {
              setVisible(false);
            }}
          />
        )} */}
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
      {/* </div> */}
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
      {/* <div className={visible ? "searchBar" : "searchBarHidden"}>
        {visible && (
          <input
            type="search"
            placeholder="Votre comics préféré"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
        )}
      </div> */}
      {/* <div className={visible ? "sbContainer" : undefined}>
        <input
          className={visible ? "searchBar" : "searchBarHidden"}
          type="search"
          placeholder="Votre comics préféré"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
      </div> */}

      <button>
        <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" />{" "}
      </button>
    </header>
  );
};

export default Header;
