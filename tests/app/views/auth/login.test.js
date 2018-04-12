import React from 'react';
import { Login } from '../../../../app/views/auth/login';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const rendered = renderer.create(<Login />).toJSON();
    expect(rendered).toMatchSnapshot();
});