
<script>
export default {
  methods: {
    dropDropdown(event) {
      const target=event.target
     target.classList.add('visible')
    },
    dropDropdown2(event){
        const target=event.target
        target.classList.remove('visible')
    },
  },
}
</script>

<template>

  <div class="basket-preview-container">

    <div>
     
      <div class="slideContainer">
        <div class="slideUpBox passive">
          <p>Sepetim (1 Ürün)</p>
          <i class="i-arrow-up"></i>
        </div>
        <ul class="basketProductList" data-product-count="1">
          <li>
            <a
              href="/i-love-shoes/nijela-mat-deri-parmak-arasi-bilekten-baglama-detayli-yuksek-topuklu-ayakkabi-beyaz-p-97478280?boutiqueId=61&amp;merchantId=123739"
              ><img
                alt="basket-preview-product-image"
                src="https://cdn.dsmcdn.com/ty198/product/media/images/20211015/16/148994681/162296200/1/1_org_zoom.jpg"
              />
              <div class="product-info">
                <p class="product">
                  <span class="brand" title="I Love Shoes">I Love Shoes</span
                  ><span
                    title="Nijela Mat Deri Parmak Arası Bilekten Bağlama Detaylı Yüksek Topuklu Ayakkabı Beyaz"
                    >Nijela Mat Deri Parmak Arası Bilekten Bağlama Detaylı
                    Yüksek Topuklu Ayakkabı Beyaz</span
                  >
                </p>
                <p class="details">
                  <span class="size">Beden: 40</span
                  ><span class="quantity">Adet: 1</span>
                </p>
                <p class="price-info">
                  <span class="price">95,69 TL</span
                  ><span class="remaining-items">Tükendi</span>
                </p>
              </div></a
            >
          </li>
        </ul>
        <div class="slideDownBox passive"><i class="i-arrow-down"></i></div>
      </div>
      <div class="productPriceBox">
        <a href="/sepet" class="goBasket">Sepete Git</a
        ><a href="javascript:void(0)" class="CompleteOrder">Siparişi Tamamla</a>
      </div>
    </div>
  </div>
</template>