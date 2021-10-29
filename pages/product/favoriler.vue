<template>
  <div
    data-fragment-name="Favorites"
    data-fragment-id="89d58e72-5b41-4c29-9ea7-c57cd01805d6"
    data-tracker-root="onTrackerLoaded"
  >
    <link
      type="text/css"
      rel="stylesheet"
      href="https://cdn.dsmcdn.com/web/production/favorites.v1.2952a846f8c2b80f44f9db320a7dc001.css"
    />
    <div id="account-gw-favorites">
      <div class="favorites-wrapper">
        <div class="favorites-header">
          <div class="favorites-header-wrapper">
            <div class="header-left-section">
              <a class="active" href="/Hesabim/Favoriler"
                ><i class="i-heart-orange"></i><span>Favorilerim</span></a
              ><a href="/koleksiyonlar/koleksiyonlarim"
                ><i class="i-collection"></i><span>Koleksiyonlarım</span
                ><span class="new">YENİ</span></a
              >
            </div>
            <div class="header-right-section">
              <div class="searchbox-wrapper">
                <div class="click-outside">
                  <input
                    type="text"
                    class="search-input input-passive"
                    placeholder="Favorilerimde ara"
                    value=""
                  /><i class="search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="favorites-special-filters-header"></div>
        <div class="empty-favorites">
          <i class="i-heart-orange"></i>
          <p class="empty-favorites-header">Favoriler Listeniz Henüz Boş</p>
          <p class="empty-favorites-text">
            Favori listenizde ürün bulunamadı.
            <span class="text-dark">“Alışverişe Başla”</span> butonuna
            tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.
          </p>
          <div class="button-wrapper">
            <div class="button round-3 button-orange">
              <a href="/">Alışverişe Başla</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="application/javascript">
      window.__FAVORITES_APP_INITIAL_STATE__ = {
        configuration: {
          CdnPath: 'https://cdn.dsmcdn.com',
          CurrencySymbol: 'TL',
          FavoritesItemCount: 12,
          LanguageCode: 'tr',
          recoGwUrl:
            'https://public-mdc.trendyol.com/discovery-web-recogw-service',
          ProductCustomStampsEnabled: true,
          StorefrontId: 1,
          culture: 'tr-TR',
          isLegalRequirementConfirmed: false,
          ShowAddToBasketDiv: true,
          ShowFavoritesCount: true,
          SearchHistoryMaxItemLength: 5,
          productStampType: 'TypeA',
          SearchBoxEnabled: true,
          ShowCollectionsMenu: true,
          PriceBadgeFilterNotFoundTitle: 'Fırsat Ürünlerini Kaçırma!',
          PriceBadgeFilterNotFoundDesc:
            'Favorilerine eklenmiş fırsat ürünü bulamadık.',
          PriceBadgeFilterNotFoundCta: 'Fırsat Ürünlerini Gör',
          rushDeliveryWordingAbTest: 'B',
          checkoutGwUrl:
            'https://public-sdc.trendyol.com/discovery-web-checkout-service',
        },
      }
      window.TYPageName = 'favorites'
    </script>
    <script
      type="application/javascript"
      src="https://cdn.dsmcdn.com/web/production/favorites.bundle.f744fdcdfc35dc89debafb62aa22eb94.js"
      defer=""
    ></script>
  </div>
</template>