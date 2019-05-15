import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GamePrompt from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('GamePrompt component', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<GamePrompt />);
        expect(wrapper.exists()).toBe(true);
    });
});
