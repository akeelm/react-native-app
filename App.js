import React from 'react';

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import AppReducer from './app/reducers/appReducer.js';
import AppWithNavigationState from './app/navigators/appNavigator.js';

class ReduxApp extends React.Component {
	//TODO: remove the parameter for devToolsEnhancer and use NODE_ENV instead
	store = createStore(AppReducer, devToolsEnhancer({ realtime: true }));

	render() {
		return (
			<Provider store={this.store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

AppRegistry.registerComponent('ReduxApp', () => ReduxApp);

export default ReduxApp;
