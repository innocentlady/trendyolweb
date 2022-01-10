<script>
import BasketDetail from '../basket/BasketDetail.vue'
export default {
  components: { BasketDetail },
  methods: {
    toggleDropdown(open) {
      console.log(event)
      if (open === false) {
        const element = event.target.children[1]
        element.classList.remove('enable')
      } else {
        const element = event.target.parentElement.children[1]
        element.classList.add('enable')
      }
    },
  },
}
</script>
<template>
  <div id="header">
    <div
      class="head-custom-banner homePageTopBanner"
      data-banner-name="topbanner_supermart"
      align="center"
    >
      <a href="/butik/liste/101297/buyuk--ekim">
        <div
          style="
            background: linear-gradient(
              to right,
              rgb(66, 175, 47) 30%,
              rgb(66, 175, 48) 70%
            ) !important;
            width: 100% !important;
            display: block !important;
            text-align: center !important;
            margin: auto;
            height: 65px;
          "
        >
          <img
            src="https://cdn.dsmcdn.com/mrktng/crm/mails/oct/11/devam.gif"
            draggable="false"
            width="1145"
            height="65"
            alt=""
          /></div
      ></a>
    </div>
    <div id="headerMain">
      <div id="sticky-header">
        <div class="wrapper">
          <div class="header">
            <div class="col-lg-3 col-md-3 col-xs-3 no-padding">
              <a
                id="logo"
                href="http://localhost:3000"
                class="logo"
                title="trendyol"
              >
                <img
                  style="width: 111px; height: 100%; margin-bottom: 8px"
                  src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg"
                  alt="Trendyol"
                />
              </a>
            </div>
            <div
              id="autoCompleteAppWrapper"
              class="col-lg-6 col-md-6 col-xs-6 no-padding"
              style="
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div
                data-fragment-name="AutoComplete"
                data-fragment-id="6309193d-c56b-4bc5-a744-32e6f8f1d918"
              >
                <style>
                  .header {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    height: 64px !important;
                  }
                  .header > .col-xs-3,
                  .header > .col-xs-6 {
                    width: auto !important;
                    float: none !important;
                  }</style
                ><link
                  rel="stylesheet"
                  href="https://cdn.dsmcdn.com//web/production/autoCompleteV3.style.ad5309bd0f5701108e5808fa1d20451c.css"
                />
                <div id="auto-complete-app">
                  <div class="autocomplete">
                    <div class="search-box-container">
                      <input
                        class="search-box"
                        type="text"
                        tabindex="1"
                        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                        maxlength="50"
                        autocomplete="off"
                        value=""
                      /><i class="search-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-3 col-xs-3 no-padding"
              id="accountNavigation"
            >
              <div
                data-fragment-name="AccountNavigation"
                data-fragment-id="3cf502bb-d4d7-4c78-a0bb-2ce0bdec5ef7"
              >
                <link
                  rel="stylesheet"
                  href="https://cdn.dsmcdn.com/web/production/account-navigation-v2.style.276d8fd1a105d0f3a08ac8942c28a97f.css"
                />
                <div id="account-navigation-container">
                  <div class="account-navigation-wrapper">
                    <a
                      class="account-nav-item user-login-container"
                      href="/account/login"
                    >
                      <div class="link account-user">
                        <div class="icon-container">
                          <i class="i-user initial-icon"></i
                          ><i class="i-user-orange hover-icon"></i>
                        </div>
                        <p class="link-text">Giriş Yap</p>
                      </div>
                      <div class="login-dropdown">
                        <div class="user-notloggedin-container">
                          <div class="login-button">Giriş Yap</div>
                          <div class="signup-button">Üye Ol</div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="account-nav-item account-favorites"
                      href="/product/favoriler/"
                      ><div class="link">
                        <div class="icon-container">
                          <i class="i-heart initial-icon"></i
                          ><i class="i-heart-orange hover-icon"></i>
                        </div>
                        <p class="link-text">Favorilerim</p>
                      </div></a
                    >
                    <basket-detail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-fragment-name="Navigation"
      data-fragment-id="5e710a31-eb93-4a7d-af70-83d299e68209"
    >
      <link
        rel="stylesheet"
        href="https://cdn.dsmcdn.com/web/production/navigation-v2.19d9001e7c38e718621225587034d5d5.css"
      />
      <div id="browsing-gw-navigation" class="enhanced-navigation">
        <div id="navigation">
          <div id="navigation-wrapper">
            <nav>
              <ul class="main-nav">
                <li class="tab-link" @mouseleave="toggleDropdown(false)">
                  <a
                    href="/butik/liste/1/kadin"
                    class="category-header"
                    @mouseover="toggleDropdown(true)"
                    >Kadın</a
                  >
                  <div class="sub-nav" id="sub-nav-1">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kadin-giyim-x-g1-c82"
                              class="sub-category-header"
                              >Giyim</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/elbise-x-c56">Elbise</a></li>
                              <li>
                                <a href="/kadin-t-shirt-x-g1-c73">Tişört</a>
                              </li>
                              <li>
                                <a href="/kadin-gomlek-x-g1-c75">Gömlek</a>
                              </li>
                              <li>
                                <a href="/kadin-jean-x-g1-c120">Kot Pantolon</a>
                              </li>
                              <li>
                                <a href="/kot-ceket-y-s12676">Kot Ceket</a>
                              </li>
                              <li>
                                <a href="/kadin-pantolon-x-g1-c70">Pantolon</a>
                              </li>
                              <li><a href="/kadin-sort-x-g1-c119">Şort</a></li>
                              <li><a href="/kadin-bluz-x-g1-c1019">Bluz</a></li>
                              <li>
                                <a href="/kadin-ceket-x-g1-c1030">Ceket</a>
                              </li>
                              <li><a href="/etek-x-c69">Etek</a></li>
                              <li>
                                <a href="/kadin-plaj-giyim-x-g1-c68"
                                  >Plaj Giyim</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-tesettur-giyim-x-g1-c81"
                                  >Tesettür</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-buyuk-beden-x-g1-c80"
                                  >Büyük Beden</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <NuxtLink
                              to="/shoesproduct"
                              class="sub-category-header"
                              >Ayakkabı</NuxtLink
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-topuklu-ayakkabi-x-g1-c107"
                                  >Topuklu Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-sneaker-x-g1-c1172">Sneaker</a>
                              </li>
                              <li>
                                <a href="/kadin-gunluk-ayakkabi-x-g1-c1352"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-babet-x-g1-c113">Babet</a>
                              </li>
                              <li>
                                <a href="/kadin-sandalet-x-g1-c111">Sandalet</a>
                              </li>
                              <li>
                                <a href="/kadin-terlik-x-g1-c110">Terlik</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kadin-aksesuar-x-g1-c27"
                              class="sub-category-header"
                              >Aksesuar &amp; Çanta</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-canta-x-g1-c117">Çanta</a>
                              </li>
                              <li><a href="/kadin-saat-x-g1-c34">Saat</a></li>
                              <li>
                                <a href="/kadin-taki--mucevher-x-g1-c28"
                                  >Takı
                                </a>
                              </li>
                              <li>
                                <a href="/kadin-sapka-x-g1-c1181">Şapka</a>
                              </li>
                              <li>
                                <a href="/kadin-cuzdan-x-g1-c1032">Cüzdan</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kadin-ic-giyim-x-g1-c64"
                              class="sub-category-header"
                              >İç Giyim</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-pijama-takimi-x-g1-c101496"
                                  >Pijama Takımı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-gecelik-x-g1-c62">Gecelik</a>
                              </li>
                              <li>
                                <a href="/kadin-sutyen-x-g1-c63">Sütyen</a>
                              </li>
                              <li>
                                <a
                                  href="/kadin-ic-camasiri-takimlari-x-g1-c104536"
                                  >İç Çamaşırı Takımları</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-fantezi-giyim-x-g1-c109067"
                                  >Fantezi Giyim</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-corap-x-g1-c1038">Çorap</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/sr/kadin-x-g1?fl=luks"
                              class="sub-category-header"
                              >Lüks &amp; Designer</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sr/kadin-canta-x-g1-c117?fl=luks"
                                  >Lüks Çanta</a
                                >
                              </li>
                              <li>
                                <a href="/sr/kadin-giyim-x-g1-c82?fl=luks"
                                  >Lüks Giyim</a
                                >
                              </li>
                              <li>
                                <a href="/sr/kadin-ayakkabi-x-g1-c114?fl=luks"
                                  >Lüks Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/kadin-giyim-x-g1-c82?fl=tasarim"
                                  >Tasarım Giyim</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/kadin-ayakkabi-x-g1-c114?fl=tasarim"
                                  >Tasarım Ayakkabı</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kozmetik-x-c89"
                              class="sub-category-header"
                              >Kozmetik</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/parfum-x-c86">Parfüm</a></li>
                              <li>
                                <a href="/goz-makyaji-x-c1347">Göz Makyajı</a>
                              </li>
                              <li>
                                <a href="/cilt-bakimi-x-c85">Cilt Bakım</a>
                              </li>
                              <li>
                                <a href="/sac-bakimi-x-c87">Saç Bakımı</a>
                              </li>
                              <li><a href="/makyaj-x-c100">Makyaj</a></li>
                              <li>
                                <a href="/agiz-bakim-x-c101396">Ağız Bakım</a>
                              </li>
                              <li>
                                <a href="/cinsel-saglik-urunleri-x-c101408"
                                  >Cinsel Sağlık</a
                                >
                              </li>
                              <li>
                                <a href="/vucut-bakimi-x-c1204">Vücut Bakım</a>
                              </li>
                              <li>
                                <a href="/hijyenik-ped-x-c101409"
                                  >Hijyenik Ped</a
                                >
                              </li>
                              <li>
                                <a href="/dus-jeli-ve-kremleri-x-c101401"
                                  >Duş Jeli &amp; Kremleri</a
                                >
                              </li>
                              <li>
                                <a href="/epilasyon-urunleri-x-c104060"
                                  >Epilasyon Ürünleri</a
                                >
                              </li>
                              <li><a href="/ruj-x-c1156">Ruj</a></li>
                              <li>
                                <a href="/yuz-gunes-kremi-x-c1061"
                                  >Güneş Kremi</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kadin-spor-outdoor-x-g1-c104593"
                              class="sub-category-header"
                              >Spor &amp; Outdoor</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-spor-sweatshirt-x-g1-c101456"
                                  >Sweatshirt</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-spor-t-shirt-x-g1-c101459"
                                  >Tişört</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-sporcu-sutyeni-x-g1-c1358"
                                  >Spor Sütyeni</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-spor-tayt-x-g1-c101460">Tayt</a>
                              </li>
                              <li>
                                <a href="/kadin-esofman-x-g1-c1049">Eşofman</a>
                              </li>
                              <li>
                                <a href="/kadin-spor-ayakkabi-x-g1-c109"
                                  >Koşu Ayakkabısı
                                </a>
                              </li>
                              <li>
                                <a href="/spor-cantasi-x-c1174">Spor Çantası</a>
                              </li>
                              <li>
                                <a href="/spor-aletleri-x-c104192"
                                  >Spor Ekipmanları</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-outdoor-ayakkabi-x-g1-c1128"
                                  >Outdoor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-kar-botu-x-g1-c142587"
                                  >Kar Botu</a
                                >
                              </li>
                              <li>
                                <a href="/outdoor-ekipmanlari-x-c104230"
                                  >Outdoor Ekipmanları</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sporcu-besini--supplementler-x-c105131"
                                  >Sporcu Besinleri</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/kadin-sporcu-aksesuarlari-x-g1-c104521"
                                  >Sporcu Aksesuarları</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link" @mouseleave="toggleDropdown(false)">
                  <a
                    href="/butik/liste/2/erkek"
                    class="category-header"
                    @mouseover="toggleDropdown(true)"
                    >Erkek</a
                  >
                  <div class="sub-nav" id="sub-nav-2">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-giyim-x-g2-c82"
                              class="sub-category-header"
                              >Giyim</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-t-shirt-x-g2-c73">Tişört</a>
                              </li>
                              <li><a href="/erkek-sort-x-g2-c119">Şort</a></li>
                              <li>
                                <a href="/erkek-gomlek-x-g2-c75">Gömlek</a>
                              </li>
                              <li>
                                <a href="/erkek-esofman-x-g2-c1049">Eşofman</a>
                              </li>
                              <li>
                                <a href="/erkek-pantolon-x-g2-c70">Pantolon</a>
                              </li>
                              <li>
                                <a href="/erkek-ceket-x-g2-c1030">Ceket</a>
                              </li>
                              <li>
                                <a href="/erkek-jean-x-g2-c120">Kot Pantolon</a>
                              </li>
                              <li>
                                <a href="/erkek-polo-yaka-t-shirt-x-g2-c108775"
                                  >Polo Yaka T-shirt</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-deniz-sortu-x-g2-c104224"
                                  >Deniz Şortu</a
                                >
                              </li>
                              <li><a href="/forma-x-c1054">Forma</a></li>
                              <li>
                                <a href="/erkek-takim-elbise-x-g2-c78"
                                  >Takım Elbise</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-sweatshirt-x-g2-c1179"
                                  >Sweatshirt</a
                                >
                              </li>
                              <li><a href="/erkek-mont-x-g2-c118">Mont</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-ayakkabi-x-g2-c114"
                              class="sub-category-header"
                              >Ayakkabı</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-spor-ayakkabi-x-g2-c109"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-gunluk-ayakkabi-x-g2-c1352"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-yuruyus-ayakkabisi-x-g2-c101429"
                                  >Yürüyüş Ayakkabısı</a
                                >
                              </li>
                              <li><a href="/krampon-x-c144727">Krampon</a></li>
                              <li>
                                <a href="/erkek-sneaker-x-g2-c1172">Sneaker</a>
                              </li>
                              <li>
                                <a href="/erkek-klasik-ayakkabi-x-g2-c101421"
                                  >Klasik</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-kosu-ayakkabisi-x-g2-c101426"
                                  >Koşu &amp; Antrenman</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/erkek-kozmetik-x-g2-c89"
                              class="sub-category-header"
                              >Kişisel Bakım</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-parfum-x-g2-c86">Parfüm</a>
                              </li>
                              <li>
                                <a href="/cinsel-saglik-urunleri-x-c101408"
                                  >Cinsel Sağlık</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-tiras-losyonlari-x-g2-c101406"
                                  >Tıraş Sonrası Ürünler</a
                                >
                              </li>
                              <li>
                                <a href="/tiras-bicagi-x-c101404"
                                  >Tıraş Bıçağı</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-aksesuar-x-g2-c27"
                              class="sub-category-header"
                              >Saat &amp; Aksesuar</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/erkek-saat-x-g2-c34">Saat</a></li>
                              <li>
                                <a href="/erkek-gunes-gozlugu-x-g2-c105"
                                  >Güneş Gözlüğü</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-cuzdan-x-g2-c1032">Cüzdan</a>
                              </li>
                              <li>
                                <a href="/erkek-kemer-x-g2-c1093">Kemer</a>
                              </li>
                              <li>
                                <a href="/erkek-canta-x-g2-c117">Çanta</a>
                              </li>
                              <li>
                                <a href="/erkek-sapka-x-g2-c1181"
                                  >Erkek Şapka</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-bileklik-x-g2-c101">Bileklik</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/erkek-ic-giyim-x-g2-c64"
                              class="sub-category-header"
                              >İç Giyim</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/erkek-boxer-x-g2-c61">Boxer</a></li>
                              <li>
                                <a href="/erkek-corap-x-g2-c1038">Çorap</a>
                              </li>
                              <li>
                                <a href="/erkek-pijama-x-g2-c1143">Pijama</a>
                              </li>
                              <li>
                                <a href="/erkek-atlet-x-g2-c1004">Atlet</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-spor-outdoor-x-g2-c104593"
                              class="sub-category-header"
                              >Spor &amp; Outdoor</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-esofman-x-g2-c1049">Eşofman</a>
                              </li>
                              <li>
                                <a href="/erkek-spor-ayakkabi-x-g2-c109"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-spor-t-shirt-x-g2-c101459"
                                  >T-shirt</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-spor-sweatshirt-x-g2-c101456"
                                  >Sweatshirt</a
                                >
                              </li>
                              <li><a href="/forma-x-c1054">Forma</a></li>
                              <li>
                                <a href="/erkek-spor-corap-x-g2-c109035"
                                  >Spor Çorap</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-spor-giyim-x-g2-c101447"
                                  >Spor Giyim</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-outdoor-ayakkabi-x-g2-c1128"
                                  >Outdoor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-bot-x-g2-c1025">Outdoor Bot</a>
                              </li>
                              <li>
                                <a href="/spor-aletleri-x-c104192"
                                  >Spor Ekipmanları</a
                                >
                              </li>
                              <li>
                                <a href="/outdoor-ekipmanlari-x-c104230"
                                  >Outdoor Ekipmanları</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sporcu-besini--supplementler-x-c105131"
                                  >Sporcu Besinleri</a
                                >
                              </li>
                              <li>
                                <a href="/sporcu-aksesuarlari-x-c104521"
                                  >Sporcu Aksesuarları</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/elektronik-x-c104024"
                              class="sub-category-header"
                              >Elektronik</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/tiras-makinesi-x-c102377"
                                  >Tıraş Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/cep-telefonu-x-c103498"
                                  >Cep Telefonu</a
                                >
                              </li>
                              <li>
                                <a href="/akilli-saat-x-c1240">Akıllı Saat</a>
                              </li>
                              <li>
                                <a href="/akilli-bileklik-x-c103111"
                                  >Akıllı Bileklik</a
                                >
                              </li>
                              <li><a href="/laptop-x-c103108">Laptop</a></li>
                              <li>
                                <a href="/oyun-ve-oyun-konsollari-x-c104044"
                                  >Oyun &amp; Konsollar</a
                                >
                              </li>
                              <li><a href="/ps5-y-s8249">Playstation 5</a></li>
                              <li>
                                <a href="/e-pin-ve-cuzdan-kodu-x-c109059"
                                  >E-pin ve Cüzdan Kodu</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/sr/erkek-x-g2?fl=luks"
                              class="sub-category-header"
                              >Lüks &amp; Designer</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sr/erkek-giyim-x-g2-c82?fl=luks"
                                  >Lüks Giyim</a
                                >
                              </li>
                              <li>
                                <a href="/sr/erkek-ayakkabi-x-g2-c114?fl=luks"
                                  >Lüks Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/erkek-canta-x-g2-c117?fl=luks"
                                  >Lüks Çanta</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link" @mouseleave="toggleDropdown(false)">
                  <a
                    href="/butik/liste/3/cocuk"
                    class="category-header"
                    @mouseover="toggleDropdown(true)"
                    >Çocuk</a
                  >
                  <div class="sub-nav" id="sub-nav-3">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/bebek-giyim-x-c104158"
                              class="sub-category-header"
                              >Bebek</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/bebek-takimlari-x-c103727"
                                  >Bebek Takımları</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-ayakkabi-x-g3-c114?gag=2-1,1-1"
                                  >Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/hastane-cikisi-x-c104159"
                                  >Hastane Çıkışı</a
                                >
                              </li>
                              <li>
                                <a href="/yenidogan-bebek-kiyafetleri-y-s8230"
                                  >Yenidoğan Kıyafetleri</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-tulum-salopet-x-g3-c104150?gag=2-1,1-1"
                                  >Tulum &amp; Salopet</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-body-zibin-x-c104566"
                                  >Body &amp; Zıbın</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-t-shirt-x-g3-c73?gag=2-1,1-1"
                                  >T-shirt &amp; Atlet</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-elbise-x-g3-c56?gag=2-1,1-1"
                                  >Elbise</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-sort-x-g3-c119?gag=2-1,1-1"
                                  >Şort</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-patigi-y-s7272">Bebek Patiği</a>
                              </li>
                              <li>
                                <a href="/bebek-bezi-x-c1363">Bebek Bezi</a>
                              </li>
                              <li>
                                <a href="/bebek-mamalari-x-c103753"
                                  >Bebek Maması</a
                                >
                              </li>
                              <li>
                                <a href="/islak-mendil-x-c101411"
                                  >Islak Mendil</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/sr/cocuk-giyim-x-g3-c82?gag=1-2"
                              class="sub-category-header"
                              >Kız Çocuk</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sr/cocuk-elbise-x-g3-c56?gag=1-2"
                                  >Elbise</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-sweatshirt-x-g3-c1179?gag=1-2"
                                  >Sweatshirt</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-spor-ayakkabi-x-g3-c109?gag=1-2"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-esofman-x-g3-c1049?gag=1-2"
                                  >Eşofman</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-ic-giyim-x-g3-c64?gag=1-2"
                                  >İç Giyim &amp; Pijama</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-t-shirt-x-g3-c73?gag=1-2"
                                  >T-shirt &amp; Atlet</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-tayt-x-g3-c121?gag=1-2"
                                  >Tayt</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-gunluk-ayakkabi-x-g3-c1352?gag=1-2"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-sort-x-g3-c119?gag=1-2"
                                  >Şort</a
                                >
                              </li>
                              <li>
                                <a href="/kiz-cocuk-oyuncaklari-y-s8001"
                                  >Kız Çocuk Oyuncakları</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-oyun-evi-y-s3854"
                                  >Çocuk Oyun Evi</a
                                >
                              </li>
                              <li>
                                <a href="/barbie-karavan-y-s3584"
                                  >Barbie Karavan</a
                                >
                              </li>
                              <li>
                                <a href="/kiz-cocuk-odasi-y-s8000"
                                  >Kız Çocuk Odası</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/sr/cocuk-giyim-x-g3-c82?gag=2-2"
                              class="sub-category-header"
                              >Erkek Çocuk</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a
                                  href="/sr/cocuk-sweatshirt-x-g3-c1179?gag=2-2"
                                  >Sweatshirt</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-spor-ayakkabi-x-g3-c109?gag=2-2"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-esofman-x-g3-c1049?gag=2-2"
                                  >Eşofman</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-ic-giyim-x-g3-c64?gag=2-2"
                                  >İç Giyim &amp; Pijama</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-t-shirt-x-g3-c73?gag=2-2"
                                  >T-shirt &amp; Atlet</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-gunluk-ayakkabi-x-g3-c1352?gag=2-2"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sr/cocuk-okul-cantasi-x-g3-c104204?gag=2-2"
                                  >Okul Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-sort-x-g3-c119?gag=2-2"
                                  >Şort</a
                                >
                              </li>
                              <li>
                                <a href="/sr/cocuk-gomlek-x-g3-c75?gag=2-2"
                                  >Gömlek</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-motoru-y-s3852">Çocuk Motoru</a>
                              </li>
                              <li>
                                <a href="/doktor-oyuncaklari-y-s3948"
                                  >Doktor Oyuncakları</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-polis-kiyafeti-y-s3855"
                                  >Çocuk Polis Kıyafeti</a
                                >
                              </li>
                              <li>
                                <a href="/uzaktan-kumandali-araba-y-s4820"
                                  >Kumandalı Araba</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/annebebek-bakim-x-c101414"
                              class="sub-category-header"
                              >Bebek Bakım</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/bebek-banyo-tuvalet-x-c103776"
                                  >Banyo &amp; Tuvalet</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-sampuani-x-c105562"
                                  >Bebek Şampuanı</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-krem-yaglar-x-c103769"
                                  >Krem &amp; Yağlar</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-bakim-cantasi-x-c1014"
                                  >Bebek Çantası</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a href="/oyuncak-x-c90" class="sub-category-header"
                              >Oyuncak</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/egitici-oyuncaklar-x-c145168"
                                  >Eğitici Oyuncaklar</a
                                >
                              </li>
                              <li>
                                <a href="/oyuncak-arabalar-x-c144039"
                                  >Oyuncak Araba</a
                                >
                              </li>
                              <li>
                                <a href="/oyuncak-bebek-x-c103711"
                                  >Oyuncak Bebek</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/bebek-ve-okul-oncesi-oyuncaklar-x-c103692"
                                  >Bebek &amp; Okul Öncesi</a
                                >
                              </li>
                              <li>
                                <a href="/kumandali-oyuncaklar-x-c103819"
                                  >Kumandalı Oyuncak</a
                                >
                              </li>
                              <li>
                                <a href="/robot-oyuncak-y-s4763"
                                  >Robot Oyuncak</a
                                >
                              </li>
                              <li>
                                <a href="/oyun-hamurlari-x-c103701"
                                  >Oyun Hamuru</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/cocuk-gerecleri-x-c1355"
                              class="sub-category-header"
                              >Taşıma &amp; Güvenlik</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/bebek-arabasi-puset-x-c103735"
                                  >Bebek Arabası &amp; Puset</a
                                >
                              </li>
                              <li>
                                <a href="/park-yatak-ve-oyun-parki-x-c103710"
                                  >Park Yatak</a
                                >
                              </li>
                              <li>
                                <a href="/ana-kucagi-x-c103731">Ana Kucağı</a>
                              </li>
                              <li>
                                <a href="/portbebe-kanguru-sling-x-c103740"
                                  >Portbebe &amp; Kanguru</a
                                >
                              </li>
                              <li><a href="/yurutec-x-c103741">Yürüteç</a></li>
                              <li>
                                <a href="/oto-koltugu-x-c103738">Oto Koltuğu</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/beslenme-emzirme-x-c103752"
                              class="sub-category-header"
                              >Beslenme Emzirme</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/biberon-emzik-x-c103755"
                                  >Biberon &amp; Emzik</a
                                >
                              </li>
                              <li>
                                <a href="/gogus-pompalari-x-c103760"
                                  >Göğüs Pompası</a
                                >
                              </li>
                              <li>
                                <a href="/mama-sandalyesi-x-c1111"
                                  >Mama Sandalyesi</a
                                >
                              </li>
                              <li>
                                <a href="/mama-onlugu-x-c103765">Mama Önlüğü</a>
                              </li>
                              <li>
                                <a href="/alistirma-bardaklari-x-c103756"
                                  >Alıştırma Bardağı</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link" @mouseleave="toggleDropdown(false)">
                  <a
                    href="/butik/liste/12/ev--yasam"
                    class="category-header"
                    @mouseover="toggleDropdown(true)"
                    >Ev &amp; Yaşam</a
                  >
                  <div class="sub-nav" id="sub-nav-12">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/sofra--mutfak-x-c1354"
                              class="sub-category-header"
                              >Sofra &amp; Mutfak</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/yemek-takimi-x-c1208">Yemek Takımı</a>
                              </li>
                              <li>
                                <a href="/catal-kasik-bicak-x-c108824"
                                  >Çatal Kaşık Bıçak Seti</a
                                >
                              </li>
                              <li>
                                <a href="/baharatlik-x-c1009">Baharat Takımı</a>
                              </li>
                              <li>
                                <a href="/bardak--kadeh-x-c101502">Bardak</a>
                              </li>
                              <li>
                                <a href="/firin--kek-kaliplari-x-c101504"
                                  >Fırın &amp; Kek Kalıbı</a
                                >
                              </li>
                              <li>
                                <a href="/caydanlik-x-c1035">Çaydanlık</a>
                              </li>
                              <li>
                                <a href="/tencere-x-c1191">Tencere Seti</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/banyo-x-c104166"
                              class="sub-category-header"
                              >Banyo</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/havlu-x-c1064"
                                  >Havlu &amp; Havlu Seti</a
                                >
                              </li>
                              <li><a href="/bornoz-x-c1024">Bornoz</a></li>
                              <li>
                                <a href="/banyo-seti-x-c104210">Banyo Seti</a>
                              </li>
                              <li>
                                <a href="/banyo-paspasi-x-c109003"
                                  >Banyo Paspası</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/ev-tekstili-x-c94"
                              class="sub-category-header"
                              >Ev Tekstili</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/yatak-odasi-tekstili-x-c104442"
                                  >Yatak Odası</a
                                >
                              </li>
                              <li>
                                <a href="/hali--kilim--paspas-x-c101514"
                                  >Halı &amp; Kilim &amp; Paspas</a
                                >
                              </li>
                              <li><a href="/perde-x-c1141">Perde</a></li>
                              <li>
                                <a href="/nevresim-takimi-x-c1123"
                                  >Nevresim Takımı</a
                                >
                              </li>
                              <li><a href="/yastik-x-c1206">Yastık</a></li>
                              <li>
                                <a href="/kirlent-ve-kirlent-kilifi-x-c104214"
                                  >Kırlent ve Kılıfı</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/ev-dekorasyon-x-c95"
                              class="sub-category-header"
                              >Ev Dekorasyon</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/dekoratif-aksesuarlar-x-c101521"
                                  >Dekoratif Aksesuar</a
                                >
                              </li>
                              <li><a href="/tablo-x-c1185">Tablo</a></li>
                              <li>
                                <a href="/duvar-saati-x-c35">Duvar Saati</a>
                              </li>
                              <li><a href="/ayna-x-c107995">Ayna</a></li>
                              <li>
                                <a href="/sanat-eseri-x-c142625"
                                  >Trendyol Sanat</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/aydinlatma-x-c1365"
                              class="sub-category-header"
                              >Aydınlatma</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/avize-x-c1366">Avize</a></li>
                              <li>
                                <a href="/lambader-x-c103676">Lambader</a>
                              </li>
                              <li><a href="/abajur-x-c101512">Abajur</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/mobilya-x-c1119"
                              class="sub-category-header"
                              >Mobilya</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/salon-oturma-odasi-mobilya-x-c104489"
                                  >Salon &amp; Oturma Odası</a
                                >
                              </li>
                              <li>
                                <a href="/yatak-odasi-mobilya-x-c104448"
                                  >Yatak Odası</a
                                >
                              </li>
                              <li>
                                <a href="/bahce-mobilyasi-x-c104474"
                                  >Bahçe Mobilyası</a
                                >
                              </li>
                              <li>
                                <a href="/calisma-odasi-x-c104201"
                                  >Çalışma Odası</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/ev-gerecleri-x-c104216"
                              class="sub-category-header"
                              >Ev Gereçleri</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/duzenleyici-x-c104222">Düzenleyici</a>
                              </li>
                              <li>
                                <a href="/camasirlik-x-c104218">Çamaşırlık</a>
                              </li>
                              <li>
                                <a href="/saklama-kutusu-sepet-x-c104221"
                                  >Sepet &amp; Saklama Kutusu</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a href="/hobi-x-c97" class="sub-category-header"
                              >Hobi</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/kitap-x-c91">Kitap</a></li>
                              <li><a href="/puzzle-x-c1155">Puzzle</a></li>
                              <li>
                                <a href="/boya-seti-x-c106339"
                                  >Boya &amp; Resim</a
                                >
                              </li>
                              <li>
                                <a href="/kutu-oyunlari-x-c103818"
                                  >Kutu Oyunları</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kirtasiye-ofis-malzemeleri-x-c104125"
                              class="sub-category-header"
                              >Kırtasiye &amp; Ofis</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/defter-x-c1233">Defter</a></li>
                              <li><a href="/kalem-x-c1080">Kalem</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/spor-aletleri-x-c104192"
                              class="sub-category-header"
                              >Spor &amp; Outdoor</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kosu-bantlari-x-c104277"
                                  >Koşu Bandı</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/dambillar-ve-agirlik-plakalari-x-c104287"
                                  >Dumbell &amp; Ağırlık</a
                                >
                              </li>
                              <li>
                                <a href="/pilates-malzemeleri-x-c1146"
                                  >Pilates &amp; Yoga</a
                                >
                              </li>
                              <li>
                                <a href="/eliptik-bisiklet-y-s4014"
                                  >Eliptik Bisiklet</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/otomobil-ve-motosiklet-x-c105777"
                              class="sub-category-header"
                              >Otomobil &amp; Motosiklet</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/oto-aksesuarlari-x-c103483"
                                  >Oto Aksesuar</a
                                >
                              </li>
                              <li>
                                <a href="/oto-paspas-x-c104103">Oto Paspası</a>
                              </li>
                              <li>
                                <a href="/lastik-x-c103902">Oto Lastik</a>
                              </li>
                              <li>
                                <a href="/motosiklet-kasklari-x-c103849"
                                  >Kask</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/yapi-market-x-c103720"
                              class="sub-category-header"
                              >Yapı Market</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/banyo-yapi-malzemeleri-x-c105718"
                                  >Banyo Yapı Malzemeleri</a
                                >
                              </li>
                              <li>
                                <a href="/elektrikli-el-aletleri-x-c103723"
                                  >Elektrikli El Aleti</a
                                >
                              </li>
                              <li>
                                <a href="/hirdavat-urunleri-x-c103725"
                                  >Hırdavat Ürünleri</a
                                >
                              </li>
                              <li>
                                <a href="/boya--boya-malzemeleri-x-c103721"
                                  >Boya</a
                                >
                              </li>
                              <li><a href="/matkap-x-c105661">Matkap</a></li>
                              <li><a href="/ampul-x-c103675">Ampul</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a href="/butik/liste/16/supermarket" class="category-header"
                    >Süpermarket</a
                  >
                  <div class="sub-nav" id="sub-nav-16">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/ev-bakim-ve-temizlik-x-c105478"
                              class="sub-category-header"
                              >Ev &amp; Temizlik</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/camasir-yikama-urunleri-x-c103809"
                                  >Çamaşır Yıkama</a
                                >
                              </li>
                              <li>
                                <a href="/bulasik-yikama-x-c103801"
                                  >Bulaşık Yıkama</a
                                >
                              </li>
                              <li>
                                <a href="/ev-temizlik-urunleri-x-c101412"
                                  >Ev Temizlik</a
                                >
                              </li>
                              <li>
                                <a href="/paspas-ve-mop-x-c109302"
                                  >Paspas &amp; Mop</a
                                >
                              </li>
                              <li>
                                <a href="/kagit-urunleri-x-c104011"
                                  >Kağıt Ürünleri</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kuru-gida-x-c103970"
                              class="sub-category-header"
                              >Gıda</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/cay-x-c104000">Çay</a></li>
                              <li><a href="/kahve-x-c104004">Kahve</a></li>
                              <li>
                                <a href="/kuruyemis-x-c103953">Kuruyemiş</a>
                              </li>
                              <li>
                                <a href="/sut-ve-kahvaltilik-x-c103961"
                                  >Kahvaltılık</a
                                >
                              </li>
                              <li>
                                <a href="/organik-urunler-x-c1127"
                                  >Organik Ürünler</a
                                >
                              </li>
                              <li>
                                <a href="/diabetik-urun-x-c105472"
                                  >Diyabetik Ürünler</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kozmetik-x-c89"
                              class="sub-category-header"
                              >Kişisel Bakım</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sac-bakimi-x-c87">Saç Bakımı</a>
                              </li>
                              <li>
                                <a href="/tiras-agda-epilasyon-x-c105782"
                                  >Ağda &amp; Epilasyon</a
                                >
                              </li>
                              <li>
                                <a href="/banyo--dus-urunleri-x-c103107"
                                  >Banyo &amp; Duş</a
                                >
                              </li>
                              <li>
                                <a href="/agiz-bakim-x-c101396">Ağız Bakım</a>
                              </li>
                              <li>
                                <a href="/cilt-bakimi-x-c85">Cilt Bakımı</a>
                              </li>
                              <li>
                                <a href="/vucut-bakimi-x-c1204">Vücut Bakımı</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/saglik-x-c105548"
                              class="sub-category-header"
                              >Sağlık &amp; Spor</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/cinsel-saglik-urunleri-x-c101408"
                                  >Cinsel Sağlık</a
                                >
                              </li>
                              <li>
                                <a href="/hijyenik-ped-x-c101409"
                                  >Hijyenik Ped</a
                                >
                              </li>
                              <li>
                                <a
                                  href="/sporcu-besini--supplementler-x-c105131"
                                  >Sporcu Besinleri</a
                                >
                              </li>
                              <li>
                                <a href="/gida-takviyeleri-vitaminler-x-c105085"
                                  >Vitamin &amp; Ek Gıda</a
                                >
                              </li>
                              <li>
                                <a href="/hasta-bezi-ve-temizlik-x-c105547"
                                  >Hasta Bezi &amp; Temizlik</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/pet-shop-x-c1142"
                              class="sub-category-header"
                              >Petshop</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kedi-mamasi-x-c103588">Kedi Maması</a>
                              </li>
                              <li>
                                <a href="/kedi-kumu-x-c103584">Kedi Kumu</a>
                              </li>
                              <li>
                                <a href="/kopek-mamasi-x-c103620"
                                  >Köpek Maması</a
                                >
                              </li>
                              <li>
                                <a href="/kopek-tasmasi-x-c103631"
                                  >Köpek Tasması</a
                                >
                              </li>
                              <li>
                                <a href="/kus-urunleri-x-c103635"
                                  >Kuş Ürünleri</a
                                >
                              </li>
                              <li>
                                <a href="/akvaryum-urunleri-x-c103564"
                                  >Akvaryum Ürünleri</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/annebebek-bakim-x-c101414"
                              class="sub-category-header"
                              >Bebek Bakım</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sut-arttirici-icecekler-x-c103763"
                                  >Süt Arttırıcı İçecekler</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-ek-besin-x-c105500"
                                  >Bebek Ek Besin</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-bezi-x-c1363">Bebek Bezi</a>
                              </li>
                              <li>
                                <a href="/islak-mendil-x-c101411"
                                  >Islak Mendil &amp; Havlu</a
                                >
                              </li>
                              <li>
                                <a href="/bebek-bakim-ve-kozmetik-x-c105559"
                                  >Bebek Kozmetik</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a href="/butik/liste/11/kozmetik" class="category-header"
                    >Kozmetik</a
                  >
                  <div class="sub-nav" id="sub-nav-11">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a href="/makyaj-x-c100" class="sub-category-header"
                              >Makyaj</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/goz-makyaji-x-c1347">Göz Makyajı</a>
                              </li>
                              <li>
                                <a href="/ten-makyaji-x-c1348">Ten Makyajı</a>
                              </li>
                              <li>
                                <a href="/dudak-makyaji-x-c1346"
                                  >Dudak Makyajı</a
                                >
                              </li>
                              <li>
                                <a href="/makyaj-seti-x-c104019">Makyaj Seti</a>
                              </li>
                              <li>
                                <a href="/oje-x-c1124">Oje &amp; Aseton</a>
                              </li>
                              <li><a href="/fondoten-x-c1053">Fondöten</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/parfum-ve-deodorant-x-c103717"
                              class="sub-category-header"
                              >Parfüm &amp; Deodorant
                            </a>
                            <ul class="sub-item-list">
                              <li><a href="/parfum-x-c86">Parfüm</a></li>
                              <li>
                                <a href="/parfum-seti-x-c101385"
                                  >Parfüm Setleri</a
                                >
                              </li>
                              <li>
                                <a href="/deodorant-x-c1040"
                                  >Deodorant &amp; Roll-on</a
                                >
                              </li>
                              <li>
                                <a href="/vucut-spreyi-x-c101386"
                                  >Vücut Spreyi</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/cilt-bakimi-x-c85"
                              class="sub-category-header"
                              >Cilt Bakımı</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/yuz-kremi-x-c1122">Yüz Kremi</a>
                              </li>
                              <li>
                                <a href="/yuz-temizleyicileri-x-c104014"
                                  >Yüz Temizleme</a
                                >
                              </li>
                              <li>
                                <a href="/yuz-maskesi-x-c1212">Yüz Maskesi</a>
                              </li>
                              <li>
                                <a href="/goz-bakimi-x-c101380">Göz Bakımı</a>
                              </li>
                              <li>
                                <a href="/gunes-urunu-x-c143835"
                                  >Güneş Koruyucu</a
                                >
                              </li>
                              <li>
                                <a href="/cilt-serumu-x-c101381">Cilt Serumu</a>
                              </li>
                              <li>
                                <a
                                  href="/yaslanma-ve-kirisiklik-karsiti-x-c101382"
                                  >Yaşlanma Karşıtı</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/sac-bakimi-x-c87"
                              class="sub-category-header"
                              >Saç Bakımı</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/sampuan-x-c1180">Şampuan</a></li>
                              <li>
                                <a href="/sac-sekillendirici-x-c101390"
                                  >Saç Şekillendirici</a
                                >
                              </li>
                              <li>
                                <a href="/sac-maskesi-x-c1162"
                                  >Saç Serumu &amp; Maskesi</a
                                >
                              </li>
                              <li>
                                <a href="/sac-boyasi-x-c1159">Saç Boyası</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/tiras-agda-epilasyon-x-c105782"
                              class="sub-category-header"
                              >Epilasyon &amp; Tıraş</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/epilasyon-urunleri-x-c104060"
                                  >Tüy Dökücü</a
                                >
                              </li>
                              <li><a href="/agda-x-c106112">Ağda</a></li>
                              <li>
                                <a href="/tiras-bicagi-x-c101404"
                                  >Tıraş Bıçağı</a
                                >
                              </li>
                              <li>
                                <a href="/epilator-x-c104074">Epilatör</a>
                              </li>
                              <li>
                                <a href="/tiras-kopuk-ve-jelleri-x-c101405"
                                  >Tıraş Köpüğü</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kozmetik-x-c89"
                              class="sub-category-header"
                              >Genel Bakım</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/cinsel-saglik-urunleri-x-c101408"
                                  >Cinsel Sağlık</a
                                >
                              </li>
                              <li>
                                <a href="/hijyenik-ped-x-c101409"
                                  >Hijyenik Ped</a
                                >
                              </li>
                              <li>
                                <a href="/vucut-bakimi-x-c1204">Vücut Bakımı</a>
                              </li>
                              <li>
                                <a href="/el-ve-ayak-bakimi-x-c104064"
                                  >El ve Ayak Bakımı</a
                                >
                              </li>
                              <li>
                                <a href="/dus-jeli-ve-kremleri-x-c101401"
                                  >Duş Jeli ve Kremi</a
                                >
                              </li>
                              <li>
                                <a href="/bakim-yaglari-x-c104013"
                                  >Bakım Yağları</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a
                    href="/butik/liste/9/ayakkabi--canta"
                    class="category-header"
                    >Ayakkabı &amp; Çanta</a
                  >
                  <div class="sub-nav" id="sub-nav-9">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/ayakkabi/ayakkabi"
                              class="sub-category-header"
                              >Kadın Ayakkabı</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-spor-ayakkabi-x-g1-c109"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-topuklu-ayakkabi-x-g1-c107"
                                  >Topuklu Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-gunluk-ayakkabi-x-g1-c1352"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-bot-x-g1-c1025"
                                  >Bot &amp; Bootie</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-sandalet-x-g1-c111">Sandalet</a>
                              </li>
                              <li>
                                <a href="/kadin-terlik-x-g1-c110">Terlik</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kadin-canta-x-g1-c117"
                              class="sub-category-header"
                              >Kadın Çanta</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kadin-omuz-cantasi-x-g1-c101465"
                                  >Omuz Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-sirt-cantasi-x-g1-c115"
                                  >Sırt Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-cuzdan-x-g1-c1032">Cüzdan</a>
                              </li>
                              <li>
                                <a href="/kadin-spor-cantasi-x-g1-c1174"
                                  >Spor Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-bel-cantasi-x-g1-c104144"
                                  >Bel Çantası</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-ayakkabi-x-g2-c114"
                              class="sub-category-header"
                              >Erkek Ayakkabı</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-spor-ayakkabi-x-g2-c109"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-gunluk-ayakkabi-x-g2-c1352"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-klasik-ayakkabi-x-g2-c101421"
                                  >Klasik Ayakkabı</a
                                >
                              </li>
                              <li><a href="/erkek-bot-x-g2-c1025">Bot</a></li>
                              <li>
                                <a href="/erkek-sneaker-x-g2-c1172">Sneaker</a>
                              </li>
                              <li>
                                <a href="/erkek-kosu-ayakkabisi-x-g2-c101426"
                                  >Koşu Ayakkabısı</a
                                >
                              </li>
                              <li><a href="/krampon-x-c144727">Krampon</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/erkek-canta-x-g2-c117"
                              class="sub-category-header"
                              >Erkek Çanta</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/erkek-sirt-cantasi-x-g2-c115"
                                  >Sırt Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-postaci-canta-x-g2-c1152"
                                  >Postacı Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-cuzdan--kartlik-x-g2-c1353"
                                  >Cüzdan &amp; Kartlık</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-spor-cantasi-x-g2-c1174"
                                  >Spor Çantası</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/cocuk-ayakkabi-x-g3-c114"
                              class="sub-category-header"
                              >Çocuk Ayakkabı</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/cocuk-spor-ayakkabi-x-g3-c109"
                                  >Spor Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-gunluk-ayakkabi-x-g3-c1352"
                                  >Günlük Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-babet-x-g3-c113">Babet</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/cocuk-canta-x-g3-c117"
                              class="sub-category-header"
                              >Çocuk Çanta</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/cocuk-sirt-cantasi-x-g3-c115"
                                  >Sırt Çantası</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-okul-cantasi-x-g3-c104204"
                                  >Okul Çantası</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/sr?q=Ayakkabı%20Çanta&amp;fl=luks"
                              class="sub-category-header"
                              >Lüks &amp; Designer</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sr/canta-x-c117?fl=luks"
                                  >Lüks Çanta</a
                                >
                              </li>
                              <li>
                                <a href="/sr/ayakkabi-x-c114?fl=luks"
                                  >Lüks Ayakkabı</a
                                >
                              </li>
                              <li>
                                <a href="/sr/canta-x-c117?fl=tasarim"
                                  >Tasarım Çanta</a
                                >
                              </li>
                              <li>
                                <a href="/sr/ayakkabi-x-c114?fl=tasarim"
                                  >Tasarım Ayakkabı</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a
                    href="/butik/liste/10/saat--aksesuar"
                    class="category-header"
                    >Saat &amp; Aksesuar</a
                  >
                  <div class="sub-nav" id="sub-nav-10">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/kadin-aksesuar-x-g1-c27"
                              class="sub-category-header"
                              >Kadın</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/kadin-saat-x-g1-c34">Saat</a></li>
                              <li>
                                <a href="/kadin-gunes-gozlugu-x-g1-c105"
                                  >Güneş Gözlüğü</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-taki--mucevher-x-g1-c28"
                                  >Takı</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-cuzdan-x-g1-c1032">Cüzdan</a>
                              </li>
                              <li>
                                <a href="/kadin-kemer-x-g1-c1093">Kemer</a>
                              </li>
                              <li>
                                <a href="/kadin-sapka-x-g1-c1181">Şapka</a>
                              </li>
                              <li>
                                <a
                                  href="/kadin-sapka--bere--eldiven-x-g1-c101499"
                                  >Atkı Bere Eldiven</a
                                >
                              </li>
                              <li>
                                <a href="/kadin-sal-ve-fular-x-g1-c101433"
                                  >Şal &amp; Fular</a
                                >
                              </li>
                              <li><a href="/semsiye-x-c1183">Şemsiye</a></li>
                              <li>
                                <a href="/gozluk-kabi-x-c108709">Gözlük Kabı</a>
                              </li>
                              <li>
                                <a href="/kadin-sac-aksesuarlari-x-g1-c101434"
                                  >Saç Aksesuarı</a
                                >
                              </li>
                              <li>
                                <a href="/hasir-bilezik-y-s4197"
                                  >Hasır Bilezik</a
                                >
                              </li>
                              <li>
                                <a href="/22-ayar-burma-bilezik-y-s4972"
                                  >Burma Bilezik</a
                                >
                              </li>
                              <li>
                                <a href="/22-ayar-bilezik-y-s3301"
                                  >22 Ayar Bilezik</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/taki--mucevher-x-c28"
                              class="sub-category-header"
                              >Takı &amp; Mücevher</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/kolye-x-c102">Kolye</a></li>
                              <li><a href="/kupe-x-c1106">Küpe</a></li>
                              <li><a href="/bileklik-x-c101">Bileklik</a></li>
                              <li><a href="/halhal-x-c1062">Halhal</a></li>
                              <li><a href="/yuzuk-x-c103">Yüzük</a></li>
                              <li><a href="/altin-x-c103532">Altın</a></li>
                              <li>
                                <a href="/piercing-x-c109007">Piercing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/elektronik-x-c104024"
                              class="sub-category-header"
                              >Elektronik Aksesuarlar</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/kapak-ve-kilif-x-c104026"
                                  >Telefon Kılıfı</a
                                >
                              </li>
                              <li>
                                <a href="/akilli-saat-x-c1240">Akıllı Saat</a>
                              </li>
                              <li>
                                <a href="/akilli-bileklik-x-c103111"
                                  >Akıllı Bileklik</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/erkek-aksesuar-x-g2-c27"
                              class="sub-category-header"
                              >Erkek</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/erkek-saat-x-g2-c34">Saat</a></li>
                              <li>
                                <a href="/erkek-gunes-gozlugu-x-g2-c105"
                                  >Güneş Gözlüğü</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-cuzdan--kartlik-x-g2-c1353"
                                  >Cüzdan &amp; Kartlık</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-kemer-x-g2-c1093">Kemer</a>
                              </li>
                              <li>
                                <a href="/erkek-bileklik-x-g2-c101">Bileklik</a>
                              </li>
                              <li>
                                <a
                                  href="/erkek-sapka--bere--eldiven-x-g2-c101499"
                                  >Şapka Bere Eldiven</a
                                >
                              </li>
                              <li>
                                <a href="/erkek-kravat-x-g2-c1101">Kravat</a>
                              </li>
                              <li><a href="/valiz-x-c1202">Valiz</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/cocuk-aksesuar-x-g3-c27"
                              class="sub-category-header"
                              >Çocuk Aksesuar</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/cocuk-saat-x-g3-c34">Saat</a></li>
                              <li>
                                <a href="/cocuk-gunes-gozlugu-x-g3-c105"
                                  >Güneş Gözlüğü</a
                                >
                              </li>
                              <li>
                                <a href="/cocuk-sapka-x-g3-c1181">Şapka</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a href="/butik/liste/5/elektronik" class="category-header"
                    >Elektronik</a
                  >
                  <div class="sub-nav" id="sub-nav-5">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/elektrikli-ev-aletleri-x-c1104"
                              class="sub-category-header"
                              >Küçük Ev Aletleri</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/supurge-x-c108939">Süpürge</a></li>
                              <li><a href="/utu-x-c1201">Ütü</a></li>
                              <li>
                                <a href="/robot-supurge-x-c109453"
                                  >Robot Süpürge</a
                                >
                              </li>
                              <li>
                                <a href="/kahve-makinesi-x-c1079"
                                  >Kahve Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/blender-seti-x-c103677">Blender</a>
                              </li>
                              <li>
                                <a href="/cay-makinesi-x-c108890"
                                  >Çay Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/tost-makinesi-x-c1197"
                                  >Tost Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/waffle-makinesi-x-c145788"
                                  >Waffle Makinesi</a
                                >
                              </li>
                              <li><a href="/tarti-x-c1012">Tartı</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/giyilebilir-teknoloji-x-c144430"
                              class="sub-category-header"
                              >Giyilebilir Teknoloji</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/akilli-saat-x-c1240">Akıllı Saat</a>
                              </li>
                              <li>
                                <a href="/akilli-bileklik-x-c103111"
                                  >Akıllı Bileklik</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/telefon-x-c104025"
                              class="sub-category-header"
                              >Telefon</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/cep-telefonu-x-c103498"
                                  >Cep Telefonu</a
                                >
                              </li>
                              <li>
                                <a href="/kapak-ve-kilif-x-c104026"
                                  >Kapak &amp; Kılıf</a
                                >
                              </li>
                              <li>
                                <a href="/sarj-cihazlari-x-c103112"
                                  >Şarj Cihazları</a
                                >
                              </li>
                              <li>
                                <a href="/tasinabilir-batarya-x-c103113"
                                  >Powerbank</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/bilgisayar-tablet-x-c103660"
                              class="sub-category-header"
                              >Bilgisayar &amp; Tablet</a
                            >
                            <ul class="sub-item-list">
                              <li><a href="/laptop-x-c103108">Laptop</a></li>
                              <li><a href="/tablet-x-c103665">Tablet</a></li>
                              <li>
                                <a href="/bilgisayar-bilesenleri-x-c103662"
                                  >Bilgisayar Bileşenleri</a
                                >
                              </li>
                              <li><a href="/monitor-x-c103668">Monitör</a></li>
                              <li>
                                <a href="/yazici-tarayici-x-c104116"
                                  >Yazıcı &amp; Tarayıcı</a
                                >
                              </li>
                              <li>
                                <a href="/cevre-birimleri-x-c108657"
                                  >Çevre Birimleri</a
                                >
                              </li>
                              <li>
                                <a href="/ag-modem-x-c103661">Ağ &amp; Modem</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/tv-goruntu-ses-sistemleri-x-c104035"
                              class="sub-category-header"
                              >TV &amp; Görüntü &amp; Ses</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/televizyon-x-c104156">Televizyon</a>
                              </li>
                              <li>
                                <a href="/soundbar-x-c143233">Soundbar</a>
                              </li>
                              <li>
                                <a href="/projeksiyon-cihazi-x-c104157"
                                  >Projeksiyon Cihazı</a
                                >
                              </li>
                              <li>
                                <a href="/media-player-x-c103669"
                                  >Media Player</a
                                >
                              </li>
                              <li><a href="/hoparlor-x-c1067">Hoparlör</a></li>
                              <li><a href="/kulaklik-x-c92">Kulaklık</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/kisisel-bakim-aletleri-x-c103109"
                              class="sub-category-header"
                              >Kişisel Bakım Aletleri</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/sac-duzlestirici-x-c1160"
                                  >Saç Düzleştirici</a
                                >
                              </li>
                              <li>
                                <a href="/tiras-makinesi-x-c102377"
                                  >Tıraş Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/sac-masasi-x-c1163">Saç Maşası</a>
                              </li>
                              <li>
                                <a href="/sac-kurutma-makinesi-x-c1161"
                                  >Saç Kurutma Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/epilator-x-c104074"
                                  >Epilasyon Aleti</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/beyaz-esya-x-c103613"
                              class="sub-category-header"
                              >Beyaz Eşya</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/buzdolabi-x-c103623">Buzdolabı</a>
                              </li>
                              <li>
                                <a href="/camasir-makinesi-x-c103625"
                                  >Çamaşır Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/bulasik-makinesi-x-c103621"
                                  >Bulaşık Makinesi</a
                                >
                              </li>
                              <li>
                                <a href="/ankastre-x-c103615">Ankastre</a>
                              </li>
                              <li>
                                <a href="/derin-dondurucu-x-c103629"
                                  >Derin Dondurucu</a
                                >
                              </li>
                              <li><a href="/klima-x-c104080">Klima</a></li>
                              <li><a href="/kombi-x-c104081">Kombi</a></li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/elektronik-x-c104024"
                              class="sub-category-header"
                              >Elektronik Aksesuarlar</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/bilgisayar-tablet-aksesuar-x-c104568"
                                  >Bilgisayar Aksesuar</a
                                >
                              </li>
                              <li>
                                <a href="/telefon-aksesuarlari-x-c1190"
                                  >Telefon Aksesuarları</a
                                >
                              </li>
                              <li>
                                <a href="/tv-aksesuari-x-c104461"
                                  >TV Aksesuarları</a
                                >
                              </li>
                              <li>
                                <a href="/veri-depolama-x-c103664"
                                  >Veri Depolama</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="normal-column">
                          <div class="category-box">
                            <a
                              href="/oyunculara-ozel-urunler-y-s10179"
                              class="sub-category-header"
                              >Oyunculara Özel</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/playstation-konsollari-x-c104270"
                                  >Playstation</a
                                >
                              </li>
                              <li>
                                <a href="/xbox-konsollari-x-c104272">Xbox</a>
                              </li>
                              <li>
                                <a href="/nintendo-x-b104993">Nintendo</a>
                              </li>
                              <li>
                                <a href="/playstation-oyunlari-x-c105797"
                                  >Playstation Oyunları</a
                                >
                              </li>
                              <li>
                                <a href="/konsol-aksesuarlari-x-c104045"
                                  >Konsol Aksesuarları</a
                                >
                              </li>
                              <li>
                                <a href="/oyuncu-bilgisayari-x-c106083"
                                  >Oyuncu Bilgisayarı</a
                                >
                              </li>
                              <li>
                                <a href="/oyuncu-donanimlari-x-c144420"
                                  >Oyuncu Donanımları</a
                                >
                              </li>
                              <li>
                                <a href="/oyuncu-monitor-x-c106087"
                                  >Oyuncu Monitörleri</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/foto-ve-kamera-x-c104037"
                              class="sub-category-header"
                              >Foto &amp; Kamera</a
                            >
                            <ul class="sub-item-list">
                              <li>
                                <a href="/aksiyon-kamera-x-c104245"
                                  >Aksiyon Kamera</a
                                >
                              </li>
                              <li>
                                <a href="/dijital-fotograf-makineleri-x-c104042"
                                  >Fotoğraf Makinesi</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="category-box">
                            <a
                              href="/dijital-kod--urunler-x-c109056"
                              class="sub-category-header"
                              >Dijital Kod &amp; Ürünler</a
                            >
                            <ul class="sub-item-list"></ul>
                          </div>
                        </div>
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="tab-link">
                  <a
                    href="/butik/liste/22/spor--outdoor"
                    class="category-header"
                    >Spor&amp;Outdoor</a
                  >
                  <div class="sub-nav" id="sub-nav-22">
                    <div class="sub-nav-center">
                      <div class="sub-nav-outer">
                        <div class="campaign-container">
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                          <div class="normal-column small-collection-container">
                            <a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt="" /></a
                            ><a href="javascript:void(0)"
                              ><img
                                src="https://cdn.dsmcdn.com/web/production/placeholderSmall.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div id="container-background"></div>
        </div>
      </div>
    </div>
  </div>
</template>
