import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Views/home.js';
import Login from './Views/Auth/login.js';
import Signup from './Views/Auth/signup.js';


const HomeScreen = ({ navigation }) => (<Home navigation={navigation} />);

const LoginScreen = () => (<Login />);
const SignupScreen = () => (<Signup />);

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Login: {
		screen: LoginScreen,
	},
	Signup: {
		screen: SignupScreen,
	}
});

export default RootNavigator;
