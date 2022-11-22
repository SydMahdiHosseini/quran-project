import { Link } from 'react-router-dom';
import SettingIcon from "../assets/images/setting-icon.png";
import HomeIcon from "../assets/images/home-icon.png";

function NavBar() {
  return (
    <div className="nav-bar">
        <div className="app-links">
            <Link to={""}>
            <img src={HomeIcon} alt="home-icon" />
            </Link>
        </div>
        <div className="search">
            <input type="text" className="search-input" />
        </div>
        <div className="setting">
            <img src={SettingIcon} alt="setting-icon" />
        </div>
    </div>
  )
}

export default NavBar;