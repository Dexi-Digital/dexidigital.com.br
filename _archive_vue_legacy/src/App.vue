<template>
  <v-app>
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueMeta from "vue-meta";
Vue.use(VueMeta);


/**
 * Componente principal da aplicação.
 */
export default {
  name: "App",
  methods: {
    changeFirstLetterToUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  updated() {
    this.$gtag.pageview(this.$router.currentRoute.path);
  },
  mounted() {
    this.$gtag.pageview(this.$router.currentRoute.path);
  },
  /**
   * Retorna as informações de metadados para a página.
   * @returns {Object} As informações de metadados.
   */
  metaInfo() {
    return {
      title: `${this.changeFirstLetterToUpperCase(this.$router.currentRoute.name)} | Dexi Digital`,
      meta: [
        {
          name: "description",
          content:
            "Promova a confiança e a lealdade à marca por meio de experiências personalizadas. Conheça nossos serviços de Outsourcing de TI, Aplicativos Mobile, Squads de Desenvolvimento e Experiência Digital.",
        },
        {
          name: "keywords",
          content:
            "desenvolvimento de aplicações, aplicações seguras, outsourcing de TI, aplicativos mobile, squads de desenvolvimento, experiência digital, empresa XYZ",
        },
        {
          property: "og:title",
          content: "Desenvolvimento de Aplicações Seguras | Dexi Digital",
        },
        {
          property: "og:description",
          content:
            "Promova a confiança e a lealdade à marca por meio de experiências personalizadas. Conheça nossos serviços de Outsourcing de TI, Aplicativos Mobile, Squads de Desenvolvimento e Experiência Digital.",
        },
        {
          property: "og:image",
          content: "https:dexidigital.com.br/assets/dexi.svg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https:dexidigital.com.br/" },
        { property: "og:site_name", content: "Dexi Digital" },
        { property: "instagram:site", content: "dexi.digital" },
        { property: "company", content: "Dexi Digital" },
      ],
    };
  },
};
</script>
