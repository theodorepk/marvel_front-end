import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch, visible }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="hidden"></div>
      {/* <FontAwesomeIcon icon="bars" className="menu" /> */}
      {!visible && (
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="logo Marvel"
          className="logo"
        />
      )}
      <div className={visible ? "searchBar" : undefined}>
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
      </div>

      <button>
        <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" />{" "}
      </button>
    </header>
  );
};

export default Header;
