
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
    <a class="link account-basket" href="/sepet"
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
                href="/missha/pirinc-ozlu-aydinlatici-ve-nemlendirici-yaprak-maske-1ad-airy-fit-sheet-mask-rice-p-31185740?boutiqueId=580743&amp;merchantId=294914"
                ><img
                  alt="basket-preview-product-image"
                  src="https://cdn.dsmcdn.com/ty104/product/media/images/20210416/16/80675519/56132683/1/1_org_zoom.jpeg"
                />
                <div class="product-info">
                  <p class="product">
                    <span class="brand" title="Missha">Missha</span
                    ><span
                      title="Pirinç Özlü Aydınlatıcı ve Nemlendirici Yaprak Maske (1ad) Airy Fit Sheet Mask Rice"
                      >Pirinç Özlü Aydınlatıcı ve Nemlendirici Yaprak Maske
                      (1ad) Airy Fit Sheet Mask Rice</span
                    >
                  </p>
                  <p class="details">
                    <span class="size">Beden: Tek Ebat</span
                    ><span class="quantity">Adet: 1</span>
                  </p>
                  <p class="price-info"><span class="price">18,90 TL</span></p>
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