import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            desc: "How about your trip? You have taken very beautiful picture.",
            name: "Animax",
            userId: 1,
            profilePicture: "https://wallpapers.com/images/hd/cool-profile-pictures-red-anime-fw4wgkj905tjeujb.jpg"
        },
        {
            id: 2,
            desc: "How about your trip? You have taken very beautiful picture.",
            name: "Miki",
            userId: 2,
            profilePicture: "https://media.tenor.com/uQNoWGXo9VwAAAAd/profile-picture-discord.gif"
        },
    ]
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write a comment.'/>
            <button>Send</button>
        </div>
       { comments.map(comment=> (
        <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1min ago</span>
        </div>
       ))}
    </div>
  )
}

export default Comments