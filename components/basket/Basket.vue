<template>
   <div
      data-fragment-name="Basket"
      data-fragment-id="2dfa235b-c00c-4ac5-b8c9-e74851d80a92"
      data-tracker-root="onTrackerLoaded"
      >
      <link
         type="text/css"
         rel="stylesheet"
         href="https://cdn.dsmcdn.com/web/production/basket.style.e58f985ad451eb7aa17c4a9a9a7b4e08.css"
         />
      <div id="basket-app-container">
         <div id="pb-container">
            <div class="pb-wrapper">
               <div class="pb-header-wrapper">
                  <div class="pb-header">Sepetim ({{ basket.length }} Ürün)</div>
               </div>
               <div class="pb-info-message">
                  <i class="far fa-user"></i>
                  <div>
                     <span>Alışverişini daha hızlı tamamlamak için</span
                        ><a
                        href="/giris?cb=https%3A%2F%2Fwww.trendyol.com%2Fsepet"
                        class="
                        ty-font-sm
                        ty-font-w-semi-bold
                        ty-link-button
                        ty-transition
                        ty-primary
                        ty-input-small
                        "
                        >Giriş Yap</a
                        >
                  </div>
               </div>
               <div class="pb-merchant-group">
                  <BasketItem  v-for="item in basket" :key="item.product.id" :basket-item="item"  />
               </div>
            </div>
            <aside class="sticky" style="left: -270px">
               <div class="pb-summary" style="width: 250px">
                  <div class="pb-summary-approve">
                     <a
                        class="ty-link-btn-primary"
                        href="/giris?isProceedPayment=true&amp;cb=%2Fsepetim%2Fodeme"
                        ><span>Sepeti Onayla</span><i class="i-arrow-right"></i
                        ></a>
                  </div>
                  <div class="pb-summary-box">
                     <h1>Sipariş Özeti</h1>
                     <ul class="pb-summary-box-prices">
                        <li>
                           <span>Ürünün Toplamı</span>
                           <strong>{{ totalAmount.toFixed(2) }} TL</strong>
                        </li>
                        <li>
                           <span>Kargo Toplam</span
                              ><strong>{{ shipmentCost.toFixed(2) }} TL</strong>
                        </li>
                        <li class="pb-summary-promotion">
                           <div title="50 TL ve Üzeri Kargo Bedava">
                              <span>50 TL ve Üzeri Kargo Bedava</span>
                           </div>
                           <strong class="discount">-{{ shipmentCost.toFixed(2) }}</strong>
                        </li>
                     </ul>
                     <hr />
                     <p class="pb-summary-total-price">{{ totalAmount.toFixed(2) }} TL</p>
                  </div>
                  <div class="pb-coupon">
                     <div>
                        <div class="add-coupon-toggle-container">
                           <i class="i-plus-bold"></i
                              ><span class="add-coupon-toggle-title">İNDİRİM KODU GİR</span>
                        </div>
                     </div>
                  </div>
                  <div class="pb-summary-approve">
                     <a
                        class="ty-link-btn-primary"
                        href="/giris?isProceedPayment=true&amp;cb=%2Fsepetim%2Fodeme"
                        ><span>Sepeti Onayla</span><i class="i-arrow-right"></i
                        ></a>
                  </div>
               </div>
            </aside>
         </div>
      </div>
   </div>
</template>
<script>
   import { mapGetters } from 'vuex'
   export default {
     data() {
       return {
          shipmentCost: 10.99
       }
     },
     computed: {
       ...mapGetters({
         basket: 'get_basket_items',
       }),
       totalAmount() {
         let total = 0;
         this.basket.map(item => {
            total += (item.product.cost * item.count);
            return item;
         })
         return total;
       }
     },
   }
</script>