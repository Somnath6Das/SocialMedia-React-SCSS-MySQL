import { useContext } from "react";
import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const {currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1533/1533763.png"
              alt=""
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7051/7051303.png"
              alt=""
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7857/7857762.png"
              alt=""
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7245/7245112.png"
              alt=""
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3066/3066491.png"
              alt=""
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8927/8927109.png"
              alt=""
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3097/3097980.png"
              alt=""
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png"
              alt=""
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2839/2839026.png"
              alt=""
            />
            <span>Videos</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9187/9187469.png"
              alt=""
            />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/2037/2037747.png" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/748/748602.png" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/4412/4412834.png" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
