import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setTitle, setIsLoading }) => {
  const navigate = useNavigate(0);

  return (
    <header>
      <FontAwesomeIcon icon="bars" />
      <img
        onClick={() => {
          navigate("/");
          setIsLoading(true); //isLoading is true when the home page loading
        }}
        src={logo}
        alt="logo Marvel"
        className="logo"
      />
      <input
        type="text"
        placeholder="Votre comics préféré"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        // value={title}
      />
      <button>Se Connecter</button>
    </header>
  );
};

export default Header;
