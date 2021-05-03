import React from 'react';
import Users from '../Users';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe("Users Component", () => {
  
  const wrapper = shallow(<Users />);

  it("should render Users Component", () => {  
    expect(wrapper).toMatchSnapshot();
  });
});