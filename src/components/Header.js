import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false); //false --> the search bar isn't visible

  return (
    <header>
      <FontAwesomeIcon icon="bars" className="menu" />
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
        <FontAwesomeIcon
          icon="magnifying-glass"
          className="loupe"
          onClick={() => setVisible((prevState) => !prevState)} //clicking on the magnifying-glass set visible or not the search bar
        />
      </div>

      <button>Se Connecter</button>
    </header>
  );
};

export default Header;
