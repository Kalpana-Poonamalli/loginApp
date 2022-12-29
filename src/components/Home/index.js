// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  isLoginOrNot = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <Message msg={isLogin} />
          {isLogin ? (
            <Login isLoggedIn={this.isLoginOrNot} />
          ) : (
            <Logout isLoggedOut={this.isLoginOrNot} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
