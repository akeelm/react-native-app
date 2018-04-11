import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	signupView: {
		flex: 0.2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start', 
	},
	signupLogo: {
		height: 60,
		fontSize: 25,
		paddingTop: 20
	},
	signupForm: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		padding: 40
	},
	signupButton: {
		paddingTop: 10,
		backgroundColor: '#ccf'
	}
});

