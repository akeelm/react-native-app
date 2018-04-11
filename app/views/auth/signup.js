import React from 'React';
import { 
	StyleSheet, 
	Text, 
	View, 
	Button, 
	TextInput, 
	ScrollView, 
	Platform
} from 'react-native';
import TextInputLogo from '../../components/controls/text-input-logo';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MainStyles from '../../styles/mainStyles';
import SignupStyles from '../../styles/auth/signupStyles';
import {
	_validateEmail,
	_minimumPasswordLength,
	_passwordsMustMatch
} from '../../helpers/validation';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);

		this._onChangeEmail = this._onChangeEmail.bind(this);
		this._onChangePassword = this._onChangePassword.bind(this);
		this._onChangeConfirmPassword = this._onChangeConfirmPassword.bind(this);
		this.state = { password : '', formValid: false };
	}

	_onChangeEmail(username) {
		this.setState(Object.assign({}, this.state, { username: username }));
	}

	_onChangePassword(password) {
		this.setState(Object.assign({}, this.state, { password: password }));
	}

	_onChangeConfirmPassword(password) {
		this.setState(Object.assign({}, this.state, { confirmPassword: password, formValid: true }));
	}


	render() {

		return (
			<View style={MainStyles.defaultbackground}>

				<View style={SignupStyles.signupView}>
					<Text style={SignupStyles.signupLogo}>
						Sign up
					</Text>
				</View>

				<KeyboardAwareScrollView enableOnAndroid={true} >
					<View style={SignupStyles.signupForm}>

							<TextInputLogo title='E-mail' logo='envelope-o'
								validate={_validateEmail} 
								onChangeMethod={this._onChangeEmail} />

							<TextInputLogo title='Password' logo='lock' secure={true}
								validate={_minimumPasswordLength}
								onChangeMethod={this._onChangePassword} />

							<TextInputLogo title='Confirm password' logo='lock' secure={true} 
								validate={_passwordsMustMatch}
								onChangeMethod={this._onChangeConfirmPassword} 
								checkValue={this.state.password} />

							<Button 
								title='Confirm' 
								onPress={() => { }}
								style={SignupStyles.signupButton}
								disabled={!this.state.formValid}
							></Button>

					</View>
				</KeyboardAwareScrollView>

			</View>
		);
	}
}