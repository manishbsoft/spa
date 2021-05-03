import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

configure({adapter: new Adapter()});


describe('Test <NavLinks /> Component', () => {
  let wrapper;
 
  beforeEach(() => {
      wrapper = shallow(<NavLinks />);
  });

  it('should render two <NavLink /> elements if not authenticated', () => {
      expect(wrapper.find(NavLink)).toHaveLength(2);
  });

  it('should render three <NavLink /> elements if authenticated', () => {
      wrapper.setProps({isAuthenticated: true});
      expect(wrapper.find(NavLink)).toHaveLength(2);
  });

  it('should render logout', () => {
    wrapper.setProps({isAuthenticated: true});
    console.log(wrapper.debug());
    // expect(wrapper.find('button').debug().text()).toEqual('LOGOUT');
  });
});