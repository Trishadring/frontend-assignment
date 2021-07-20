import Logo from "../../images/logo.svg"
import Union from '../../images/Union.png';
const NavBar = () => {
  return(
  <nav className="navContainer">
    <div className="logoContainer">
      <img src={Logo} alt="Timescale" className='Logo'/>
    </div>
    <div className="navSearch">
      <label className='searchContainer'>
        <img src={Union} alt="Union" className='Union'/> 
        <input type='input' placeholder='Search for a movie'  className='searchInput'/>
      </label>
    </div>
  </nav>
  )
}

export default NavBar;