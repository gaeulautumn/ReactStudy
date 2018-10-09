//고차 컴포넌트
const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {label: 'Run', handleClick: this.handleClick.bind(this)} 
    }
    getUrl() {
      return 'http://reactquickly.co/';
    }
    handleClick(event) {
      document.getElementById('frame').src = this.getUrl()
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }
    render() {
      console.log(this.state)
      return <Component {...this.state} {...this.props} /> //펼침 연산자
    }
  }
  _LoadWebsite.displayName = 'EhnancedComponent' //고차 컴포넌트의 표시 이름 지정

  return _LoadWebsite
}
