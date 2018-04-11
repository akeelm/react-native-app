import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	logoView: {
        flex: 0.4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20
	},
	loginFormView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 40
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingBottom: 20,
        color: '#4e4e4e'
    },
    loginButton : {
        paddingTop: 10,
        backgroundColor: '#ccf'
    }
});

