import { mount,createLocalVue,RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import Categories from "../components/pageHeader/PageHeader.vue";
import { getters,state } from "../store";
describe("Kategori isimlerinin gözüküyor mu?", () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({getters, state});
    const wrapper = mount(Categories, {
        stubs: {
            NuxtLink: RouterLinkStub
        } ,
        store,
        localVue,
    });
    it("'Kadın'", () => {
        expect(wrapper.text()).toContain("Kadın");
    });
    test("'Erkek'", () => {
        expect(wrapper.text()).toContain("Erkek");
    });
    it("'Çocuk'", () => {
        expect(wrapper.text()).toContain("Çocuk");
    });

    test('Vue Örneği mi?', () => {
        const wrapper = mount(Categories)
        expect(wrapper.vm).toBeTruthy()
    })
});