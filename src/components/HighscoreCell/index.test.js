import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HighscoreCell from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('HighscoreCell component', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<HighscoreCell />);
        expect(wrapper.exists()).toBe(true);
    });
});
