<template>
    <div>
        <NavBar />
        <div class="mobile-applications-container">
            <div class="mobile-applications-container-navbar">
                <p class="mobile-applications-container-navbar-title"> 
                    {{ $t("MOBILE-APPLICATIONS.title") }}</p>
            </div>
            <div class="mobile-applications-section">
                <p class="mobile-applications-section-description">
                    {{ $t("MOBILE-APPLICATIONS.first-description-of-mobile-applications") }}


                </p>
                <p class="mobile-applications-section-description">
                    {{ $t("MOBILE-APPLICATIONS.second-description-of-mobile-applications") }}

                </p>
            </div>
            <div class="mobile-applications-services">
                <h2 class="mobile-applications-services-span">
                    <span class="mobile-applications-services-span-title">
                        {{ $t("MOBILE-APPLICATIONS.mobile-applications-title-span") }}
                    </span>
                    {{ $t("MOBILE-APPLICATIONS.mobile-applications-title") }}
                </h2>
                <p class="mobile-applications-services-description">
                    {{ $t("MOBILE-APPLICATIONS.mobile-applications-description") }}
                </p>
            </div>
            <div class="mobile-applications-container-color-img-top"></div>
            <div class="mobile-applications-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.native-app-development-span") }}
                        </span>
                        {{ $t("MOBILE-APPLICATIONS.native-app-development-span-description") }}
                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.hybrid-apps-with-flutter-span") }}
                        </span>
                        {{ $t("MOBILE-APPLICATIONS.hybrid-apps-with-flutter-span-description") }}

                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.revamping-existing-applications-span") }}

                        </span>
                        {{ $t("MOBILE-APPLICATIONS.revamping-existing-applications-span-description") }}

                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.app-strategy-consulting-span") }}
                        </span>
                        {{ $t("MOBILE-APPLICATIONS.app-strategy-consulting-span-description") }}

                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.maintenance-and-ongoing-support-span") }}
                        </span>
                        {{ $t("MOBILE-APPLICATIONS.maintenance-and-ongoing-support-span-description") }}

                    </li>
                </ul>
            </div>

            <div class="mobile-applications-container-color-img-bottom"></div>
            <div class="mobile-applications-content">
                <img class="mobile-applications-content-img" src="../assets/mobile-applications.png"
                    alt="imagem de aplicativos mobile">
            </div>

            <div class="mobile-applications-advantages">
                <h2 class="mobile-applications-advantages-span">
                    <span class="mobile-applications-advantages-span-title">
                        {{ $t("MOBILE-APPLICATIONS.advantages-of-app-title-span") }}

                        </span>
                        {{ $t("MOBILE-APPLICATIONS.advantages-of-app-title") }}
                </h2>
                <p class="mobile-applications-advantages-description">
                    {{ $t("MOBILE-APPLICATIONS.advantages-of-app-description") }}
                </p>
            </div>
            <div class="mobile-applications-container-color-img-top"></div>
            <div class="mobile-applications-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.premium-quality-span") }}

                        </span>
                        {{ $t("MOBILE-APPLICATIONS.premium-quality-span-description") }}

                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                       

                            {{ $t("MOBILE-APPLICATIONS.agile-methodology-span") }}

                        </span>
                        {{ $t("MOBILE-APPLICATIONS.agile-methodology-span-description") }}

                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.diverse-experience-span") }}
                        </span>
                        {{ $t("MOBILE-APPLICATIONS.diverse-experience-span-description") }}

                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            {{ $t("MOBILE-APPLICATIONS.customized-support-span") }}

                        </span>
                        {{ $t("MOBILE-APPLICATIONS.customized-support-span-description") }}
                    </li>
                </ul>
            </div>
            <div class="mobile-applications-container-color-img-bottom"></div>

            <p class="mobile-applications-container-description">  
                 {{ $t("MOBILE-APPLICATIONS.it-outsourcing-strategy") }}
            </p>
            <div class="mobile-applications-container-contact">
                <p class="mobile-applications-container-contact-background">
                    {{ $t("MOBILE-APPLICATIONS.get-in-touch") }}
                </p>
                <div class="form-button-container">
                    <FormButton />
                </div>

            </div>

        </div>
        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'

import FormButton from '@/components/FormButton.vue';
export default {
    name: 'MobileApplications',
    components: {
        NavBar,
        FooterComponent,
        FormButton
    }

}
</script>

<style scoped lang="scss">
.mobile-applications-container-navbar {
    background-color: #38b6ed;

    display: flex;
    justify-content: center;

    &-title {
        font-size: 30px;
        font-weight: 700;
        color: #ffffff !important;
    }
}

.mobile-applications-section {
    padding: 50px;
    font-size: left;

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }

}

.mobile-applications-services {
    padding: 0 50px;

    &-span {
        font-size: 40px;
        font-weight: 700;
        color: black;

        &-title {
            padding: 0 !important;
            font-size: 40px;
            font-weight: 700;
            background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }
}

.mobile-applications-container-color {
    background-color: #38b6ed;
    padding-top: 70px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;

    &-item {
        padding-bottom: 10px;

        color: white;

    }

    &-strong {
        font-weight: 700;
        font-size: 20px;
    }
    &-img-top {
        background-image: url('../assets/top2.png');
        height: 100px;
        width: 100%;
        background-repeat: round;

    }
    &-img-bottom {
        background-image: url('../assets/bottom2.png');
        height: 100px;
        width: 100%;
        background-repeat: round;

    }
}

.mobile-applications-content {

    padding-top: 40px;
    justify-content: center;
    display: flex;

    &-img {
        height: 90vh;
        width: 80%;
    }
}

.mobile-applications-advantages {
    padding: 50px 50px;

    &-span {
        font-size: 40px;
        font-weight: 700;
        color: black;

        &-title {
            padding: 0;
            font-size: 40px;
            font-weight: 700;
            background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }

}

.mobile-applications-container-description {
    font-size: 20px;
    color: #5c5c5c;
    padding: 50px;

}

.mobile-applications-container-contact {
    background-color: #38B6ED;

    &-background {
        font-size: 30px;
        color: #FFFFFF;

        font-weight: 300;
        line-height: 43px;
        padding: 50px 50px 20px 50px;
    }
}

.form-button-container {
    justify-content: center;
    display: flex;
    padding-bottom: 60px;

}

.mobile-applications-content-img {}

@media screen and (max-width: 480px) {
    .mobile-applications-section {
        padding: 50px 20px;

        &-content {
            padding: 20px 0;
        }

        &-img {
            height: auto;
            width: 100%;
            padding: 0 20px;
        }
    }

    .mobile-applications-container-description {
        padding: 20px 20px 40px 20px;
    }

    .mobile-applications-services {

        padding: 0 20px;

        &-span {
            font-size: 34px;

            &-title {
                font-size: 31px !important;
            }
        }

    }

    .mobile-applications-advantages {

        padding: 0 20px;

        &-span {
            font-size: 34px;
            padding: 20px 0;

            &-title {
                font-size: 31px !important;
            }
        }

        &-description {
            margin: 0;
            padding-bottom: 50px;
        }

    }

    .mobile-applications-container-color {
        padding: 70px 10px 0 10px;
    }

    .mobile-applications-container-navbar {
        &-title {
            padding: 90px 20px 10px 20px;
            text-align: center;
        }
    }

    .mobile-applications-container-contact {


        &-background {

            padding: 20px;
        }
    }

    .mobile-applications-content-img {
        height: 30vh;
        width: 100%;
    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .mobile-applications-content-img {
        height: auto;
        width: 70%;
        border-radius: 20px;
    }

    .mobile-applications-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
            text-align: center;
        }
    }

}

@media screen and (min-width:769px) and (max-width: 1024px) {
    .mobile-applications-content-img {
        height: 292px;
    width: 74%;
    border-radius: 20px;

    }

    .mobile-applications-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
        }
    }
}


@media screen and (min-width: 1025px) {
    .mobile-applications-content-img {
        height: 65vh;
        border-radius: 20px;
    }

    .mobile-applications-container-navbar {
        &-title {
            padding: 140px 20px 30px 20px;
        }
    }
}
</style> 