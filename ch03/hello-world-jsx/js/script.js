class Content extends React.Component {

    render() {
        let sessionFlag = this.props.user.session;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: '{(sessionFlag)? \'/logout\' : \'/login\'}' },
                sessionFlag ? 'Logout' : 'Login'
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
