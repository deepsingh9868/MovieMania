import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Movies<span className="mania">Mania</span>
    </span>
  );
};

export default Header;