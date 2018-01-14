import React from 'React';
import { Image, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInputLogo from '../../Components/Controls/text-input-logo.js';
import PropTypes from 'prop-types';
import MainStyles from '../../Styles/main.js';

export default class Login extends React.Component {
	render() {

		return (
			<View style={MainStyles.defaultbackground}>

				<View style={{ 
						flex: 0.4, 
						flexDirection: 'column',
						alignItems: 'center', 
						justifyContent: 'flex-start', 
						paddingTop: 20
				}}>
					<Image 
						source={require('../../Images/logo.png')} 
						style={MainStyles.logoImage}
					/>
				</View>

				<KeyboardAwareScrollView enableOnAndroid={true} >
					<View style={{ 
							flex: 1, 
							flexDirection: 'column',
							alignItems: 'stretch', 
							justifyContent: 'flex-start', 
							padding: 40
					}}>

						<TextInputLogo title='Username' logo='user-o' />

						<TextInputLogo title='Password' logo='lock' secure={true} />


						<Text style={{ 
							alignSelf: 'flex-end',
							paddingTop: 10,
							paddingBottom: 20,
							color: '#4e4e4e'
						}}>Forgot Password?</Text>
						<Button 
							title='Login' 
							onPress={() => { }}
							style={{ 
								paddingTop: 10,
								backgroundColor: '#ccf'
							}}
						>
							Login
						</Button>

					</View>
				</KeyboardAwareScrollView>

			</View>
		);
	}
}
