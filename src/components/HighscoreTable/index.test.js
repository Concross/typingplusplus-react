import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HighscoreTable from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('HighscoreTable component', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<HighscoreTable />);
        expect(wrapper.exists()).toBe(true);
    });
});
