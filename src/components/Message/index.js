// Write your code here
import './index.css'

const Message = props => {
  const {msg} = props

  return msg ? (
    <h1 className="heading">Please Login</h1>
  ) : (
    <h1 className="heading">Welcome User</h1>
  )
}

export default Message
