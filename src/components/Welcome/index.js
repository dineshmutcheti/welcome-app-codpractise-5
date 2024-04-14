// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscribeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }
  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" className="button" onClick={this.subscribeBtn}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="button" onClick={this.subscribeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
