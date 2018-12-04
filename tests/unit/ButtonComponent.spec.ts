import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ButtonComponent from '@/components/ButtonComponent';

describe('ButtonComponent', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(ButtonComponent, {
        propsData: { message: 'Oh my' },
    });
    expect(wrapper.text()).to.equals('Click!');
    expect(wrapper.props('message')).to.equals('Oh my');
  });
});
