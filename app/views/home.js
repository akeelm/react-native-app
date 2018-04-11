import React from 'React';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import MainStyles from '../styles/mainStyles';
import HomeStyles from '../styles/homeStyles';

export default class Home extends React.Component {	
	constructor(navigation) {
		super();
		this.navigation = navigation;
	}

	render() {

		return (
			<View style={MainStyles.defaultbackground}>

				<View style={HomeStyles.logoView}>
					<Image 
						source={require('../images/logo.png')} 
						style={MainStyles.logoImage}
					/>
				</View>

				<View style={HomeStyles.loginSignupButtonsView}>

					<View style={{paddingBottom:20}}>
						<Button 
							onPress={() => this.props.navigation.navigate('Login')}
							title='Login' />
					</View>

					<Button 
						onPress={() => this.props.navigation.navigate('Signup')}
						color='#fa91b3'
						title='Sign up' />
				</View>

			</View>
		);
	}
}


