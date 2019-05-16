import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HighscoreRow from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('HighscoreRow component', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(
            <HighscoreRow record={{ name: 'Connor', score: 999 }} />
        );
        expect(wrapper.exists()).toBe(true);
    });
});
