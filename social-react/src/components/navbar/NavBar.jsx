import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social World</span>
        </Link>
        <HomeOutlinedIcon className="icon" />
        {darkMode ? (
          <LightModeOutlinedIcon className="icon" onClick={toggle} />
          ) : (
          <DarkModeOutlinedIcon className="icon" onClick={toggle} />
        )}
        
        <GridViewOutlinedIcon className="icon" />
        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className="icon" />
        <EmailOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <div className="user">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt=""
          />
          <span>Somnath</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
