import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import Basket from "../components/basket/Basket.vue";

import { getters } from "../store";

describe("Sepetimdeki ürünlerin listelenmesi", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
        state: {
            cartProducts: [
                {
                    "product": {
                      
                    "imgurl": "https://cdn.dsmcdn.com//ty260/product/media/images/20211201/9/2466540/233157725/1/1_org.jpg",
                    "cost": 99.83,
                    "currency": "TL",
                    "id": 135996749,
                    "title":"Moda Frato",
                    "name": "Motif Rp-suettt Erkek Ev Terliği Kışlık Terlik"
                    },
                    "count": 1,
                    "cid": 1
                },
                {
                    "product": {
                        "imgurl": "https://cdn.dsmcdn.com//ty256/product/media/images/20211127/12/112599815/278754270/1/1_org.jpg",
                    "cost": 749.90,
                    "currency": "TL",
                    "id": 170576420,
                    "title":"Freemax",
                    "name": "Su Geçirmez Kürklü Kışlık Fermuarlı Bot Kauçuk Taban Sağlam Outdoor Garantili Ürün Siyah"
                    },
                    "count": 1,
                    "cid": 2
                },
                {
                    "product": {
                        "imgurl": "https://cdn.dsmcdn.com//ty253/product/media/images/20211124/10/1254281/134613365/1/1_org.jpg",
                    "cost":399.90,
                    "currency": "TL",
                    "id": 79358878,
                    "title":"Nstil",
                    "name": "Unisex Kar Botu Siyah Kaymaz Taban Kürklü"
                    },
                    "count": 1,
                    "cid": 3
                }
            ],
           
        },
        getters
    },

    )
    const wrapper = mount(Basket, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue,
    })
    describe("Gözükecekler", () => {
        it("deneme test", () => {
            expect(2 + 2).toBe(4);
        });
        it("Sepetim text", () => {
            expect(wrapper.text()).toContain("Sepetim");
        });
        it("Ürün 1'in title : Moda Frato:", () => {
            expect(wrapper.text()).toContain("Moda Frato");
        });

        it("Ürün 2'nin cost'u : 749.9", () => {
            expect(wrapper.text()).toContain("749.9");
        });
        it("Ürün 3'ün fullname :Unisex Kar Botu Siyah Kaymaz Taban Kürklü", () => {
            expect(wrapper.text()).toContain("Unisex Kar Botu Siyah Kaymaz Taban Kürklü");
        });
    });
})