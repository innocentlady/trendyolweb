import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import Vuex from "vuex"
import ProductList from "../components/shoesproducts"

import { getters } from "../store";

describe("Verilen ürünlerin listelenmesi", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            "products": [
                {
                    "imgurl": "https://cdn.dsmcdn.com//ty260/product/media/images/20211201/9/2466540/233157725/1/1_org.jpg",
                    "cost": 99.83,
                    "currency": "TL",
                    "id": 135996749,
                    "title":"Moda Frato",
                    "name": "Motif Rp-suettt Erkek Ev Terliği Kışlık Terlik"
                },
                {
                    "imgurl": "https://cdn.dsmcdn.com//ty256/product/media/images/20211127/12/112599815/278754270/1/1_org.jpg",
                    "cost": 749.90,
                    "currency": "TL",
                    "id": 170576420,
                    "title":"Freemax",
                    "name": "Su Geçirmez Kürklü Kışlık Fermuarlı Bot Kauçuk Taban Sağlam Outdoor Garantili Ürün Siyah"
                },
                {
                    "imgurl": "https://cdn.dsmcdn.com//ty253/product/media/images/20211124/10/1254281/134613365/1/1_org.jpg",
                    "cost":399.90,
                    "currency": "TL",
                    "id": 79358878,
                    "title":"Nstil",
                    "name": "Unisex Kar Botu Siyah Kaymaz Taban Kürklü"
                },
                {
                    "imgurl": "https://cdn.dsmcdn.com//ty225/product/media/images/20211105/19/166362147/100125639/1/1_org.jpg",
                    "cost": 443.93,
                    "currency": "TL",
                    "id": 56428947,
                    "title":"Marjin",
                    "name": "Kadın Kalın Tırtıklı Taban Lastikli Günlük Postal Bot Eslona Siyah"
                },
            ]
        },
        getters
    })
    const wrapper = mount(ProductList, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue
    })
    describe("Liste Kontrolü", () => {

        it("Ürün 1'in title : Moda Frato :", () => {
            expect(wrapper.text()).toContain("Moda Frato");
        });

        it("Ürün 3'nin fullname'si :Unisex Kar Botu Siyah Kaymaz Taban Kürklü", () => {
            expect(wrapper.text()).toContain("Unisex Kar Botu Siyah Kaymaz Taban Kürklü");
        });
        it("Ürün 3'ün cost : 399.9", () => {
            expect(wrapper.text()).toContain("399.9");
        });
    });
  
})