<template>
    <div class="footer">
        <v-row>
            <v-col class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">
                <div class="content-footer">

                    <h2>Dexidigital</h2>
                    <p>
                        {{ $t("footer.description") }}
                    </p>
                </div>
            </v-col>

            <v-col class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">

                <div>
                    <h2> {{ $t("footer.service-titles") }}</h2>
                    <router-link class="links" to="/"> {{ $t("footer.services") }}</router-link><br>
                    <router-link class="links" to="/squad-de-desenvolvimento">{{ $t("footer.development-squads") }}</router-link><br>
                    <router-link class="links" to="/experiencia-digital"> {{ $t("footer.digital-experience") }}</router-link><br>
                    <router-link class="links" to="/outsourcing-de-ti">{{ $t("footer.it-outsourcing") }}</router-link><br>
                    <router-link class="links" to="/aplicativos-mobile">{{ $t("footer.mobile-applications") }}</router-link>

                </div>
            </v-col>

            <v-col class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">
                <div class="social-media">


                    <span class="elementor-screen-only">
                        <a href="https://www.instagram.com/dexi.digital/" target="_blank" @click="clickInstagram" aria-label="Instagram">
                            <i class="fab fa-instagram icon"></i>
                        </a>
                    </span>

                    <span class="elementor-screen-only">
                        <a href="https://www.linkedin.com/company/dexi-digital/" target="_blank" @click="clickLinkedin" aria-label="Linkedin">
                            <i class="fab fa-linkedin icon"></i>
                        </a>
                    </span>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'FooterComponent',
    methods: {
        clickInstagram: function () {
            this.$gtag.event('action', 'label', {
                event_category: 'category',
                value: 123,
            });
        },
        clickLinkedin: function () {
            this.$gtag.event('action', 'label', {
                event_category: 'category',
                value: 123,
            });
        },
    },
};
</script>


<style scoped>
.text-font {
    font-weight: bold;
}

.footer {
    padding: 60px;
    background-color: #292929;
    color: white;
}

.links {
    color: white !important;
    text-decoration: none;
}

.links:hover {
    text-decoration: underline !important;
    color: #38B6ED !important;
    cursor: pointer;
}

.icon {
    font-size: 30px;
    margin: 20p;
    padding: 10px;
    color: white;
}

.icon:hover {
    color: #38B6ED !important;
    cursor: pointer;
}
@media screen and (max-width: 480px) {

    .footer {
    padding: 60px 30px;
    background-color: #292929;
    color: white;
}
    
}
@media screen and (max-width: 570px) {
    .footer {
        text-align: center;
    }
}

@media screen and (min-width: 1200px) {
    .content-social-media {
        justify-content: center;
        display: flex;
    }
}
</style>