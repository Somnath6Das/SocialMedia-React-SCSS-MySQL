import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social World</span>
        </Link>
        <HomeOutlinedIcon className="icon"/>
        <DarkModeOutlinedIcon className="icon"/>
        <GridViewOutlinedIcon className="icon"/>
        <div className="search">
          <SearchOutlinedIcon className="icon"/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className="icon"/>
        <EmailOutlinedIcon className="icon"/>
        <NotificationsNoneOutlinedIcon className="icon"/>
        <div className="user">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
          <span>Somnath</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
