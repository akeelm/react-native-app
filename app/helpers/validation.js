export function _validateEmail(email, _onChangeMethod, _this) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        _this.setState({ error: true, errorMessage: 'Not a valid e-mail address' });
    } else {
        _this.setState({ error: false });
        _onChangeMethod(email);
    }
}

export function _minimumPasswordLength(password, _onChangeMethod, _this, _len) {
    let len = _len || 6;
    if (password.length < len) {
        _this.setState({
            error: true,
            errorMessage: `Password must be greater than ${len} characters`
        });
    } else {
        _this.setState({ error: false });
        _onChangeMethod(password);
    }
}

export function _passwordsMustMatch(password, _onChangeMethod, _this) {
    if (password !== _this.props.checkValue) {
        _this.setState({
            error: true,
            errorMessage: `Passwords must match`
        });
    } else {
        _this.setState({ error: false });
        _onChangeMethod(password);
    }
}