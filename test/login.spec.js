import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';

import PageAccount from '../components/Auth/login.vue'


const localVue = createLocalVue()
localVue.use(Vuex)
describe('login', () => {
    let wrapper
    const mockFunction = jest.fn();
    describe('openLogin==true iken', () => {
        beforeEach(() => {
            wrapper = mount(PageAccount, {
                localVue,
                data() {
                    return {
                        email: 'juliet@test.com',
                        password: '199824'
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        login: mockFunction,
                    },
                }),
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                stubs: {
                    NuxtLink: RouterLinkStub
                },
            });
        });
        // eslint-disable-next-line require-await
        test('Gönder butonuna basılabilir ve basılınca login fonksiyonun çağrılması', async() => {
            const loginButton = wrapper.find(".submit");// submit clasına sahip butona tıklandığında mock fonk. çalıştı mı?
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        })
        test('Vue Örneği mi?', () => {
            const wrapper = mount(PageAccount)
            expect(wrapper.vm).toBeTruthy()
        })
    })
})