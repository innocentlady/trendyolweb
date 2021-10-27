<template>
  <div id="browsing-gw-homepage">
    <div
      class="circled-slider"
      data-tracker="seen:homepage-component"
      data-id="631679"
      data-type="widget"
      data-eventkey="TopSlider_none_1_"
    >
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          ><a
            href="https://www.trendyol.com/sanaozel/1?versionKey=singleProducts_JFY_Original_Woman"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15551619355300_SanaOzel.png"
            /><span>Sana Özel</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/sr/?fl=encoksatanurunler"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15551619355311_SenDeAl.png"
            /><span>Sen De Al!</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a href="https://www.trendyol.com/s/oyun-eglence-egitim" class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/automation/2020/12/30/EglenceWeb_202012301831.png"
            /><span>Kodlar &amp; Hizmetler</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/trendyolmilla-x-b101476"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png"
            /><span>TrendyolMilla</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/magaza/madame-coco-m-612?sst=0"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355148_MadameCoco.png"
            /><span>Madame Coco</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/magaza/pullbear-m-112044?sst=0"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/5/24/20210524_17061621865162_Pullbear.png"
            /><span>Pull &amp; Bear</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/magaza/koton-m-637?sst=0"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355115_Koton.png"
            /><span>Koton</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/magaza/avva-m-107671?sst=0"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354848_Avva.png"
            /><span>Avva</span></a
          ></swiper-slide
        >
        <swiper-slide
          ><a
            href="https://www.trendyol.com/magaza/defacto-m-1188?sst=0"
            class="item"
            ><img
              loading="lazy"
              src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/7/30/Defacto_202107301618.png"
            /><span>DeFacto</span></a
          ></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
        <div
          class="swiper-button-prev"
          style="height:2px width:2px"
          slot="button-prev"
        ></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 11,
        spaceBetween: 5,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
}
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  background-color: rgba(255, 255, 255, 0.5);
  right: 30px;
  padding: 5px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
}
</style>