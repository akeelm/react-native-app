import React from 'React';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInputLogo from '../../components/controls/text-input-logo';
import PropTypes from 'prop-types';
import MainStyles from '../../styles/mainStyles';
import LoginStyles from '../../styles/auth/loginStyles';

import Icon from 'react-native-vector-icons/FontAwesome';

import { loginUser } from './../../actions';

import {
	_validateEmail,
	_minimumPasswordLength
} from '../../helpers/validation';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this._onChangeUsername = this._onChangeUsername.bind(this);
		this._onChangePassword = this._onChangePassword.bind(this);

		this.state = { formValid: false };
	}

	loginButtonPress() {
		this.props.loginUser({ username: this.state.username, password: this.state.password });
	}

	_onChangeUsername(username) {
		this.setState(Object.assign({}, this.state, { username: username }));
	}

	_onChangePassword(password) {
		this.setState(Object.assign({}, this.state, { password: password, formValid: true }));
	}


	render() {

		return (
			<View style={MainStyles.defaultbackground}>


				<View style={LoginStyles.logoView}>
					<Image 
						source={require('../../images/logo.png')} 
						style={MainStyles.logoImage}
					/>
				</View>

				<KeyboardAwareScrollView enableOnAndroid={true} >
					<View style={LoginStyles.loginFormView}>

						<TextInputLogo title='E-mail' logo='user-o' 
							onChangeMethod={this._onChangeUsername}
							validate={_validateEmail} 
							/>

						<TextInputLogo title='Password' logo='lock' secure={true} 
							onChangeMethod={this._onChangePassword}
							validate={_minimumPasswordLength} 
							/>

						<Text style={LoginStyles.forgotPassword}>Forgot Password?</Text>

						<Button 
							title='Login' 
							onPress={() => { this.loginButtonPress() }}
							style={LoginStyles.loginButton}
							disabled={!this.state.formValid}
						>
							Login
						</Button>

					</View>
				</KeyboardAwareScrollView>

			</View>
		);
	}
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps, { loginUser } )(Login)