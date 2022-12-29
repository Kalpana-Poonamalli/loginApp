// Write your code here
import './index.css'

const Login = props => {
  const {isLoggedIn} = props

  return (
    <button type="button" className="button" onClick={isLoggedIn}>
      Login
    </button>
  )
}

export default Login
