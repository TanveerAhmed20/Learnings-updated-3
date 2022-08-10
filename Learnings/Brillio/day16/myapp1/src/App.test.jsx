import React from "react";
import { shallow } from "enzyme";
import App from './App';
//test suit
describe('App.jsx tests', () =>{
    let wrapper;
    //test case
 it('should display Welcome message inside .my-h1', ()=>{
    wrapper = shallow(<App/>);
    expect(wrapper.find('.my-h1').text().startsWith("Welcome")).toBe(true);
 })
    it('should display Hello inside my-text',()=>{
        wrapper = shallow(<App />);
        console.log(wrapper.html());
        expect(wrapper.find('#my-text').text()).toBe('Hello');
    })
})