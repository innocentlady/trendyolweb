
<script>
export default {
  data() {
    return {
      visible: false,
    }
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
  },
}
</script>

<template>
  <div
    class="account-nav-item basket-preview"
    @mouseover="visible = true"
    @mouseleave="visible = false"
  >
    <a class="link account-basket" href="/sepet/sepet"
      ><div class="icon-container">
        <i class="i-bagg initial-icon"></i
        ><i class="i-bagg-orange hover-icon"></i>
      </div>
      <p class="link-text">Sepetim</p>
      <div class="basket-item-count-container visible">1</div></a
    >
    <div class="basket-preview-container" :class="{ visible: visible }">
      <div>
        <div class="slideContainer">
          <div class="slideUpBox passive">
            <p>Sepetim (1 Ürün)</p>
            <i class="i-arrow-up"></i>
          </div>

          <ul class="basketProductList" data-product-count="1">
            <li>
              <a
                href="/elvinin-tarzi/almira-beyaz-p-117988925?boutiqueId=61&amp;merchantId=217945"
                ><img
                  alt="basket-preview-product-image"
                  src="https://cdn.dsmcdn.com/ty137/product/media/images/20210625/20/104505121/189980840/1/1_org_zoom.jpg"
                />
                <div class="product-info">
                  <p class="product">
                    <span class="brand" title="Elvinin Tarzı"
                      >Elvinin Tarzı</span
                    ><span title="Almira Beyaz">Almira Beyaz</span>
                  </p>
                  <p class="details">
                    <span class="size">Beden: 39</span
                    ><span class="quantity">Adet: 1</span>
                  </p>
                  <p class="price-info">
                    <span class="price">159,90 TL</span
                    ><span class="remaining-items">Son 2 Ürün</span>
                  </p>
                </div></a
              >
            </li>
          </ul>

          <div class="slideDownBox passive"><i class="i-arrow-down"></i></div>
        </div>
        <div class="productPriceBox">
          <a href="/sepet" class="goBasket">Sepete Git</a
          ><a href="javascript:void(0)" class="CompleteOrder"
            >Siparişi Tamamla</a
          >
        </div>
      </div>
    </div>
  </div>
</template>