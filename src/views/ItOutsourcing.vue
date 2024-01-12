
<template>
    <div>
        <NavBar />
        <div class="it-outsourcing-container">
            <div class="it-outsourcing-container-navbar">
                <p class="it-outsourcing-container-navbar-title">
                    {{ $t("IT-OUTSOURCING.title") }}
                </p>

            </div>
            <div class="it-outsourcing-section">
                <p class="it-outsourcing-section-description">
                    {{ $t("IT-OUTSOURCING.first-description-of-it-outsourcing") }}

                </p>
                <p class="it-outsourcing-section-description">
                    {{ $t("IT-OUTSOURCING.second-description-of-it-outsourcing") }}
                </p>
            </div>

            <div class="it-outsourcing-advantages">

                <h2 class="it-outsourcing-advantages-span">
                    <span class="it-outsourcing-advantages-span-title">
                        {{ $t("IT-OUTSOURCING.it-outsourcing-title-span") }}
                    </span>
                    {{ $t("IT-OUTSOURCING.it-outsourcing-title") }}
                </h2>
                <p class="it-outsourcing-advantages-description">
                    {{ $t("IT-OUTSOURCING.it-outsourcing-description") }}
                </p>

            </div>
            <div class="it-outsourcing-container-color-img-top"></div>
            <div class="it-outsourcing-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.technical-support-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.technical-support-span-description") }}
                    </li>

                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.infrastructure-management-span") }}

                        </span>
                        {{ $t("IT-OUTSOURCING.infrastructure-management-span-description") }}

                    </li>

                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.custom-software-development-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.custom-software-development-span-description") }}

                    </li>

                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.cybersecurity-span") }}
                        </span>

                        {{ $t("IT-OUTSOURCING.cybersecurity-span-description") }}
                    </li>

                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.disaster-recovery-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.disaster-recovery-span-description") }}
                    </li>
                </ul>
            </div>

            <div class="it-outsourcing-container-color-img-bottom"></div>
            <div class="it-outsourcing-content">
                <img class="it-outsourcing-content-img" src="../assets/it-outsourcing.png"
                    alt="imagem de aplicativos mobile">
            </div>

            <div class="it-outsourcing-advantages">
                <h2 class="it-outsourcing-advantages-span">
                    <span class="it-outsourcing-advantages-span-title">
                        {{ $t("IT-OUTSOURCING.advantages-of-it-outsourcing") }}
                    </span>
                    {{ $t("IT-OUTSOURCING.advantages-of-it-outsourcing-span") }}
                </h2>
                <p class="it-outsourcing-advantages-description">
                    {{ $t("IT-OUTSOURCING.advantages-of-it-outsourcing-description") }}

                </p>
            </div>
            <div class="it-outsourcing-container-color-img-top"></div>

            <div class="it-outsourcing-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.experience-and-expertise-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.experience-and-expertise-span-description") }}

                    </li>
                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.cost-reduction-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.cost-reduction-span-description") }}
                    </li>

                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.experience-design-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.experience-design-span-description") }}
                    </li>
                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.flexibility-and-scalability-span") }}
                        </span>
                        {{ $t("IT-OUTSOURCING.flexibility-and-scalability-span-description") }}
                    </li>
                    <li class="it-outsourcing-container-color-item">
                        <span class="it-outsourcing-container-color-strong">
                            {{ $t("IT-OUTSOURCING.personalized-customer-service-span") }}

                        </span>
                        {{ $t("IT-OUTSOURCING.personalized-customer-service-span-description") }}

                    </li>

                </ul>
            </div>
            <div class="it-outsourcing-container-color-img-bottom"></div>

            <p class="it-outsourcing-container-description">
                {{ $t("IT-OUTSOURCING.examples-it-personalizado") }}
            </p>


            <div class="it-outsourcing-container-contact">
                <p class="it-outsourcing-container-contact-background">
                    {{ $t("IT-OUTSOURCING.get-in-touch") }}

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

    name: 'DigitalExperience',
    components: {
        NavBar,
        FooterComponent,
        FormButton
    }
}
</script>

<style scoped lang="scss">
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

.it-outsourcing-section {
    padding: 50px 50px 0 50px;
    font-size: left;

    &-description {
        font-size: 20px;
        padding-top: 20px;
        color: #5c5c5c;
    }

}

.it-outsourcing-services {
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

        color: #5c5c5c;
    }
}

.it-outsourcing-container-color {
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

.it-outsourcing-content {

    padding-top: 40px;
    justify-content: center;
    display: flex;

    &-img {
        height: 90vh;
        width: 80%;
    }
}

.it-outsourcing-advantages {
    padding: 50px 50px;

    &-span {
        font-size: 40px;
        font-weight: 700;
        color: black;

        &-title {
            padding: 0;
            font-size: 40px;
            font-weight: 700;
            background: -webkit-linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
            background: -moz-linear-gradient(to right, #158BBF 60%, #4A00E0 100%);
            background: linear-gradient(to right, #158BBF 50%, #2900e0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-description {
        font-size: 20px;
        padding-top: 20px;
        color: #5c5c5c;
    }

}

.it-outsourcing-container-description {
    font-size: 20px;
    color: #5c5c5c;
    padding: 50px;

}

.it-outsourcing-container-contact {
    background-color: #38B6ED;
    margin-top: 50px;

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

.it-outsourcing-content-img {}

@media screen and (max-width: 480px) {
    .it-outsourcing-section {
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

    .it-outsourcing-container-description {
        padding: 20px 20px 40px 20px;
    }

    .it-outsourcing-services {

        padding: 0 20px;

        &-span {
            font-size: 34px;

            &-title {
                font-size: 31px !important;
            }
        }

    }

    .it-outsourcing-advantages {

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
        }

    }

    .it-outsourcing-container-color {
        padding: 70px 10px 0 10px;
    }

    .it-outsourcing-container-navbar {
        &-title {
            padding: 125px 20px 20px 20px;
            text-align: center;
        }
    }

    .it-outsourcing-container-contact {


        &-background {

            padding: 20px;
        }
    }

    .it-outsourcing-content-img {
        height: 30vh;
        width: 100%;
    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .it-outsourcing-content-img {
        height: auto;
        width: 70%;
        border-radius: 20px;
    }

    .it-outsourcing-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
            text-align: center;
        }
    }

}

@media screen and (min-width:769px) and (max-width: 1024px) {
    .it-outsourcing-content-img {
        height: 292px;
        width: 74%;
        border-radius: 20px;

    }

    .it-outsourcing-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
        }
    }

}


@media screen and (min-width: 1025px) {
    .it-outsourcing-content-img {
        height: 65vh;
        border-radius: 20px;
    }

    .it-outsourcing-container-navbar {
        &-title {
            padding: 140px 20px 30px 20px;
        }
    }

    .it-outsourcing-advantages {
        padding: 50px 50px 0px 50px;

    }
}
</style>  