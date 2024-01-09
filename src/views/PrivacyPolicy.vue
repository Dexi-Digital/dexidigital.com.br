<template>
    <div class="container-privacy">
        <nav class="navbar navbar-expand-sm bg-body-tertiary">

            <div class="container-fluid">

                <div>
                    <v-toolbar-title>
                        <router-link class="navbar-brand" to="/">
                            <img class="logo" alt="logo-dexi" src="../assets/dexi-1.png" />
                        </router-link>
                    </v-toolbar-title>
                </div>

                <div class="icons" v-if="showLocaleSwitcher">
                    <input type="radio" id="en" v-model="$i18n.locale" value="en" style="display: none">
                    <label for="en">
                        <button @click="switchLanguage('en')" class="me-2">
                            <img src="../assets/en-icon.svg" alt="USA">
                        </button>
                    </label>

                    <input type="radio" id="pt-BR" v-model="$i18n.locale" value="pt-BR" style="display: none">
                    <label for="pt-BR">
                        <button @click="switchLanguage('pt-BR')" class="me-2">
                            <img src="../assets/br-icon.svg" alt="Brazil">
                        </button>
                    </label>
                </div>
            </div>
        </nav>
        <div class="content-policy">

            <h1 class="title-policy">{{ $t("PRIVACY-POLICY.privacy-policy-title") }}</h1>
            <div class="print-button">
                <v-btn class="btn-print" @click="printDocument">
                    <img class="print" alt="print-img" src="../assets/print.svg" />
                </v-btn>
            </div>
            <div class="description-privacy-policy">
                <p class="title">{{ $t("PRIVACY-POLICY.privacy-policy-subtitle") }}</p>
                <div>
                    <p class="title"> {{ $t("PRIVACY-POLICY.introduction-and-data-collection") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.introduction-and-data-collection-description") }}<br><br>

                    {{ $t("PRIVACY-POLICY.second-description-of-introduction-and-data-collection") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.use-and-purpose-of-information") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.use-and-purpose-of-information-subtitle") }}</p>
                    <ul>
                        <li>{{ $t("PRIVACY-POLICY.first-topic-use-and-purpose-of-information") }}</li>
                        <li>{{ $t("PRIVACY-POLICY.second-topic-use-and-purpose-of-information") }}</li>
                        <li>{{ $t("PRIVACY-POLICY.third-topic-use-and-purpose-of-information") }}</li>
                        <li>{{ $t("PRIVACY-POLICY.fourth-topic-use-and-purpose-of-information") }}</li>

                    </ul>
                    <p class="title">{{ $t("PRIVACY-POLICY.data-sharing-and-protection") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.data-sharing-and-protection-subtitle") }}</p>
                    <ul>
                        <li>{{ $t("PRIVACY-POLICY.first-topic-data-sharing-and-protection") }}</li>
                        <li>{{ $t("PRIVACY-POLICY.second-topic-data-sharing-and-protection") }}</li>
                        <li>{{ $t("PRIVACY-POLICY.third-topic-data-sharing-and-protection") }}</li>

                        <p>{{ $t("PRIVACY-POLICY.data-sharing-and-protection-description") }}</p>

                    </ul>
                    <p class="title">{{ $t("PRIVACY-POLICY.your-rights-and-consent") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.your-rights-and-consent-subtitle") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.changes-to-the-privacy-policy") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.changes-to-the-privacy-policy-subtitle") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.contact") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.contact-information") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.dexi") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.email") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.phone") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.data-usage-consent") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-of-the-data-usage-consent") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.second-paragraph-of-the-data-usage-consent") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.third-paragraph-of-the-data-usage-consent") }}</p>

                    <p class="title">{{ $t("PRIVACY-POLICY.cookies-data-security-and-information-usage") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-cookies-data-security-and-information-usage") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.cookies-and-web-beacons") }}</p>
                    <p> {{ $t("PRIVACY-POLICY.first-paragraph-cookies-and-web-beacons") }}</p>
                    <p class="title">{{ $t("PRIVACY-POLICY.data-security") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-data-security") }}</p>

                    <p class="title">{{ $t("PRIVACY-POLICY.advertisements") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-advertisements") }}</p>

                    <p class="title">{{ $t("PRIVACY-POLICY.use-of-user-information") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-use-of-user-information") }}</p>
                    <ul>
                        <li>
                            <span class="title">{{ $t("PRIVACY-POLICY.identity-verification") }}</span>
                            {{ $t("PRIVACY-POLICY.first-topic-use-of-user-information") }}
                        </li>
                        <li>
                            <span class="title"> {{ $t("PRIVACY-POLICY.support-and-feedback") }}</span>
                            {{ $t("PRIVACY-POLICY.second-topic-use-of-user-information") }}
                        </li>
                        <li>
                            <span class="title">{{ $t("PRIVACY-POLICY.explicit-consent") }}</span>
                            {{ $t("PRIVACY-POLICY.third-topic-use-of-user-information") }}
                        </li>
                    </ul>
                    <p class="title"> {{ $t("PRIVACY-POLICY.data-retention-period") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.first-paragraph-data-retention-period") }}</p>
                    <p>{{ $t("PRIVACY-POLICY.second-paragraph-data-retention-period") }}</p>
                    <p class="revision-data">{{ $t("PRIVACY-POLICY.date-of-last-review") }}</p>
                </div>

            </div>
        </div>
        <div class="share-buttons">
            <div class="share-buttons">
                <p class="article-share">{{ $t("PRIVACY-POLICY.share-this-article") }}</p>
                <div class="content-media">
                    <facebook :url="url" scale="2"></facebook>
                    <span style=" margin-right: 10px!important;"></span>
                    <linkedin class="facebook" :url="url" scale="2"></linkedin>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { Facebook, Linkedin } from "vue-socialmedia-share";
export default {
    name: 'PrivacyPolicy',
    components: {
        Facebook,
        Linkedin,
    },
    data() {
        return {
            url: "https://www.dexidigital.com.br/politica-de-privacidade",
            showLocaleSwitcher: true,
        };
    },
    methods: {
        printDocument() {
            window.print();
        },
        switchLanguage(language) {
            this.$i18n.locale = language;
        },
        setLanguageToPortuguese() {
            this.switchLanguage('pt-BR');
        },
        setLanguageToEnglish() {
            this.switchLanguage('en');
        },

    }
}

</script>

<style scoped>
.navbar {
    z-index: 2;

    background: linear-gradient(to right, #21B6F8 0%, #5526d1f2 100%);
    height: 80px !important;
    display: flex;
    justify-content: flex-end
}

.container-fluid {
    padding: 0 20px 0 20px;
}

.navbar-brand:hover {
    color: #1976d2 !important;
}

.navbar-brand:focus {
    color: #1976d2 !important;
}

.icons {
    display: flex;
    justify-content: end;

}

.title {
    color: #4d4d4d;
    font-weight: bold;
    font-size: 16px !important;
}

.content-media {
    cursor: pointer;

}

.revision-data {
    color: #878787;
}

.container-privacy {
    background-color: #f2f4f7;
    padding-bottom: 60px;
}

svg.fa-icon {
    height: 39px !important;
}

.print-button {
    display: flex;
    justify-content: end;
}

.btn-print {
    background-color: #ffffff !important;
    border: none;
    box-shadow: none;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 34px !important;
    min-width: 43px !important;
    padding: 0;
}

.description-privacy-policy {
    padding-top: 20px;
}

.content-policy {
    padding: 20px;

}


.logo {
    padding-top: 5px;
    height: 60px;

}

.title-policy {
    font-size: 30px;

    color: black;
    font-weight: 900;
}


.share-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.article-share {
    font-weight: 700 !important;
    color: #21B6F8;
    padding-right: 20px;
    margin: 10px 0 0 0;
}

.facebook-share-button,
.linkedin-share-button {
    margin: 0 10px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.facebook-share-button:hover,
.linkedin-share-button:hover {
    background-color: #f0f0f0;
}

@media screen and (max-width:345px) {
    .content-policy {
        padding: 20px 30px 20px 30px !important;

    }

    .title-policy {
        font-size: 25px;

    }
}

@media screen and (max-width: 769px) {
    .content-policy {
        padding: 80px 30px 20px 30px;

    }

    .container-fluid {
        padding: 0 28px 0 28px;

    }
}

@media screen and (min-width: 769px) {
    .content-policy {
        padding: 50px 100px 0 100px;

    }

    .container-fluid {
        padding: 0 98px 0 98px;
    }

}
</style>