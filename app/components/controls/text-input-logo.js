import React from 'React';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

export default class TextInputLogo extends React.Component <{
	title: string,
	logo: string,
	secure: ?boolean,
	onChangeMethod: func
}> {
	static propTypes = {
		title: PropTypes.string.isRequired,
		logo: PropTypes.string.isRequired,
		secure: PropTypes.bool,
		onChangeMethod: PropTypes.func
	};

	constructor(props) {
		super();
		this.state = { focused: false };
	}

	render() {
		const {
			title,
			logo,
			secure,
			onChangeMethod
		} = this.props;

		const toggleFocus = () => {
			this.setState( { focused : !this.state.focused } )
		}

		const error = () => {
			if (this.state.error)
				return <Text style={{ color: '#f38383' }}>{this.state.errorMessage}</Text>
		}

		return (
			<View style={{ marginBottom: 15 }}>
				<View style={{
						flex: 1,
						flexDirection: 'row',
						borderBottomWidth: 1,
						borderColor: (this.state.focused) ?  '#5fba7d' : '#ccc',
					}}
				>
					<Icon style={{ padding: 10 }} name={logo} size={20} 
						color={ (this.state.focused) ?  '#5fba7d' : '#000' } />
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
						onFocus={toggleFocus}
						onBlur={toggleFocus}
						onChangeText={(text) => (this.props.validate) ? 
							this.props.validate(text, onChangeMethod, this) : 
							onChangeMethod(text)}
						returnKeyType='next'
					/>
				</View>
				{
					error()
				}
			</View>
		);
	}
}