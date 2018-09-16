class Content extends React.Component {
 
  render() {
    let sessionFlag = this.props.user.session

    return <div>
        <a href="{(sessionFlag)? '/logout' : '/login'}">
            {(sessionFlag)? 'Logout' : 'Login'}
        </a>
    </div>
  }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
