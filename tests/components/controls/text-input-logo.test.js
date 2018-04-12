import React from 'react';
import TextInputLogo from '../../../app/components/controls/text-input-logo';

import {
	_validateEmail,
	_minimumPasswordLength
} from '../../../app/helpers/validation';

import Icon from 'react-native-vector-icons/FontAwesome';
import renderer from 'react-test-renderer';


it('should render', () => {
    const component = renderer.create(
        <TextInputLogo title='E-mail' logo='user-o'
            onChangeMethod={jest.fn()}
            validate={_validateEmail}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

it('focus should change styling', () => {
    const component = renderer.create(
        <TextInputLogo title='E-mail' logo='user-o'
            onChangeMethod={jest.fn()}
            validate={_validateEmail}
        />
    );
    component.getInstance().toggleFocus();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display an error message', () => {
    const component = renderer.create(
        <TextInputLogo title='E-mail' logo='user-o'
            onChangeMethod={jest.fn()}
            validate={_validateEmail}
        />
    )
    component.getInstance().setState({ error: true, errorMessage: 'An error message' });
    expect(component.toJSON()).toMatchSnapshot();
  });