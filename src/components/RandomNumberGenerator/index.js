import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  generateRandNum = () => {
    const randomNum = Math.floor(Math.random() * 101)
    this.setState({randomNo: randomNum})
  }

  render() {
    const {randomNo} = this.state

    return (
      <div className="bg-container">
        <div className="card-body">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generateRandNum}>
            Generate
          </button>
          <p className="random-number">{randomNo}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
