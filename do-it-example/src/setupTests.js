import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });

beforeEach(() => {
    // console.log('beforeEach()');
    jest.spyOn(console, 'error').mockImplementation((e) => {
        throw new Error(e);
    });
});

afterEach(() => {
    // console.log('afterEach()');
    console.error.mockClear();
});