import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../Components/Test/03/Input';
import Text from '../../Components/Test/04/Text';

/*
describe('<Input>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Input name="name" />);
        }).not.toThrow();
    });
    it('has one element', () => {
        const wrapper = shallow(<Input name="name"/>);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    });
    it('contains <input>', () => {
        const wrapper = shallow(<Input name="name"/>);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('label')).toHaveLength(1);
    });

    it('assigns the prop value and type', () => {
        const expectedValue = '123';
        const wrapper = shallow(<Input name="testName" value={expectedValue}></Input>);
        expect(wrapper.find('input').prop('value')).toBe(expectedValue);
        const { type, value} = wrapper.find('input').props();
        expect(value).toBe(expectedValue);
        expect(type).toBe('text');

    });
    
    it("constains error message", () => {
        const wrapper = shallow(<Input name="test_name" />);
        expect(wrapper.find('.error')).toHaveLength(0);
        const expectedErrorMessage = "옳지 못한 값이 입력되었습니다.";
        wrapper.setProps({errorMessage: expectedErrorMessage});
        expect(wrapper.find('span').prop('className')).toBe('error');
        expect(wrapper.find('.error')).toHaveLength(1);
        expect(wrapper.html()).toContain(expectedErrorMessage);
    });

    it('calls back onChange on input change', () => {
        const changeStub = jest.fn();
        const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
        expect(changeStub).not.toHaveBeenCalled();
        const expectedTargetValue = 'updated input';
        wrapper.find('input').simulate('change', {target: { value: expectedTargetValue}});
        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);

    });
});
*/

describe('<Text />', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Text>테스트</Text>);
        }).not.toThrow();
    });
    it('contains <span>', () => {
        expect(shallow(<Text>테스트</Text>).find('span')).toHaveLength(1);
    });
});
