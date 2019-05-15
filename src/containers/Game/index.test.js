import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Game component', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.exists()).toBe(true);
    });
});
