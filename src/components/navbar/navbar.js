import Logo from "../../images/logo.svg"
import Union from '../../images/Union.png';
const NavBar = () => {
  return(
  <nav class="navContainer">
    <div class="logoContainer">
      <img src={Logo} alt="Timescale" className='Logo'/>
    </div>
    <div class="navSearch">
      <label className='searchContainer'>
        <img src={Union} alt="Union" className='Union'/> 
        <input type='input' placeholder='Search for a movie'  className='searchInput'/>
      </label>
    </div>
  </nav>
  )
}

export default NavBar;