import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';
describe("button tests",()=>{
    let wrapper;
    let props;
    let onClickMock;
    beforeEach(()=>{
        onClickMock = jest.fn();
        props = {
            label: 'My Test Button',
            onClick: onClickMock
        }
    });
    afterEach(()=> {
        jest.clearAllMocks();
    });
    it('should call mock function when clicked',()=>{
        wrapper = shallow(<Button {...props}/>);
        console.log(wrapper.html());
        expect(wrapper.find('.my-button').text()).toBe('My Test Button');
        wrapper.find('.my-button').simulate('click');
        expect(onClickMock).toHaveBeenCalled();
        expect(onClickMock).toBeCalledTimes(1);
    });
})