// Write your code here
import './index.css'

const Logout = props => {
  const {isLoggedOut} = props

  return (
    <button type="button" className="button" onClick={isLoggedOut}>
      Logout
    </button>
  )
}

export default Logout
