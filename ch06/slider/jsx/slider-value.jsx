// 느슨하게 결합된 패턴
class SliderValue extends React.Component {
  constructor(props) {
    super(props)
    this.handleSlide = this.handleSlide.bind(this)
    this.state = {sliderValue: 0}
  }
  handleSlide(event) {
    this.setState({sliderValue: event.detail.ui.value})
  }
  // slide 이벤트 리스너를 window 객체에 연결
  componentDidMount() {
    window.addEventListener('slide', this.handleSlide)
  }
  // DOM 노드가 없어진 후 메모리 누수가 발생하지 않도록 slide 이벤트 연결 제거
  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide)
  }
  render() {
    return <div className="" >
      Value: {this.state.sliderValue}
    </div>
  }
}