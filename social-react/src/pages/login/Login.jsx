import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { Link } from "react-router-dom";



const Login = () => {
  const {login} = useContext(AuthContext);
  const handelLogin =  () => {
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social World.</h1>
          <p>Next generation social media application.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handelLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
