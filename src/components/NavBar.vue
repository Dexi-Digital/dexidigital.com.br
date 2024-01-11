<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <router-link  to="/">
        <img class="logo" alt="logo-dexi" src="../assets/dexi.svg" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">

          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link " to="/" :class="{ 'active': $route.path === '/' }">{{ $t("nav.home")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/blog" :class="{ 'active': $route.path === '/blog' }">{{
                $t("nav.content") }}
              </router-link>
            </li>
          </ul>

          <router-link class="nav-link-services " @click="goToAnotherPage" to="/"
            :class="{ 'active': $route.path === '/services' }">
            {{ $t("nav.services") }}
          </router-link>

          <VMenu offset-y v-model="menu">
            <template v-slot:activator="{ on }">
              <v-btn class="btn-menu" icon v-on="on">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list class="list">
              <v-list-item>
                <v-list-item-title><a class="dropdown-item" href="/outsourcing-de-ti">
                    {{ $t("nav.it-outsourcing") }}</a></v-list-item-title>
                <v-list-item-title> <a class="dropdown-item" href="/aplicativos-mobile">
                    {{ $t("nav.mobile-apps") }}</a></v-list-item-title>
                <v-list-item-title> <a class="dropdown-item" href="/squad-de-desenvolvimento">
                    {{ $t("nav.development-squad") }}</a></v-list-item-title>
                <v-list-item-title> <a class="dropdown-item" href="/experiencia-digital">
                    {{ $t("nav.digital-experience") }}</a></v-list-item-title>


              </v-list-item>
            </v-list>
          </VMenu>

          <div class="icon-language" v-if="openedArticle">
            <input type="radio" id="en" v-model="$i18n.locale" value="en" style="display: none">
            <label for="en">

              <button @click="switchLanguage('en')" class="me-2">
                <img src="../assets/en-icon.svg" alt="English">
              </button>
            </label>

            <input type="radio" id="pt-BR" v-model="$i18n.locale" value="pt-BR" style="display: none">
            <label for="pt-BR">
              <button @click="switchLanguage('pt-BR')" class="me-2">
                <img src="../assets/br-icon.svg" alt="Português">
              </button>
            </label>
          </div>
          <div v-else>

          </div>
        </div>
      </div>


    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',

  data() {
    return {
      // showLocaleSwitcher: true,
      menu: false,
      items: ['Action', 'Another action', 'Something else here...']
    }
  },
  props: {
    openedArticle: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switchLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setLanguage', language);
      setTimeout(() => {
        location.reload();
      }, 300);

    }, selectItem(item) {
      // Add your logic for handling the selected item here
      console.log('Selected Item:', item);
      this.menu = false; // Close the dropdown after selecting an item
    },
    goToAnotherPage() {
      // Add your logic to navigate to another page
      console.log('Navigating to another page');
      // Example: this.$router.push('/another-page');
    }

    // setLanguageToPortuguese() {
    //   this.switchLanguage('pt-BR');
    // },
    // setLanguageToEnglish() {
    //   this.switchLanguage('en');
    // },

  }
}
</script>

<style scoped>
.v-list-item {
  display: block !important;
}

.btn-dropdown {
  box-shadow: none;
  background-color: transparent;
  font-weight: 400;
  text-transform: lowercase;
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: transparent;
}

.theme--light.v-btn.v-btn--has-bg:before {
  background-color: transparent;
}

.btn-menu:before {
  background-color: transparent;

}

.btn-menu:focus {
  background-color: transparent;

}

.dropdown-item {
  color: #1976d2 ;
  font-weight: bold;
  padding-bottom: 8px;

}

.dropdown-item:hover {
  color: #a8c8f7;
}
.mdi-menu-down::before {

color: #0566f8!important;
}

.v-list {
  padding: 10px 0 2px 0;
 
}
.v-menu__content{
  box-shadow: 0px 15px 35px 0px rgba(104, 114, 121, 0.2) !important;
}
.form-select {
  width: 130px;
  cursor: pointer;
}

.form-select:hover {
  height: 120px;
}

.logo {
  height: 50px;
}

.navbar {
  z-index: 2 !important;
  position: fixed;
  width: 100%;

}

.offcanvas {
  color: white;
}

.bg-body-tertiary {
  -webkit-box-shadow: 0 3px 6px 0 rgb(50 50 50 / 17%) !important;
  box-shadow: 0 3px 6px 0 rgba(105, 105, 105, 0.16) !important;
}

.active {
  border-bottom: 2px solid #a8c8f7;
  color: #a8c8f7 !important;
}

.nav-link {
  color: #0566f8;
  font-weight: bold;
}
.nav-link:hover {
  color: #0566f8 !important;
  transform: translateY(-2px) !important;

}
.nav-link-services {
  padding-top: 8px;
  color: #0566f8;
  font-weight: bold;
  text-decoration: none;
}
.nav-link-services:hover{
  color: #0566f8!important;
transform: translateY(-2px) !important;
} 

.container-nav {
  padding: 15px;
}

.menu {
  color: white;
  font-size: 32px;
}

.title-favorite {
  font-weight: 600;
  font-size: 20px;
}

.favorite-movies-title {
  padding-bottom: 10px;
  margin: 0;
}

.card-poster-favorite {
  padding-bottom: 20px;
  width: 60%;
}

.offcanvas.offcanvas-start {
  width: 20%;
}

.navbar-toggler:focus {
  text-decoration: none !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.navbar-toggler {
  border: none !important;
}


.locale-switcher {

  justify-content: end;
  display: flex;
}

.icon-language {
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
}

a#dropdownMenuLink {
  color: #000000;
  background: none;
  border: none;
  padding: 0;

}

.dropdown {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
}


.dropdown-menu {
  display: none;
  /* Inicia oculto por padrão */

}

.dropdown:hover .dropdown-menu {

  display: block;
  /* Mostra apenas quando o dropdown está sendo hover */
  padding-left: 0;
  border: none;
  box-shadow: 0 1px 5px 0px rgb(0 0 0 / 17%);


}

@media screen and (max-width: 575px) {

  .nav-link-services {
    padding-left: 24px;
  }

  .v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active {
    left: 97px !important;

  }

}

@media screen and (min-width: 576px) {

  .dropdown {
    padding-left: 0;
  }

}


@media screen and (max-width: 576px) {

  .active {
    border-bottom: none;
    color: #1976d2 !important;
  }
}


@media screen and (min-width: 769px) {
  .container-fluid {
    padding: 0 50px 0 50px;
  }

}

@media screen and (min-width: 480px) and (max-width: 768px) {

  .container-fluid {
    padding: 0 50px 0 50px;
  }
}</style>
