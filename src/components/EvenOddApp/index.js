// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onIncrease = () => {
    const getRand = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + getRand}))
  }
  render() {
    const {count} = this.state

    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading"> Count {count}</h1>
          <p className="description">Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrease}>
            {' '}
            Increment{' '}
          </button>
          <p> *Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
ShowHide.defaultProps = {
  count: 0,
}
export default ShowHide
