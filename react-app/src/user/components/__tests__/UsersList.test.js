import React from 'react';

import UsersList from '../UsersList';
import UserItem from '../UserItem';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe("Users List Component", () => {
   

  it("should render Users Component", () => {  
    const wrapper = shallow(<UsersList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Users Component", () => {  
    const props = wrapper.props();
    const itemsLength = props.item && props.item.length;
    expect(wrapper.find(UserItem)).toEqual(itemsLength);
  });

});