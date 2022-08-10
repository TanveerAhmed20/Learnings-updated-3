import {shallow} from 'enzyme';
import MyForm from '.'; // current directory

describe('my form test',()=>{
    let wrapper ; 
    it('should match snapshot test',()=>{
        wrapper = shallow(<MyForm/>).html();
        expect(wrapper).toMatchSnapshot();

    });


});