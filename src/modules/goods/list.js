import React, {Component} from 'react'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  async handleClick() {
    try {
      const res = await fetch(
        'http://localhost:8080/devicedata/'
      )
      const users = await res.json()
      this.setState({users})
    } catch (error) {
      console.log('错误', error)
    }
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="点击 async / await 方式获取数据"
          onClickCapture={this.handleClick}
        />
        <ul>
          {this.state.users &&
            this.state.users.map((item, index) => (
              <li key={index.toString()}>{item.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default List