 <template>
    <div>
        <NavBar />
        <div class="development-squads-container">
            <div class="development-squads-container-navbar">
                <p class="development-squads-container-navbar-title">
                    {{ $t("DEVELOPMENT-SQUADS.title") }}
                </p>
            </div>
            <div class="development-squads-section">
                <p class="development-squads-section-description">
                    {{ $t("DEVELOPMENT-SQUADS.first-description-of-development-squads") }}
                 
                </p>
                <p class="development-squads-section-description">
                    {{ $t("DEVELOPMENT-SQUADS.second-description-of-development-squads") }}
                 
                </p>

            </div>
            <div class="development-squads-services">
                <h2 class="development-squads-services-span">
                    <span class="development-squads-services-span-title">
                        {{ $t("DEVELOPMENT-SQUADS.development-squads-title-span") }}
                    </span>
                    {{ $t("DEVELOPMENT-SQUADS.development-squads-title") }}
                </h2>
                <p class="development-squads-services-description">
                    {{ $t("DEVELOPMENT-SQUADS.development-squads-description") }}

                </p>
            </div>
            <div class="development-squads-container-color-img-top"></div>
            <div class="development-squads-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.strategic-it-planning-span") }}

                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.strategic-it-planning-span-description") }}

                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.custom-software-development-span") }}

                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.custom-software-development-span-description") }}

                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.project-management-span") }}
                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.project-management-span-description") }}
                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.system-integration-span") }}
                        </span>
                            {{ $t("DEVELOPMENT-SQUADS.system-integration-span-description") }}                   
                         </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.ongoing-support-span") }}                  


                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.ongoing-support-span-description") }}                  

                    </li>
                </ul>
            </div>

            <div class="development-squads-container-color-img-bottom"></div>
            <div class="development-squads-content">
                <img class="development-squads-content-img" src="../assets/development-squads.png"
                    alt="imagem de aplicativos mobile">
            </div>

            <div class="development-squads-advantages">
                <h2 class="development-squads-advantages-span">
                    <span class="development-squads-advantages-span-title">
                        {{ $t("DEVELOPMENT-SQUADS.advantages-of-development-squads-title") }}                  
                    </span>
                    {{ $t("DEVELOPMENT-SQUADS.advantages-of-development-squads-title-span") }}    
                </h2>
                <p class="development-squads-advantages-description">

                    {{ $t("DEVELOPMENT-SQUADS.advantages-of-development-squads-description") }}    
                </p>
            </div>
            <div class="development-squads-container-color-img-top"></div>
            <div class="development-squads-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.diverse-expertise-span") }}    

                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.diverse-expertise-span-description") }}    

                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.focus-on-excellence-span") }}    
                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.focus-on-excellence-span-description") }}    

                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.agile-methodology-span") }}    
                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.agile-methodology-span-description") }}    
                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            {{ $t("DEVELOPMENT-SQUADS.customized-support-span") }}    

                        </span>
                        {{ $t("DEVELOPMENT-SQUADS.customized-support-span-description") }}  
                    </li>
                </ul>
            </div>
            <div class="development-squads-container-color-img-bottom"></div>

           
            <div class="development-squads-container-contact">
                <p class="development-squads-container-contact-background">
                    {{ $t("DEVELOPMENT-SQUADS.get-in-touch") }}  

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
export default {
    name: 'DevelopmentSquads',
    components: {
        NavBar: () => import('../components/NavBar.vue'),
        FooterComponent: () => import('../components/FooterComponent.vue'),
        FormButton: () => import('@/components/FormButton.vue'),
    }
}
</script>

<style scoped lang="scss">
.development-squads-container-navbar {
    background-color: #38b6ed;

    display: flex;
    justify-content: center;

    &-title {

        font-size: 30px;
        font-weight: 700;
        color: #ffffff !important;
    }
}

.development-squads-section {
    padding: 50px;
    font-size: left;

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }

}

.development-squads-services {
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

.development-squads-container-color {
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

.development-squads-content {

    padding-top: 40px;
    justify-content: center;
    display: flex;

    &-img {
        height: 90vh;
        width: 80%;
    }
}

.development-squads-advantages {
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

.development-squads-container-description {
    font-size: 20px;
    color: #5c5c5c;
    padding: 50px;

}

.development-squads-container-contact {
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


@media screen and (max-width: 480px) {
    .development-squads-section {
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

    .development-squads-container-description {
        padding: 20px 20px 40px 20px;
    }

    .development-squads-services {

        padding: 0 20px;

        &-span {
            font-size: 34px;

            &-title {
                font-size: 31px !important;
            }
        }

    }

    .development-squads-advantages {

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

    .development-squads-container-color {
        padding: 70px 10px 0 10px;
    }

    .development-squads-container-navbar {
        &-title {
            padding:90px 20px 10px 20px;
            text-align: center;
        }
    }

    .development-squads-container-contact {


        &-background {

            padding: 20px;
        }
    }

    .development-squads-content-img {
        height: 30vh;
        width: 100%;
    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .development-squads-content-img {
        height: auto;
        width: 70%;
        border-radius: 20px;
    }

    .development-squads-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
            text-align: center;
        }
    }

}

@media screen and (min-width:769px) and (max-width: 1024px) {
    .development-squads-content-img {
        height: 292px;
    width: 74%;
    border-radius: 20px;
        border-radius: 20px;

    }
    .development-squads-container-navbar{
        &-title{
            padding: 126px 20px 20px 20px;
        }
    }
    
}


@media screen and (min-width: 1025px) {
    .development-squads-content-img {
        height: 65vh;
        border-radius: 20px;
    }
    .development-squads-container-navbar{
        &-title{
            padding: 140px 20px 30px 20px;
        }
    }
    .development-squads-advantages {
        padding: 50px 50px 30px 50px;
       
    }
}
</style>