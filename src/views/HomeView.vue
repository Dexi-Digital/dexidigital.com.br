<template>
  <div class="container-home">
    <NavBar />
    <div class="content-home-image">
      <div class="content">
        <p class="title-home">
          <span class="title-home-degrade"> {{ $t("header.title") }} {{ $t("header.title2") }}
          </span>
        </p>
        <p class="title">{{ $t("header.title-br") }}</p>
        <p class="description-home ">{{ $t("header.description") }} </p>
        <p class="description-home-br"> {{ $t("header.description-br") }} </p>
      </div>
      <div class="content-btn-contact">

        <router-link class="nav-link active btn-contact" to="/fale-conosco">
          <button>
            {{ $t("header.contact-button") }}
          </button>
        </router-link>
      </div>



      <div>
        <div class="background-image-content">
          <img class="background-image" src="../assets/image-home.png" alt="imagem Home">
        </div>
      </div>

    </div>
     <CarouselComponent />  
<!--   
     <div class="details-services">
      <div class="services">
        <h1 class="custom-title-services">{{ $t("services-section.our-services") }}</h1>
        <div class="custom-subtitle-services-content">
          <p class="details-custom-subtitle-services">
            {{ $t("services-section.dynamic-teams") }}</p>
        </div>
      </div>
      <div class="content-home">
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-1.png" alt="Outsourcing de TI">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services"> {{ $t("services-section.it-outsourcing") }}</h4>
              <p class="description-services">
                {{ $t("services-section.it-outsourcing-description") }}
              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-2.png" alt="Aplicativos Mobile">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services"> {{ $t("services-section.mobile-applications") }}</h4>
              <p class="description-services">
                {{ $t("services-section.mobile-applications-description") }}

              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-3.png" alt="Squads de desenvolvimento">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services"> {{ $t("services-section.development-squads") }}
              </h4>
              <p class="description-services">
                {{ $t("services-section.development-squads-description") }}
              </p>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-4.png" alt="Experiência digital">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services"> {{ $t("services-section.digital-experience") }}
              </h4>
              <p class="description-services">
                {{ $t("services-section.digital-experience-description") }}

              </p>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>  -->
    <div class="process-details">
      <h1 class="process-details-title"  v-html="$t('development-process-section.development-process')"> </h1>
      <div class="process-details-subtitle-content">
        <p class="process-details-subtitle"> {{ $t("development-process-section.development-process-description") }}</p>
      </div>
      <div class="process-details-img">
        <img class="details-img" src="../assets/details.png" alt="">
      </div>
    </div>
    <div class="tecnologias">
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Front-end</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias front">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Back-end</p>
        <div class="reverse-inner">
          <div class="image-tecnologias back">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Project Management</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias project">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Big Data</p>
        <div class="reverse-inner">
          <div class="image-tecnologias big">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Mobile App Development</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias mobile">
            <img class="server-img" src="../assets/mobile.png" alt="Mobile">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Database</p>
        <div class="reverse-inner">
          <div class="image-tecnologias data">
            <img class="server-img" src="../assets/data.png" alt="Database">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Servers</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias server">
            <img class="server-img" src="../assets/server.png" alt="Servers">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">DevOps</p>
        <div class="reverse-inner">
          <div class="image-tecnologias dev">
            <img class="server-img" src="../assets/dev.png" alt="dev">
          </div>
        </div>
      </div>
      <WhatsappButton />
    </div>
    <FooterComponent />
  </div>
</template>

<script scoped>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import Vue from 'vue'
import WhatsappButton from '../components/WhatsappButton.vue';
import CarouselComponent from '../components/CarouselComponent.vue';

import VueMeta from 'vue-meta'
Vue.use(VueMeta);

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterComponent,
    WhatsappButton,
     CarouselComponent
  },

  mounted() {
    this.$gtag.pageview('/HomeView');
  },
  metaInfo() {
    return {

      title: 'Desenvolvimento de Aplicações Seguras | Dexi Digital',
      meta: [
        { name: 'description', content: 'Promova a confiança e a lealdade à marca por meio de experiências personalizadas. Conheça nossos serviços de Outsourcing de TI, Aplicativos Mobile, Squads de Desenvolvimento e Experiência Digital.' },
        { name: 'keywords', content: 'desenvolvimento de aplicações, aplicações seguras, outsourcing de TI, aplicativos mobile, squads de desenvolvimento, experiência digital, empresa XYZ' },
        { property: 'og:title', content: 'Desenvolvimento de Aplicações Seguras | Dexi Digital' },
        { property: 'og:description', content: 'Promova a confiança e a lealdade à marca por meio de experiências personalizadas. Conheça nossos serviços de Outsourcing de TI, Aplicativos Mobile, Squads de Desenvolvimento e Experiência Digital.' },
        { property: 'og:image', content: 'https:dexidigital.com.br/assets/dexi.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https:dexidigital.com.br/' },
        { property: 'og:site_name', content: 'Dexi Digital' },
        { property: 'instagram:site', content: 'dexi.digital' },
        { property: 'company', content: 'Dexi Digital' },
      ]
    };
  }
}
</script> 
<style scoped>
/* .tecnologias {
 height: calc(100vh -10px);
} */

.background-image-content {
  display: flex;
  justify-content: end;

}

.background-image {
  height: 438px;
  position: absolute;
  top: 45px;
  display: flex;
  justify-content: end;

}

.image-tecnologias {
  width: 100%;
  height: 80%;
  background-size: contain;
  background-repeat: no-repeat;
}

.front {
  background-image: url('../assets/front.png');
}

.back {
  background-image: url('../assets/back.png');
}

.project {
  background-image: url('../assets/project.png');
}

.big {
  background-image: url('../assets/big.png');
}

.server-img {
  height: 50px;
}

@media screen and (min-width: 768px) {

  .server-img {
    display: none !important;
  }

  .moving-logos-wrapper {
    overflow: hidden;
    margin: auto;

  }

  .moving-logos-inner {
    height: 100px;
    -webkit-animation: moving-logos 20s linear infinite;
    animation: moving-logos 20s linear infinite;
  }

  @keyframes moving-logos {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    50% {
      transform: translateX(-100px);
      /* Move para a esquerda (ajuste o valor conforme necessário) */
    }

    100% {
      transform: translateX(-100);
      /* Retorna para a posição original */
    }
  }

  .reverse-wrapper {

    overflow: hidden;
    margin: auto;
  }

  .image-tecnologias {
    width: 100%;
    height: 70%;
    background-repeat: repeat;
    background-size: contain;
    background-repeat: repeat;
  }

  .front {
    background-image: url('../assets/front.png');
  }

  .back {
    background-image: url('../assets/back.png');
  }

  .project {
    background-image: url('../assets/project.png');
  }

  .big {
    background-image: url('../assets/big.png');
  }

  .mobile {
    background-image: url('../assets/mobile.png');
  }

  .data {
    background-image: url('../assets/data.png');
  }

  .server {
    background-image: url('../assets/server.png');

  }

  .dev {
    background-image: url('../assets/dev.png');
  }

  .reverse-inner {
    height: 100px;
    -webkit-animation: reverse 20s linear infinite;
    animation: reverse 20s linear infinite;
  }

  @keyframes reverse {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    50% {
      transform: translateX(100px);
      /* Move para a esquerda (ajuste o valor conforme necessário) */
    }

    100% {
      transform: translateX(-100);
      /* Retorna para a posição original */
    }
  }
}

.container-home {
  background-color: white;
}

.navbar-brand:hover {
  color: #1976d2;
}

.content-home {
  padding: 70px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.content-card-home {
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid rgb(208 208 208);
  box-shadow: none !important;
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  margin: 10px !important;
}

.container-img {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.img-services {
  height: 100px;

}

.title-home {
  color: #333333;
  font-size: 44px;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  line-height: 1.3em;
  margin: 0;
  padding: 120px 0 10px 0;

}

.title {
  color: #333333;
  font-size: 44px;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  line-height: 1.3em;
  margin: 0;
}

.title-home-degrade {
  background: #158BBF;
  background: -webkit-linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
  background: -moz-linear-gradient(to right, #158BBF 60%, #4A00E0 100%);
  background: linear-gradient(to right, #158BBF 50%, #2900e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.description-home {
  font-weight: 400;
  color: #333333;
  padding: 20px 20px 0 20px;
  margin: 0;
}

.description-home-br {
  font-weight: 400;
  color: #333333;
  padding: 0 20px 0 20px;
}

.custom-title-services {
  font-weight: 700;
  color: #333333;
}

.custom-subtitle-services {
  font-size: 20px;
  font-weight: 300;
  color: #333333;
}

.btn-contact {
  padding: 10px;
  color: white;
  background-color: #000000;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  transition: background-color 2s, box-shadow 2s, transform 2s;
  /* Adiciona uma transição de 2 segundos para as propriedades alteradas no hover */
}

.btn-contact:hover {
  color: white;
  cursor: pointer;
  box-shadow: 0 0 5px rgb(0, 0, 0);
  transform: scale(1.06);
}

.btn-contact:hover-out {

  box-shadow: none;
  /* Remove a sombra quando o mouse sai do botão */
  transform: scale(1);
  /* Retorna ao tamanho original quando o mouse sai do botão */
}


.services {
  text-align: center;
  margin-top: 100px;
}

.title-services {
  color: #332e94;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.description-services {
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}

.process-details-title {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 20px 10px;
  margin: 0;
  color: #333333;
}

.process-details-subtitle-content {
  display: flex;
  justify-content: center;

}

.custom-subtitle-services-content {
  display: flex;
  justify-content: center;
}

.details-custom-subtitle-services {
  font-weight: 300;
  width: 620px !important;
  font-size: 20px;
  padding-top: 20px;
}

.process-details-subtitle {
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin: 0 30px;
  width: 90% !important;
}

.process-details-img {
  display: flex;
  justify-content: center;
}

.details-img {
  width: 80%;
  padding: 40px 0;
}

.title-tecnologias {
  text-align: center;
  font-weight: 600;
  color: #333333;
  margin: 0;
  text-transform: uppercase;
}

.image-tecnologias {
  display: flex;
  justify-content: center;
  height: 70px;
}

.content-home-image {

  padding: 0px 0px 0 50px !important;
}

@media screen and (min-width:320px) and (max-width: 480px) {
  .content-card-home {
    width: 100%;
  }

  .content {
    width: 100%;
  }

  .content-home {
    padding: 20px !important;
  }

  .btn-contact {
    width: 275px;
    font-size: 17px;
  }
}

@media screen and (max-width:500px) {
  .custom-subtitle-services {
    padding: 0 30px;
  }
}

@media screen and (min-width: 500px) and (max-width: 767px) {
  .content {

    padding: 0 91px 0 91px;
    width: 100%;
  }
}

@media screen and (max-width: 481px) {
  .services {
    margin-top: 50px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  .process-details-subtitle {
    margin: 40px 30px 0 30px;
  }

  .content-btn-contact {
    padding-top: 30px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .content-card-home {
    width: 45%;
  }

  .services {
    margin-top: 60px;
  }

  .process-details {
    margin-top: 60px;
  }

  .btn-contact {

    width: 275px;
    font-size: 17px;
    padding: 10px 11px 10px 11px;
  }

}

@media screen and (min-width: 769px) {
  .btn-contact {
    font-size: 16px;
    width: 270px;
    padding: 10px 11px 10px 11px;
  }
}

@media screen and (min-width: 767px) {
  .title-home {
    padding: 120px 20px 0px 20px;
  }

  .title {
    padding: 0 20px 0px 20px;
  }

  .content-btn-contact {
    padding-left: 20px;
  }

}

@media screen and (max-width: 767px) {
  .content-home-image {
    padding: 0 !important;
  }

  .background-image-content {
    display: none;
  }

  .title-home {
    font-size: 2rem;
    text-align: center;
    padding: 120px 0 10px 0;
  }

  .title {
    font-size: 2rem !important;
    text-align: center;
  }

  .description-home,
  .description-home-br {
    text-align: center;
  }

  .content-btn-contact {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .details-img {
    width: 100% !important;
  }
}

@media screen and (min-width: 768px) {
  .services {
    margin-top: 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .background-image {
    height: 335px;
    position: absolute;
    top: 45px;
    width: 52%;
    display: flex;
    justify-content: end;
  }

  .content {
    width: 55%;
  }

  .title-home {
    padding-top: 120px !important;
    font-size: 23px;
  }

  .title {
    font-size: 23px !important;
  }

  .custom-title-services {
    padding-top: 60px;
  }

  .custom-subtitle-services {
    padding: 0 60px;
  }

  .content-card-home {
    width: 30%;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .background-image {
    height: 335px;
    position: absolute;
    top: 45px;
    width: 52%;
    display: flex;
    justify-content: end;
  }

  .title-home {
    padding-top: 120px !important;
    font-size: 36px;
  }

  .content {
    width: 55%;
  }

  .title {
    font-size: 36px !important;
  }

  .custom-title-services {
    padding-top: 20px;
  }

  .content-card-home {
    width: 23%;
  }

  .description-home,
  .description-home-br {
    font-size: 20px;
  }

  /* .custom-subtitle-services {
    padding: 0 200px 0 200px;
  } */
}

@media screen and (min-width: 1201px) {

  .title-home {
    padding-top: 120px !important;
    font-size: 42px;
  }

  .content {
    width: 47%;
  }

  .title {
    font-size: 42px !important;
  }

  .content-card-home {
    width: 22%;
  }

  .description-home,
  .description-home-br {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 200px 0 200px;
  }

  .custom-title-services {
    padding-top: 40px;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1440px) {
  .background-image {
    height: 417px;
    position: absolute;
    top: 30px;
    width: 58%;
    display: flex;
    justify-content: end;
  }

  .process-details-subtitle {
    width: 900px !important;
  }

  .content-card-home {
    width: 350px !important;
  }

  .custom-title-services {
    padding-top: 80px !important;
  }

  .content-home {
    padding: 50px 20px;
  }

  .description-home,
  .description-home-br {
    font-size: 20px;
  }
}

@media screen and (min-width: 1441px) {

  .process-details-subtitle {
    width: 1100px !important;
  }

  .details-img {
    width: 1300px;
  }

  .content-card-home {
    width: 400px !important;

  }

  .custom-title-services {
    padding-top: 120px;
  }
}

@media screen and (min-width: 1441px) and (max-width: 1920px) {
  .content-home-image {
    padding: 80px 0px 0 100px;
  }

  .background-image {
    height: 580px;
    position: absolute;
    top: 60px;
    width: 52%;
    display: flex;
    justify-content: end;
  }

  .title-home {
    padding-top: 120px !important;
    font-size: 42px;
  }

  .title {
    font-size: 42px !important;
  }

  .description-home,
  .description-home-br {
    font-size: 28px;
  }
}

@media screen and (min-width: 1921px) and (max-width: 2400px) {
  .title-home {
    padding-top: 120px !important;
    font-size: 50px;
  }

  .title {
    font-size: 50px !important;
  }

  .description-home,
  .description-home-br {
    font-size: 27px;
  }

  .content-home-image {
    padding: 80px 0px 0 15%;
  }

  .custom-title-services {
    padding-top: 287px;
  }

  .background-image {
    height: 28%;
    position: absolute;
    top: -70px;
    width: 52%;
    display: flex;
    justify-content: end;
  }

}

@media screen and (min-width: 2401px) {
  .custom-title-services {
    padding-top: 224px !important;
  }

  .content {
    width: 35%;
  }

  .title-home {
    padding-top: 120px !important;
    font-size: 65px;
  }

  .title {
    font-size: 49px !important;
  }

  .description-home,
  .description-home-br {
    font-size: 27px;
  }

  .content-home-image {
    padding: 80px 0px 0 20% !important;
  }

  .background-image {
    height: 28%;
    position: absolute;
    top: -70px;
    width: 52%;
    display: flex;
    justify-content: end;
  }
}
</style>