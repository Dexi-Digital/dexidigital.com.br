<template>
    <div class="services-content">
        <div class="services">
            <h1 class="custom-title-services">{{ $t("services-section.our-services") }}</h1>
            <div class="custom-subtitle-services-content">
                <p class="details-custom-subtitle-services">
                    {{ $t("services-section.dynamic-teams") }}</p>
            </div>
        </div>
        <div class="swiper-container">

            <swiper :options="swiperOptions" ref="mySwiper" class="teste" style="margin-right: 0;">

                <swiper-slide v-for="item in items" :key="item.id">
                    <router-link :to="item.link">
                        <div class=" teste-dois">
                            <v-card class="mx-auto content-card-home">
                                <v-card-text class="information-services-content">
                                    <div class="information-services">
                                        <h4 class="title-services">{{ $t(item.title) }}</h4>
                                    </div>
                                </v-card-text>
                                <div class="container-img">
                                    <img class="img-services" :src="item.src" alt="item.alt">
                                </div>
                            </v-card>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>

        </div>

        <div class="stella">
            <button id="swiper-button-next-id" class="swiper-next swiper-button-next" @click="nextSlide"></button>
            <button class="swiper-prev swiper-button-prev" @click="prevSlide"></button>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import 'swiper/swiper-bundle.css'; // Atualize esta linha
import 'swiper/swiper-bundle.css'; // Atualize esta linha

export default {
    name: 'CarouselView',
    data() {
        return {
            intervalOfLoop: null,
            swiperInstance: null,
            spaceBetween: 30,
            grabCursor: true,



            swiperOptions: {
                autoplay: 2000,



                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }, breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    }
                },
            },
            items: [
                { id: 1, title: "services-section.it-outsourcing", src: require('../assets/img-1.png'), alt: "Outsourcing de TI", link: "/outsourcing-de-ti" },
                { id: 2, title: "services-section.mobile-applications", src: require('../assets/img-2.png'), alt: "Aplicativos Mobile", link: "/aplicativos-mobile" },
                { id: 3, title: "services-section.development-squads", src: require('../assets/img-3.png'), alt: "Squads de Desenvolvimento", link: "/squad-de-desenvolvimento" },
                { id: 4, title: "services-section.digital-experience", src: require('../assets/img-4.png'), alt: "Experiência Digital", link: "/experiencia-digital" },
                // Adicione mais itens conforme necessário
            ],

        }
    },

    components: {
        swiper,
        swiperSlide,
    },
    computed: {
        swiper() {
            return this.$refs.swiper.$swiper
        }
    },
    methods: {
        nextSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slideNext();
            }
        },
        prevSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slidePrev();
            }
        },



        //    onSwiper(swiper) {
        //        swiper.on('afterInit', () => {
        //            this.swiperInstance = swiper;
        //             // Chame nextSlide após a inicialização completa do Swiper
        //              this.nextSlide();
        //          });
        //      },
    },
    mounted() {
        // Obtenha a instância do Swiper usando refs
        this.swiperInstance = this.$refs.mySwiper.swiper;

        // Forca o clique do botão de proximo a cada 3s
        // this.intervalOfLoop = setInterval(() => {
        //     document.getElementById('swiper-button-next-id').click();
        // }, 2000);

    },
    // onDestroy() {
    //     clearInterval(this.intervalOfLoop);
    // }
}
</script>
    
<style scoped>
.stella {
    position: relative;
    z-index: 1;
    justify-content: center !important;
    display: flex;
    height: 50px;
}

.teste {
    width: 70% !important;
    padding: 10px;
}

.teste-dois {
    padding: 8px;
    margin-right: 0;
}


.services {
    text-align: center;
    margin-top: 100px;
}

.custom-title-services {
    font-weight: 700;

    color: #333333;
}


.title-services {
    font-size: 14px;
    text-align: center;
    color: #2b2b2b;
    font-weight: bold;

}

.custom-subtitle-services-content {
    display: flex;
    justify-content: center;
}

.details-custom-subtitle-services {
    font-weight: 300;
    width: 620px !important;
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
}

.information-services-content {
    padding: 10px 0 10px 0;
}

@media screen and (max-width: 481px) {
    .services {
        margin-top: 50px !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    .title-services {
        font-size: 18px !important;

    }

    .content-card-home {
        padding: 20px 10px 20px 10px;
    }
}

@media screen and (min-width: 640px) and (max-width: 768px) {
    .title-services {
        font-size: 12px !important;

    }

    .content-card-home {
        padding: 20px 10px 20px 10px !important;

    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {


    .services {
        margin-top: 60px;
    }
}

@media screen and (min-width: 768px) {
    .services {
        margin-top: 0;
    }

}

@media screen and (min-width: 768px) and (max-width: 940px) {
    .custom-title-services {
        padding-top: 60px;
    }

    .custom-subtitle-services {
        padding: 0 60px;
    }

    .title-services {
        font-size: 15px !important;

    }

    .content-card-home {
        padding: 20px 10px 20px 10px !important;
    }

    .img-services {
        width: 80% !important;
        height: 80% !important;
    }
}

@media screen and (min-width: 941px) and (max-width: 1024px) {

    .custom-title-services {
        padding-top: 60px;
    }

    .custom-subtitle-services {
        padding: 0 60px;
    }

    .title-services {
        font-size: 21px !important;

    }

    .content-card-home {
        padding: 20px 0px 20px 0px !important;
    }

    .img-services {
        width: 80% !important;
        height: 80% !important;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {

    .title-services {
        font-size: 14px !important;
    }

    .custom-title-services {
        padding-top: 20px;
    }

    .content-card-home {
        padding: 20px 10px 20px 10px !important;
    }

}

@media screen and (min-width: 1201px) {
    .title-services {
        font-size: 14.5px !important;

    }

    .custom-title-services {
        padding-top: 40px;
    }

    .custom-subtitle-services {
        padding: 0 200px 0 200px;
    }
}

@media screen and (min-width: 1201px) and (max-width: 1440px) {


    .custom-title-services {
        padding-top: 80px !important;
    }
}

@media screen and (min-width: 1441px) {
    .custom-title-services {
        padding-top: 120px;
    }
}

@media screen and (min-width: 1921px) and (max-width: 2400px) {


    .custom-title-services {
        padding-top: 287px;
    }
}

@media screen and (min-width: 2401px) {
    .custom-title-services {
        padding-top: 224px !important;
    }

}

.swiper-container {
    width: 100%;
    justify-content: center !important;
    display: flex;
    z-index: 1;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
}

.content-card-home {


 
    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    box-shadow: 0px 22px 25px -13px #6ad2ff !important;



    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    background-color: transparent;
    border-radius: 40px;
    /* border: 1.5px solid rgb(208 208 208); */
    box-shadow: 0px 22px 25px -13px #6ad2ff !important;
    width: 270px;
    transition: border 300ms ease 0ms,box-shadow 300ms ease 0ms;
    padding: 20px;

}

.content-card-home:hover {

    box-shadow: 0px 15px 35px 0px rgba(112,144,176,0.2)!important;


}





.container-img {
    display: flex;
    justify-content: center;
}

.img-services {
    width: 150px;
    height: 150px;
    align-items: center;

}


.v-application a {
    text-decoration: none !important;
}

.swiper-button-container-flex {
    justify-content: center;
    position: relative;
}

.swiper-button-container {

    display: flex;

    margin-top: 10px;
    /* Ajuste conforme necessário */

    width: 100px;
    height: 100px;
    align-items: center;
}

.swiper-prev,
.swiper-next {

    font-size: 10px !important;
    border-radius: 100%;
    border: 1px solid #158BBF;
    padding: 4px 9px;
    cursor: pointer;
    height: 25px;
    width: 25px;
}

.swiper-prev {
    position: relative;
    top: 40px;
    left: -30px;

}

.swiper-next {

    position: relative;
    top: 40px;
    left: 30px;

}

.swiper-prev:after,
.swiper-next:after {
    font-size: 13px;
    color: #158BBF !important;
    font-weight: bold !important;
}

.swiper-prev:hover,
.swiper-next:hover {
    color: white !important;
    background: #158BBF !important;
}

.swiper-prev:hover:after,
.swiper-next:hover:after {
    color: white !important;
    background: #158BBF !important;
}</style>