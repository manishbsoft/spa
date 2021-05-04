import React from 'react';

import UsersList from '../UsersList';
import UserItem from '../UserItem';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockData = [{"places":["5e185829e2140523f07ceee7"],"_id":"5e183c5c3a40d54ea084b36e","name":"Neha","email":"neha@test.com","image":"uploads\\images\\18120bf1-a1a4-479c-9f10-2786e334575c.jpeg","__v":7,"id":"5e183c5c3a40d54ea084b36e"},{"places":["60897682bd7d13411407fff2"],"_id":"5e18452fdbca2c2df8dd4585","name":"Manya","email":"manya@gmail.com","image":"uploads\\images\\46051a85-329b-4a3d-9e58-f829d2d0f840.jpeg","__v":1,"id":"5e18452fdbca2c2df8dd4585"},{"places":["5eafe8911031d40f68b2ef40"],"_id":"5eafe7a81031d40f68b2ef3f","name":"Manish","email":"manishksmd@gmail.com","image":"uploads\\images\\bcf38b21-ed08-4a17-8447-b9b402a74178.jpeg","__v":1,"id":"5eafe7a81031d40f68b2ef3f"},{"places":["5eb15156c8b6603a00fd4a81","5eb15238c8b6603a00fd4a83","5eb152d4c8b6603a00fd4a84"],"_id":"5eb0095b1031d40f68b2ef42","name":"Sumit","email":"sumit@gmail.com","image":"uploads\\images\\6fefa5e5-8889-4727-8a4a-f5d449d6b60b.jpeg","__v":3,"id":"5eb0095b1031d40f68b2ef42"},{"places":[],"_id":"5fc73d616d6cfb6e2ac5d5c6","name":"Sunny","email":"sunny@test.com","image":"uploads\\images\\6fefa5e5-8889-4727-8a4a-f5d449d6b60b.jpeg","id":"5fc73d616d6cfb6e2ac5d5c6"},{"places":["608948ca0459953da4355cd0"],"_id":"608948950459953da4355ccf","name":"Chetan","email":"chetan@gmail.com","image":"uploads\\images\\74673f9e-fdad-462c-9cf4-c0695dea6375.jpeg","__v":1,"id":"608948950459953da4355ccf"}];

let wrapper;

describe("Users List Component", () => {
   
  wrapper = shallow(<UsersList items={mockData} />);

  it("should render Users Component", () => {    
    expect(wrapper).toMatchSnapshot();
  });

  it('component should render correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('search component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should displays useritems with no data", () => {
    wrapper = shallow(<UsersList items={[]} />);

    expect(wrapper.find(UserItem)).toHaveLength(0);
  });

  it("should displays useritems with data", () => {
    // console.log('wrapper--------', wrapper.debug());
    expect(wrapper.find(UserItem)).toHaveLength(mockData.length);
  });
});