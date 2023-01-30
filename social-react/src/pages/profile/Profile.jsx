import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Posts from "../../components/Posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Little Park</span>
            <div className="info">
              <div className="item">
                <PlaceOutlinedIcon fontSize="14" />
                <span>India</span>
              </div>
              <div className="item">
                <TranslateOutlinedIcon fontSize="14" />
                <span>Ben</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <AlternateEmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="postContainer">
      {/* need to solve props error in Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
