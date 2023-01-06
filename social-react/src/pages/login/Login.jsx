import './login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Social World.</h1>
          <p>Next generation social media application.</p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login