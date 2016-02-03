import { React } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { IndexContainer } from '../src/containers';

describe('hello world', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<IndexContainer/>);
    expect(wrapper.type()).to.eql('div');
  });
});
