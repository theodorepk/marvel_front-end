import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ search, setSearch, visible }) => {
  const navigate = useNavigate();

  return (
    <header>
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
            type="text"
            placeholder="Votre comics préféré"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
          />
        )}
      </div>

      <button>Se Connecter</button>
    </header>
  );
};

export default Header;
