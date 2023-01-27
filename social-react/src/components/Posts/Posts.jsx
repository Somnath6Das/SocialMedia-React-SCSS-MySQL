import Post from "../../Post/Post";
import "./Posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "somnath",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "description of a post share by someone",
      img: "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Das",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "description of a post share by someone",
      img: "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <Post post={post} key={post.id}/>
        </div>
      ))}
    </div>
  );
};

export default Posts;
