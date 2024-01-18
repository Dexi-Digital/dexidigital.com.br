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
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Database</p>
        <div class="reverse-inner">
          <div class="image-tecnologias data">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Servers</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias server">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">DevOps</p>
        <div class="reverse-inner">
          <div class="image-tecnologias devops">
          </div>
        </div>
      </div>
      <WhatsappButton />
    </div>
    <FooterComponent />
  </div>
</template>
<script scoped>
export default {
  name: 'HomeView',
  components: {
  NavBar: () => import('../components/NavBar.vue'),
  FooterComponent: () => import('../components/FooterComponent.vue'),
  WhatsappButton: () => import('../components/WhatsappButton.vue'),
  CarouselComponent: () => import('../components/CarouselComponent.vue')
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
.mobile {
  background-image: url('../assets/mobile.png');
}
.data {
  background-image: url('../assets/data.png');
}
.server {
  background-image: url('../assets/server.png');
}
.devops {
  background-image: url('../assets/dev.png');
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
    }
    100% {
      transform: translateX(-100);
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
    }
    100% {
      transform: translateX(-100);
    }
  }
}
.container-home {
  background-color: white;
}
.navbar-brand:hover {
  color: #1976d2;
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
  background: linear-gradient(to right, #158BBF, #2900e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 50px;
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

.btn-contact {
    padding: 15px !important;
    color: white !important;
    box-shadow: none;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    width: 280px;
    text-align: center;
    transition: background-color 0.5s, box-shadow 0.5s, transform 0.5s;
    background-color: #000000 !important;
}
.btn-contact:hover {
    color: #ffffff !important;
    cursor: pointer;
    box-shadow: none;
    background-color:#1693e7 !important;
}.process-details-title {
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
  height: 80%;
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
.content-home-image{
  padding: 0 0 0 50px!important;
}

@media screen and (min-width:320px) and (max-width: 480px) {
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
    margin-left:50px 10px 0 10px!important;
  }

  .process-details-subtitle {
    margin: 40px 30px 0 30px;
  }

  .content-btn-contact {
    padding-top: 30px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
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
  .content-home-image{
    padding: 0 !important;
  }
  .background-image-content {
    display: none;
  }
  .title-home {
    text-align: center;
    padding: 120px 5px 10px 5px!important;
    font-size: 43px;
  }
  .title {
    font-size: 43px!important;
    font-weight: bold!important;
    text-align: center;
  }
  .description-home,
  .description-home-br {
    text-align: center;
    font-size: 14px;
  }
  .content-btn-contact {
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  .details-img {
    width: 100% !important;
    height: 100% !important;
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
  .btn-contact{
    width: 250px;
    font-size: 14px;
  }
  .custom-subtitle-services {
    padding: 0 60px;
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
  }
  .content {
    width: 55%;
  }
  .title, .title-home {
    font-size: 36px !important;
  }
  .description-home,
  .description-home-br {
    font-size: 20px;
  }
}
@media screen and (min-width: 1201px) {
  .title-home {
    padding-top: 120px !important;
  }
  .content {
    width: 47%;
  }
  .title , .title-home{
    font-size: 42px !important;
  }
  .description-home,
  .description-home-br {
    font-size: 20px;
  }
  .custom-subtitle-services {
    padding: 0 200px 0 200px;
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
    height: 400px;  
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
    padding-top: 210px !important;
    font-size: 50px;
  }
  .title {
    font-size: 55px !important;
  }
  .description-home,
  .description-home-br {
    font-size: 24px;
    font-weight: 500;
  }
  .btn-contact{
    margin-top: 30px!important;
  }
}

@media screen and (min-width: 1921px) and (max-width: 2400px) {
  .title-home {
    padding-top: 120px !important;
  }
  .title,   .title-home {
    font-size: 50px !important;
  }
  .description-home,
  .description-home-br {
    font-size: 27px;
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