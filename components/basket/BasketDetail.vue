
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    ...mapGetters({
        basket: 'get_basket_items',
    })
  },

  methods: {
    openDropDropdown(event) {
      const target = event.target.children[1]
      target.classList.add('visible')
    },
    closeDropDropdown(event) {
      const target = event.target.children[1]
      target.classList.remove('visible')
    },
    getTotal() {
      let total = 0;
      this.basket.map(item => {
        total += item.count
        return item;
      });

      return total;
    }
  },
}
</script>

<template>
  <div
    class="account-nav-item basket-preview"
    @mouseover="visible = true"
    @mouseleave="visible = false"
  >
    <NuxtLink class="link account-basket" to="/sepet">
      <div class="icon-container">
        <i class="i-bagg initial-icon"></i
        ><i class="i-bagg-orange hover-icon"></i>
      </div>
      <p class="link-text">Sepetim</p>
      <div class="basket-item-count-container visible">{{ getTotal() }}</div>
    </NuxtLink>
    <div class="basket-preview-container" :class="{ visible: visible }">
      <div>
        <div class="slideContainer">
          <div class="slideUpBox passive">
            <p>Sepetim ({{ getTotal() }} Ürün)</p>
            <i class="i-arrow-up"></i>
          </div>

          <ul class="basketProductList">
            <li v-for="item in basket" :key="item.product.id">
              <NuxtLink
                :to="'/' + item.product.id"
                ><img
                  alt="basket-preview-product-image"
                  :src="item.product.imgurl"
                />
                <div class="product-info">
                  <p class="product">
                    <span class="brand" title="Elvinin Tarzı">{{ item.product.title }}</span>
                  </p>
                  <p class="details">
                    <span class="size">Beden: 39</span
                    ><span class="quantity">Adet: {{ item.count }}</span>
                  </p>
                  <p class="price-info">
                    <span class="price">{{ item.product.cost * item.count }} TL</span
                    ><span class="remaining-items">Son 20 Ürün</span>
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>

          <div class="slideDownBox passive"><i class="i-arrow-down"></i></div>
        </div>
        <div class="productPriceBox">
          <NuxtLink to="/sepet" class="goBasket">Sepete Git</NuxtLink>
          <a href="javascript:void(0)" class="CompleteOrder"
            >Siparişi Tamamla</a
          >
        </div>
      </div>
    </div>
  </div>
</template>