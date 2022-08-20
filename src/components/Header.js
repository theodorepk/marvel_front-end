import logo from "../assets/Marvel_Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ setTitle }) => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        onClick={() => {
          navigate("/");
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
