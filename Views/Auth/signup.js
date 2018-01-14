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
import TextInputLogo from '../../Components/Controls/text-input-logo.js';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MainStyles from '../../Styles/main.js';

export default class Signup extends React.Component {
	render() {

		return (
			<View style={MainStyles.defaultbackground}>

				<View style={{ 
						flex: 0.2, 
						flexDirection: 'column',
						alignItems: 'center', 
						justifyContent: 'flex-start', 
				}}>
					<Text style={{
						height:60, 
						fontSize:25,
						paddingTop:20
					}}>
						Sign up
					</Text>
				</View>

				<KeyboardAwareScrollView enableOnAndroid={true} >
				<View style={{ 
						flex: 1, 
						flexDirection: 'column',
						alignItems: 'stretch', 
						justifyContent: 'flex-start', 
						padding: 40
				}}>

						<TextInputLogo title='E-mail' logo='envelope-o' />

						<TextInputLogo title='Password' logo='lock' secure={true} />

						<TextInputLogo title='Confirm password' logo='lock' secure={true} />

						<Button 
							title='Confirm' 
							onPress={() => { }}
							style={{ 
								paddingTop: 10,
								backgroundColor: '#ccf'
							}}
						></Button>

				</View>
					</KeyboardAwareScrollView>

			</View>
		);
	}
}

