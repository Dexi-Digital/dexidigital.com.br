<template>
    <div>
        <NavBar />

        <WhatsappButton />
        <div class="sitemap-container">

            <div class="sitemap">
                <br />
                <div class="it-sitemap-container-navbar">
                    <p class="it-sitemap-container-navbar-title">
                        {{ $t("sitemap.map") }}
                    </p>
                </div>
                <div class="container">
                
                <ul>
                    <li><router-link to="/">{{ $t("sitemap.home") }}</router-link></li>
                    <li><router-link to="/blog">{{ $t("sitemap.content") }}</router-link></li>
                    <!-- <li><router-link to="/services">{{ $t("sitemap.service") }}</router-link></li> -->
                    <li><router-link to="/outsourcing-de-ti">{{ $t("sitemap.outsourcing") }}</router-link></li>
                    <li><router-link to="/aplicativos-mobile">{{ $t("sitemap.app-mobile") }}</router-link></li>
                    <li><router-link to="/squad-de-desenvolvimento">{{ $t("sitemap.squad-development") }}</router-link></li>
                    <li><router-link to="/experiencia-digital">{{ $t("sitemap.digital-experince") }}</router-link></li>
                </ul>
            </div>
            </div>
        </div>

        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import WhatsappButton from '../components/WhatsappButton.vue';


export default {
    name: 'SiteMap',
    components: {
        NavBar,
        FooterComponent,
        WhatsappButton
    },
    created() {
        this.getPostsFromFirebase();
    },

    data() {

        return {
            localImages: [],
            arrayComValoresDoFirebase: [],
            loadingFirebaseValue: false
            // item: []
        }
    },

}

</script>
<style scoped>
.sitemap-container {
    width: 100%;
    height: 100vh;
    display: flex;
}

.it-sitemap-container-navbar {

    background-color: #38b6ed;
    display: flex;
    justify-content: center;


    &-title {
        font-size: 30px;
        font-weight: 700;
        color: #ffffff !important;
    }
}

.it-sitemap-container-navbar-title {
    padding: 50px 50px;
    font-size: 40px;
    font-weight: 700;
    color: white;
    padding: 0;
    font-size: 40px;
    font-weight: 700;
}

.sitemap {
    width: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    list-style: none;
    text-decoration: none;
    margin-top: 30px;
}

h2 {
    color: #333;
}

ul {
    text-decoration: none;
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
    list-style-type: none;
    text-decoration: none;
}

a {
    text-decoration: none;
}

/* Style the links */
router-link {
    text-decoration: none;
    color: #007bff;
    /* Bootstrap's primary color */
    font-weight: bold;
}

router-link:hover {
    text-decoration: underline;
}

.it-outsourcing-container-navbar {

    background-color: #38b6ed;
    display: flex;
    justify-content: center;


    &-title {
        font-size: 30px;
        font-weight: 700;
        color: #ffffff !important;
    }
}
</style>