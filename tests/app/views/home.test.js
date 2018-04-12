import React from 'react';
import Home from '../../../app/views/home';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toMatchSnapshot();
});