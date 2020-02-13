// Import the mount() method from the test utils
// and the component you want to test
import {mount, shallowMount} from '@vue/test-utils'
import ListComponent from "../../src/components/ListComponent";
import moxios from 'moxios'
import * as axios from "axios";


describe('ListComponent', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(ListComponent);
    beforeEach(function () {
        moxios.install(axios)
    });
    afterEach(function () {
        moxios.uninstall(axios)
    });


    it('renders the correct title on the page', () => {
        let wrapper = shallowMount(ListComponent);
        expect(wrapper.html()).toContain('Posts');

    });

    it('shows the todos fetched from the api', (done) => {
        moxios.stubRequest('localhost:8000/api/posts', {
            status: 500,
        });

        moxios.wait(() => {
            expect(wrapper.find('table').isVisible()).toBe(true);
            done()
        });
    });


    it('should contain default message', () => {

        const title = wrapper.find('h1');
        expect(title.text()).toContain('Posts');
    });

    it('has a table', () => {
        expect(wrapper.contains('table')).toBe(true)
    });


});
