import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <span>Jiya Indore</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <span>Jiya Indore</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <p>
                <span>Jiya</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <p>
                <span>Jiya</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
          
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <div className="online"/>
              <span>Jiya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <div className="online"/>
              <span>Jiya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPZRlDLLRvB5Qnb1gjwLZmzdopBRgIZ2yPw&usqp=CAU"
                alt=""
              />
              <div className="online"/>
              <span>Jiya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
