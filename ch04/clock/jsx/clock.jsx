class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {currentTime: (new Date()).toLocaleString()}
  }
  launchClock() {
    // 브라우저의 타이머 함수
    setInterval(()=> {
      console.log('Updating time')
      this.setState({  // 상태 변경
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
  render() {
    console.log('Rendering Clock')
    return <div>{this.state.currentTime}</div>
  }
}