import React from 'React';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

export default class TextInputLogo extends React.Component <{
	title: string,
	logo: string,
	secure: ?boolean
}> {
	static propTypes = {
		title: PropTypes.string.isRequired,
		logo: PropTypes.string.isRequired,
		secure: PropTypes.bool
	};

	render() {
		const {
			title,
			logo,
			secure
		} = this.props;

		return (
			<View style={{ height: 46, marginBottom: 15 }}>
			<View style={{
					flex: 1,
					flexDirection: 'row',
					borderBottomWidth: 1,
					borderColor: '#ccc',
				}}
			>
				<Icon style={{ padding: 10 }} name={logo} size={20} color="#000"/>
				<TextInput
					style={{ 
						height: 40, 
						flex: 1,
						borderBottomWidth: 0,
					}}
					underlineColorAndroid='transparent'
					editable={true}
					placeholder={title}
					secureTextEntry={secure}
					returnKeyType='next'
				/>
			</View>
			</View>
		);
	}
}


