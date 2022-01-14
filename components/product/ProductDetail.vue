<template>
  <div v-if="product">
    <div
      data-fragment-name="ProductDetail"
    >
      <link
        rel="stylesheet"
        href="https://cdn.dsmcdn.com//web/production/productDetailV3.7ab849ec.css"
      />
      <main id="product-detail-app">
        <div class="product-detail-container" data-tracker-root="true">
          <div class="sticky-header">
            <div
              class="sticky-product-desc-wrapper"
              data-tracker="seen:Seen"
              data-event-action="Sticky_Header"
              data-event-category="Product Detail"
            >
              <div class="sticky-product-info">
                <img
                  loading="lazy"
                  class="sticky-product-desc-img"
                  :src="product.imgurl"
                  alt="Mosena Mat Deri Bilekten Bağlama Detaylı Yüksek Topuklu Ayakkabı Beyaz"
                />
                <div class="sticky-product-desc">
                  <span class="sticky-product-name"
                    >{I Love Shoes Mosena Mat Deri Bilekten Bağlama Detaylı
                    Yüksek Topuklu Ayakkabı Beyaz}</span
                  >
                  <div class="pr-bx-w">
                    <div class="pr-bx-dsc">
                      <div class="pr-bx-nm-dsc">
                        <div class="pr-bx-nm with-org-prc">
                          <span class="prc-org">231,98 TL</span
                          ><span class="prc-slg prc-slg-w-dsc">159,49 TL</span>
                        </div>
                      </div>
                      <div class="seperator"></div>
                      <div class="pr-bx-pr-dsc">
                        <div class="pr-bx-pr-dsc">Sepette %45 İndirim</div>
                        <div style="display: flex">
                          <span class="prc-dsc">87,72 TL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sticky-product-buttons">
                <div class="hl-cn">
                  <div class="hl-ol"></div>
                  <div class="hl-cl">
                    <div class="size-variant-wrapper">
                      <div class="size-variant-title-wrapper">
                        <span class="size-variant-title">Beden</span>
                      </div>
                      <div class="pr-in-sz-pk">
                        <span
                          ><span>35</span
                          ><span class="stck-msg">(Son 2 ürün)</span></span
                        ><span class="caret"></span>
                      </div>
                      <div class="pr-in-drp">
                        <ul class="pr-in-drp-u">
                          <li class="vrn-item sw">
                            <span>35</span
                            ><span class="stck-msg">(Son 2 ürün)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="add-to-basket" @click.prevent="addToBasket">
                  <div class="add-to-basket-button-text">Sepete Ekle</div>
                  <div class="add-to-basket-button-text-success">
                    Sepete Eklendi
                  </div>
                  <div class="add-to-bs-ldr"></div>
                </button>
                <div class="favorite-button">
                  <div class="review-tooltip">
                    <div class="tooltip-indicator">
                      <button class="fv"><i class="i-heart"></i></button>
                    </div>
                    <div class="top-padding"></div>
                    <div class="review-tooltip-content">
                      <div>Favorilere Ekle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-container">
            <div class="product-container">
              <div>
                <div class="gallery-container" tabindex="0">
                  <div class="product-image-container">
                    <i class="i-arrow-right right"></i
                    ><i class="i-arrow-right left"></i>
                    <div class="base-product-image">
                      <div style="position: relative">
                        <img
                          :srcset="product.imgurl"
                          style="width: 100%; height: 100%"
                        />
                        <div
                          class="js-image-zoom__zoomed-area"
                          style="
                            background: white;
                            opacity: 0.4;
                            position: absolute;
                            width: 166.667px;
                            height: 200px;
                            top: 194.2px;
                            left: 107.867px;
                            display: none;
                          "
                        ></div>
                      
                      </div>
                    </div>
                  </div>
                  <div class="product-slide-container">
                    <div class="styles-module_sliderBase__swkx1 undefined">
                     
                    </div>
                  </div>
                  <div class="gallery-modal hidden">
                   
                  </div>
                  <div class="gallery-stamp-container">
                    <div class="cargo-free">KARGO BEDAVA</div>
                  </div>
                </div>
              </div>
              <div class="container-right-content">
                <div class="pr-in-w">
                  <div>
                    <div class="pr-in-cn">
                      <div>
                        <h1 class="pr-new-br">
                         {{product.name}}
                        </h1>
                        <span class="pr-in-ro"
                          ><i class="i-rush-clock"></i
                          ><span>Tükeniyor</span></span
                        >
                      </div>
                      <div class="merchant-box-wrapper">
                        <span class="supplier-text">Satıcı : </span
                        ><a
                          href="/magaza/i-love-shoes-m-123739"
                          class="merchant-text"
                          >{{product.title}}</a
                        >

                      </div>
                      <div class="pr-in-ratings">
                        <div class="pr-in-rnr">
                          <div class="review-tooltip">
                            <div class="tooltip-indicator">
                              <div class="rating-line-wrapper">
                                <div class="rt-st-avg">
                                  <div class="ratings readonly">
                                    <div class="star-w">
                                      <div class="empty">
                                        <div class="star"></div>
                                      </div>
                                      <div
                                        class="full"
                                        style="width: 100%; max-width: 100%"
                                      >
                                        <div class="star"></div>
                                      </div>
                                    </div>
                                    <div class="star-w">
                                      <div class="empty">
                                        <div class="star"></div>
                                      </div>
                                      <div
                                        class="full"
                                        style="width: 100%; max-width: 100%"
                                      >
                                        <div class="star"></div>
                                      </div>
                                    </div>
                                    <div class="star-w">
                                      <div class="empty">
                                        <div class="star"></div>
                                      </div>
                                      <div
                                        class="full"
                                        style="width: 100%; max-width: 100%"
                                      >
                                        <div class="star"></div>
                                      </div>
                                    </div>
                                    <div class="star-w">
                                      <div class="empty">
                                        <div class="star"></div>
                                      </div>
                                      <div
                                        class="full"
                                        style="width: 77%; max-width: 100%"
                                      >
                                        <div class="star"></div>
                                      </div>
                                    </div>
                                    <div class="star-w">
                                      <div class="empty">
                                        <div class="star"></div>
                                      </div>
                                      <div
                                        class="full"
                                        style="width: 0px; max-width: 100%"
                                      >
                                        <div class="star"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="top-padding"></div>
                            <div class="review-tooltip-content">
                              <div>
                                <span class="avg-rt-txt-tltp"
                                  ><span class="tltp-avg-cnt">3.8 </span
                                  >Ortalama Puan</span
                                >
                                <div class="pr-rnr-rat-s">
                                  <div class="pr-rnr-st-ln">
                                    <div class="pr-rnr-st-v">5</div>
                                    <div class="ratings readonly">
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pr-rnr-prg">
                                      <div
                                        class="pr-rnr-prg-y star-5"
                                        style="width: 48.0392%"
                                      ></div>
                                    </div>
                                    <div class="pr-rnr-st-c">49</div>
                                  </div>
                                  <div class="pr-rnr-st-ln">
                                    <div class="pr-rnr-st-v">4</div>
                                    <div class="ratings readonly">
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pr-rnr-prg">
                                      <div
                                        class="pr-rnr-prg-y star-4"
                                        style="width: 17.6471%"
                                      ></div>
                                    </div>
                                    <div class="pr-rnr-st-c">18</div>
                                  </div>
                                  <div class="pr-rnr-st-ln">
                                    <div class="pr-rnr-st-v">3</div>
                                    <div class="ratings readonly">
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pr-rnr-prg">
                                      <div
                                        class="pr-rnr-prg-y star-3"
                                        style="width: 13.7255%"
                                      ></div>
                                    </div>
                                    <div class="pr-rnr-st-c">14</div>
                                  </div>
                                  <div class="pr-rnr-st-ln">
                                    <div class="pr-rnr-st-v">2</div>
                                    <div class="ratings readonly">
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pr-rnr-prg">
                                      <div
                                        class="pr-rnr-prg-y star-2"
                                        style="width: 4.90196%"
                                      ></div>
                                    </div>
                                    <div class="pr-rnr-st-c">5</div>
                                  </div>
                                  <div class="pr-rnr-st-ln">
                                    <div class="pr-rnr-st-v">1</div>
                                    <div class="ratings readonly">
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 100%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0%; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                      <div class="star-w">
                                        <div class="empty">
                                          <div class="star"></div>
                                        </div>
                                        <div
                                          class="full"
                                          style="width: 0px; max-width: 100%"
                                        >
                                          <div class="star"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pr-rnr-prg">
                                      <div
                                        class="pr-rnr-prg-y star-1"
                                        style="width: 15.6863%"
                                      ></div>
                                    </div>
                                    <div class="pr-rnr-st-c">16</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/i-love-shoes/mosena-mat-deri-bilekten-baglama-detayli-yuksek-topuklu-ayakkabi-beyaz-p-102313090/yorumlar?boutiqueId=61&amp;merchantId=123739&amp;v=35"
                            class="rvw-cnt-tx"
                            >102 Değerlendirme</a
                          >
                          <div class="seperator"></div>
                          <a
                            class="product-questions"
                            href="/i-love-shoes/mosena-mat-deri-bilekten-baglama-detayli-yuksek-topuklu-ayakkabi-beyaz-p-102313090/saticiya-sor?merchantId=123739"
                            >67 Soru &amp; Cevap</a
                          >
                        </div>
                      </div>
                      <div class="product-price-container">
                        <div class="pr-bx-w">
                          <div class="pr-bx-dsc">
                            
                            <div class="seperator"></div>
                            <div class="pr-bx-pr-dsc">
                              <div class="pr-bx-pr-dsc">
                                Sepette %45 İndirim
                              </div>
                              <div style="display: flex">
                                <span class="prc-dsc">{{product.cost}} {{product.currency}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slicing-attributes"></div>
                <div class="size-variant-wrapper">
                  <div class="size-variant-title-wrapper">
                    <span class="size-variant-title"
                      >Beden:
                      <span class="size-variant-attr-value">35</span>
                      &nbsp;<span class="size-variant-stock-warning"
                        >(Son 2 ürün!)</span
                      ></span
                    >
                  </div>
                  <div class="variants">
                    <div
                      class="selected sp-itm"
                      title="Beden seçmek için tıklayınız"
                    >
                      35
                    </div>
                    <div class="so sp-itm" title="Beden seçmek için tıklayınız">
                      36<span class="i-alarm"></span>
                    </div>
                    <div class="so sp-itm" title="Beden seçmek için tıklayınız">
                      37<span class="i-alarm"></span>
                    </div>
                    <div class="so sp-itm" title="Beden seçmek için tıklayınız">
                      38<span class="i-alarm"></span>
                    </div>
                    <div class="so sp-itm" title="Beden seçmek için tıklayınız">
                      39<span class="i-alarm"></span>
                    </div>
                    <div class="so sp-itm" title="Beden seçmek için tıklayınız">
                      40<span class="i-alarm"></span>
                    </div>
                  </div>
                </div>
                <div class="vas-product"></div>
                <div class="product-button-container">
                  <button class="add-to-basket"  @click.prevent="addToBasket">
                    <div class="add-to-basket-button-text">Sepete Ekle</div>
                    <div class="add-to-basket-button-text-success">
                      Sepete Eklendi
                    </div>
                    <div class="add-to-bs-ldr"></div>
                  </button>
                  <div class="favorite-button">
                    <div class="review-tooltip">
                      <div class="tooltip-indicator">
                        <button class="fv"><i class="far fa-heart"></i></button>
                      </div>
                      <div class="top-padding"></div>
                      <div class="review-tooltip-content">
                        <div>Favorilere Ekle</div>
                      </div>
                    </div>
                  </div>
                </div>
                <aside class="delivery-favorite-info">
                  <div class="delivery-and-favorite-wrapper">
                    <div class="pr-dd">
                      <div class="pr-dd-rs-w">
                        <span class="pr-dd-nr-text"
                          >Tahmini Kargoya Teslim: </span
                        ><span class="dd-txt-vl">3 gün içinde</span>
                      </div>
                    </div>
                    <div class="fv-dt"><i class="i-heart"></i>17185 favori</div>
                  </div>
                </aside>
                <div class="featured-information">
                  <div class="featured-information-header">
                    Öne Çıkan Bilgiler
                  </div>
                  <div class="content-descriptions">
                    <ul id="content-descriptions-list">
                      <li class="return-info">
                        15 gün içinde ücretsiz iade. Detaylı bilgi için
                        <a
                          class="product-description-link"
                          href="javascript:void(0)"
                          >tıklayın</a
                        >.
                      </li>
                      <li>
                        <div class="productDetailSupplierPopup">
                          <div class="popupBuffer"></div>
                          <div class="popupContent">
                            <div class="popup-top">
                              <div class="popup-logo">
                                <i class="icon icon-trendyol-marketplace"></i>
                              </div>
                              <div class="popup-info">
                                <div class="ttl">TRENDYOL PAZARYERİ</div>
                                <div class="description">
                                  Tüm satıcılarımız Trendyol hizmet
                                  standartlarını garanti eder.
                                </div>
                                <div class="attributes">
                                  <div>
                                    <i class="pdp-icon-reloaded"></i>Ücretsiz
                                    İade
                                  </div>
                                  <div>
                                    <i class="pdp-icon-cargo"></i> Hızlı
                                    Teslimat
                                  </div>
                                  <div>
                                    <i class="pdp-icon-phone"></i
                                    ><span class="customer-support-text"
                                      >Trendyol <br />Müşteri Desteği</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="supplier-info">
                              <span>Satıcı:<b> I Love Shoes </b></span
                              ><span
                                >Satıcı Ünvanı:<b>
                                  MBC GLOBAL E TİCARET AYAKKABI TEKSTİL SANAYİ
                                  VE TİCARET LİMİTED ŞİRKETİ
                                </b></span
                              ><span
                                >İletişim:<b>
                                  Satıcının Trendyol tarafından teyit edilmiş
                                  e-posta ve iletişim adresi kayıt altındadır.
                                </b></span
                              ><span
                                ><span id="cityInfo"
                                  >Şehir:<b> İzmir </b></span
                                ></span
                              ><span
                                ><span
                                  >Vergi Kimlik Numarası:<b>
                                    6131223309
                                  </b></span
                                ></span
                              >
                            </div>
                          </div>
                        </div>
                        Bu ürün
                        <span class="product-description-market-place"
                          >{{product.title}}</span
                        >
                        tarafından gönderilecektir.
                      </li>
                      <li>
                        Topuk Türü : Kalın Topuk Topuk Yüksekliği :10 CM Taban
                        :0,5 CM Materyal : Mat Deri Kalıp :Standart KalıpMosena
                        Mat Deri Bilekten Bağlama Detaylı Yüksek Topuklu
                        Ayakkabı
                      </li>
                      <li>
                        Bu üründen en fazla 50 adet sipariş verilebilir. 50
                        adetin üzerindeki siparişleri Trendyol iptal etme
                        hakkını saklı tutar.
                      </li>
                      <li>
                        Kampanya fiyatından satılmak üzere 5 adetten az stok
                        bulunmaktadır.
                      </li>
                      <li>
                        İncelemiş olduğunuz ürünün satış fiyatını satıcı
                        belirlemektedir.
                      </li>
                    </ul>
                    <div class="all-features">
                      <div class="opacity-layout"></div>
                      <a rel="nofollow" class="button-all-features"
                        >ÜRÜNÜN TÜM ÖZELLİKLERİ</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="pr-rcs-w productDetail-Similar">
            <div class="pr-rcs-tl title"></div>
            <div class="pr-rcs-pds">
              <div
                tabindex="0"
                class="styles-module_carousel-base__3keqD crs-pr-crl"
              >
                <div class="styles-module_item-provider__YgMwz">
                  <div
                    class="styles-module_item-tracker__3bypy"
                    style="
                      transform: translateX(-1121.5px);
                      transition: transform 0s ease 0s;
                      width: 2915.89px;
                    "
                  >
                    <div
                      class="styles-module_item-container__a8zaY"
                      style="width: 224.299px; pointer-events: all"
                    >
                      
                    </div>
                    <div
                      class="styles-module_item-container__a8zaY"
                      style="width: 224.299px; pointer-events: all"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {

  data() {
    return {
      prd_code: this.$route.params.shoes,
      product: null
    }
  },
    computed: {
    ...mapGetters({
      get_productwithcode: "get_productwithcode",
    }),
  },
  created() {
    this.product = this.$store.getters.get_productwithcode(this.$route.params.shoes);
  },


  methods: {
    addToBasket() {
      this.$store.dispatch('add_basket_item', this.product)
    }
  }
}
</script>
