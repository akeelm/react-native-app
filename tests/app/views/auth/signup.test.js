import React from 'react';
import Signup from '../../../../app/views/auth/signup';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const rendered = renderer.create(<Signup />).toJSON();
    expect(rendered).toMatchSnapshot();
});