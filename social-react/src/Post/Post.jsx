import { Link } from "react-router-dom";
import "./post.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import Comments from "../components/comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);

const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
                <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreVertIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ?  <FavoriteIcon/>:<FavoriteBorderIcon/>}
            12 Likes
          </div>
          <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
          <SmsOutlinedIcon/>
            12 Comments
          </div>
          <div className="item">
           <ReplyIcon/>
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
