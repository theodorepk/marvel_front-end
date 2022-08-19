import logo from "../assets/Marvel_Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo Marvel" className="logo" />
      <input type="text" />
      <button>Se Connecter</button>
    </header>
  );
};

export default Header;
