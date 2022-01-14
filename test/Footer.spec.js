import { mount, RouterLinkStub } from "@vue/test-utils";
import Footer from '../components/account/AccountDetail.vue';

describe('fotter test', () => {
  const wrapper = mount(Footer, {
    stubs: {
        NuxtLink: RouterLinkStub
    }
});
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  });
  test("İletişim vaymı?",() => {
    expect(wrapper.text()).toContain("İletişim");
  });
  test("Tyendyol vaymı?",() => {
    expect(wrapper.text()).toContain("Trendyol");
  });
  test("gevünli alıyşveyiş vaymı?",() => {
    expect(wrapper.text()).toContain("Güvenli Alışveriş");
  });
  test("kayiyer vaymı?",() => {
    expect(wrapper.text()).toContain("Kariyer");
  });
})
