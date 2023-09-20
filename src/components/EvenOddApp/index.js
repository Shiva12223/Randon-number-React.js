// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrementCount = () => {
    this.setState(prevState => {
      const {count} = prevState

      const num = count + Math.ceil(Math.random() * 100)

      let numType
      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {count: num, isEven: numType}
    })
  }

  render() {
    const {count, isEven} = this.state

    const countType = isEven ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-type">Count is {countType}</p>
          <div>
            <button
              type="button"
              onClick={this.onIncrementCount}
              className="btn"
            >
              Increment
            </button>
          </div>

          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
