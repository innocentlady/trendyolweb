import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

import { ref, onValue, set } from "firebase/database";
import { realDb, auth } from '../plugins/firebase.js';
import BasketItem from "../models/BasketItem"


export const state = () => ({
  products: [],
  basket: []
})
export const getters = {
  get_products: (state) => () => {
    return state.products
  },
  get_basket_items: (state) => {
    return state.basket;
  },
  get_basket_item: (state, id) => {
    return state.basket.find(item => item.product_id === parseInt(id));
  },
  get_productwithcode: (state) => (id) => {
    return state.products.find(item => item.id === parseInt(id))
  }
}
export const actions = {
  fetchproducts({ commit, dispatch }) {
    const starCountRef = ref(realDb, 'products'); // referans verildi.
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      commit('setproducts', data)
    }, (error) => {
      alert(error.message)
    })
  },
  register({ commit }, payload) {  
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        alert("Hesap" + payload.email + "başarılı bir şekilde oluşturuldu!")
        const newUser = userCredential.user
        alert("oluşturulan kullanıcı idsi: " + newUser.uid)
        const userref = ref(realDb, "users/" + newUser.uid)
        const userData = {
          id: newUser.uid,
          inCart: null
        }
        alert("Kullanıcı verisi Realtime'a kaydedildi")
        set(userref, userData);
        location.reload();
      })
      .catch((error) => {
        alert(error.message)
      });
  },
  logout({ commit }) {
    signOut(auth)
      .then(() => {
        location.reload();
      })
  },
  login({ commit }, payload) {
    alert("login çalıştı.")
    alert(payload.email)
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(
        user => {
          alert(payload.email + " ile giriş yaptınız");
          location.reload();
        },
      ).catch((error) => {
        alert(error.message)
      });

  },

  add_basket_item({ commit }, product) {
    commit('addBasketItem', product);
  },
  remove_basket_item({ commit }, id) {
    commit('removeBasketItem', id);
  },
  decrease_basket_item({ commit }, id) {
    commit('decreaseBasketItem', id);
  },
  increase_basket_item({ commit }, id) {
    commit('increaseBasketItem', id);
  }
}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },
  addBasketItem(state, product) {
    const item = state.basket.find(item => item.product.id === product.id);
    if (item) {
      state.basket.map(item => {
        if (item.product.id === product.id) {
          item.count++;
        }
        return item;
      });
    } else {
      const item = new BasketItem(product, 1);
      state.basket.push(item);
    }
  },
  removeBasketItem(state, id) {
    const item = state.basket.find(item => item.product.id === id);
    if (item) {
      const i = state.basket.indexOf(item);
      state.basket.splice(i, 1)
    }
  },
  decreaseBasketItem(state, id) {
    const item = state.basket.find(item => item.product.id === id);
    if (item) {
      if (item.count <= 1) {
        const i = state.basket.indexOf(item);
        state.basket.splice(i, 1);
      } else {
        state.basket.map(item => {
          if (item.product.id === id) {
            item.count--;
          }
          return true;
        });
      }
    }
  },
  increaseBasketItem(state, id) {
    const item = state.basket.find(item => item.product.id === id);
    if (item) {
      state.basket.map(item => {
        if (item.product.id === id) {
          item.count++;
        }
        return true;
      });
    }
  }
}