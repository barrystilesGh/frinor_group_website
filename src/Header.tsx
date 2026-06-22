import "./Header.css";
import Logo from "./assets/images/Frinor_Logo.jpeg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className='hero hd' id='home'>
      <div className='companyNameAndLogo'>
        <figure className='logo'>
          <img src={Logo} alt='FriNor Logo' />
        </figure>
        <div>
          <h1 className='motto'>Compassionate Care, Professional Service.</h1>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
