<!-- <template>
    <div>

        <NavBar />
     <div class="diagonal-bg">


            <div class="services-container">
                <h2 class="title-services">
                    <span class="title-services-span">
                        Elevate your company to </span><br>

                    Where you want it to be!
                </h2>
                <p class="subtitle-services">With our custom-made tech team,<br>
                    we can hit the ground running!</p>

            </div>
            <div class="form-button-container">
                <router-link class="nav-link active btn-contact" to="/fale-conosco">
                    <button>
                        {{ $t("header.contact-button") }}
                    </button>
                </router-link>
            </div>

        </div>
        <div class="diagonal-bg-bottom"></div>
        <div class="content-home">

            <div>
                <p class="title-section-our-services"> Nossos Serviços</p>
                <p class="service-description">Equipes dinâmicas para projeto estratégicos, impulsionando o <br>
                    crecimento consistente da sua empresa no ritmo que você precisa.
                </p>
            </div>
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">
                    <v-card class="mx-auto content-card-home">
                        <div class="container-img">
                            <img class="img-services" src="../assets/servicos/outsourcing-de-ti.png"
                                alt="Outsourcing de TI">
                        </div>
                    </v-card>
                    <v-card-text class="information-services">
                        <h4 class="title-services-text"> {{ $t("services-section.it-outsourcing") }}</h4>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">

                    <v-card class="mx-auto content-card-home">
                        <div class="container-img">
                            <img class="img-services" src="../assets/servicos/aplicativos-mobile.png"
                                alt="Aplicativos Mobile">
                        </div>

                    </v-card>
                    <v-card-text class="information-services">
                        <h4 class="title-services-text"> {{ $t("services-section.mobile-applications") }}</h4>

                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">

                    <v-card class="mx-auto content-card-home content-card-home-squads">
                        <div class="container-img-squads">
                            <img class="img-services" src="../assets/servicos/squads-de-desenvolvimento.png"
                                alt="Squads de desenvolvimento">
                        </div>
                    </v-card>
                    <v-card-text class="information-services ">

                        <h4 class="title-services-text"> {{ $t("services-section.development-squads") }}
                        </h4>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">

                    <v-card class="mx-auto content-card-home">
                        <div class="container-img">
                            <img class="img-services" src="../assets/servicos/experiencia-digital.png"
                                alt="Experiência digital">
                        </div>

                    </v-card>
                    <v-card-text class="information-services">
                        <h4 class="title-services-text"> {{ $t("services-section.digital-experience") }}
                        </h4>
                    </v-card-text>
                </v-col>
            </v-row>

        </div>
        <div class="container-background">
            <p class="title-services-background">Strategy</p>
            <p class="description-services-background">A deep dive into company strategy is essential to bring an excellent
                understanding to the tech team. We suit tools and methodologies to the company’s needs. Whitin 2 to 6 weeks,
                we will discover everything necessary to start in the best direction!
            </p>
        </div>

        <div>
            <h2 class="title-services-section">We work with the best technology available</h2>
            <p class="description-services-section">And we always push the boundaries of what is possible, looking <br>
                for better ways to do things.</p>
        </div>
        <div class="services-section">
            <img class="img-services-sections" src="../assets/technology/node.png" alt="node">
            <img class="img-services-sections" src="../assets/technology/react.png" alt="react">
            <img class="img-services-sections" src="../assets/technology/vue.png" alt="vue">
            <img class="img-services-sections" src="../assets/technology/flutter.png" alt="flutter">
            <img class="img-services-sections" src="../assets/technology/amazon-elasticache.png" alt="amazon-elasticache">
            <img class="img-services-sections" src="../assets/technology/aws.png" alt="aws">
            <img class="img-services-sections" src="../assets/technology/python.png" alt="python">
            <img class="img-services-sections" src="../assets/technology/java.png" alt="java">
            <img class="img-services-sections" src="../assets/technology/oracle.png" alt="oracle">
            <img class="img-services-sections img-services-sections-dynamodb" src="../assets/technology/dynamodb.png"
                alt="dynamodb">
            <img class="img-services-sections" src="../assets/technology/kotlin.png" alt="kotlin">
            <img class="img-services-sections" src="../assets/technology/amazon-document.png" alt="amazon-document">
            <img class="img-services-sections" src="../assets/technology/kubernetes.png" alt="kubernetes">
            <img class="img-services-sections" src="../assets/technology/angular.png" alt="angular">
            <img class="img-services-sections img-services-sections-javascript" src="../assets/technology/javascript.png"
                alt="javascript">
            <img class="img-services-sections" src="../assets/technology/google-cloud.png" alt="google-cloud">
            <img class="img-services-sections" src="../assets/technology/spring.png" alt="spring">
            <img class="img-services-sections" src="../assets/technology/mysql.png" alt="mysql">
            <img class="img-services-sections img-services-sections-maven" src="../assets/technology/maven.png" alt="maven">
            <img class="img-services-sections" src="../assets/technology/mongo.png" alt="mongo">
            <img class="img-services-sections" src="../assets/technology/kafka.png" alt="kafka">
            <img class="img-services-sections" src="../assets/technology/jenkins.png" alt="jenkins">
            <img class="img-services-sections img-services-sections-express" src="../assets/technology/express.png"
                alt="express">
            <img class="img-services-sections img-services-sections-golang" src="../assets/technology/golang.png"
                alt="golang">
            <img class="img-services-sections img-services-sections-azure" src="../assets/technology/azure.png" alt="azure">
        </div>
        <div class="development-squads-container-contact">

            <p class="development-squads-container-contact-background">
                {{ $t("DEVELOPMENT-SQUADS.get-in-touch") }}

            </p>
            <div class="form-button-footer">
                <FormButton />
            </div>
        </div>
        <FooterComponent />

    </div> 
</template> -->

<!-- <script>
export default {
    name: 'ServicesView',
    components: {
        NavBar: () => import('../components/NavBar'),
        FormButton: () => import('@/components/FormButton.vue'),
        FooterComponent: () => import('@/components/FooterComponent.vue')
    }
}
</script> -->

<style scoped lang="scss">
.development-squads-container-contact {
    background-color: #38B6ED;
    margin-top: 50px;

}

.development-squads-container-contact-background {
    font-size: 30px;
    color: #FFFFFF;

    font-weight: 300;
    line-height: 43px;
    padding: 50px 50px 20px 50px;

}

.form-button-footer {
    justify-content: center;
    display: flex;
    padding-bottom: 60px;

}

.diagonal-bg {
    width: 100% !important;
    height: 100vh;
    background: linear-gradient(to bottom, #c0151500 54%, #2d8efd);
}

.diagonal-bg-bottom {
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, #2d8efd, #ffffff 60%);
    // background: linear-gradient(160deg, #2dedff, #000bf8, #2dedff);
}

.services-container {
    font-weight: bold;
    width: 70%;
    font-size: 30px !important;
}


.btn-contact {
    padding: 15px !important;
    color: white !important;
    box-shadow: none;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    width: 300px;
    text-align: center;
    transition: background-color 0.5s, box-shadow 0.5s, transform 0.5s;
    background-color: #162ae7 !important;
    /* Adiciona uma transição de 2 segundos para as propriedades alteradas no hover */
}

.btn-contact:hover {
    color: #1693e7 !important;
    cursor: pointer;
    box-shadow: none;
    background-color: rgb(255, 255, 255) !important;


}

.title-services {

    font-weight: 700;
    color: black !important;

    font-size: 70px !important;


}

.title-services-span {


    background: #158BBF;
    background: linear-gradient(to right, #158BBF 50%, #2900e0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle-services {
    background: #158BBF;

    background: linear-gradient(to right, #158BBF 50%, #2900e0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content-card-home-squads {
    padding-bottom: 0 !important;
    padding-top: 40px !important;
}

.img-services {
    height: 130px !important;
}

.title-section-our-services {
    font-weight: bold;

    color: #000bf8;
    font-size: 40px;

    text-align: center;
}

.service-description {
    font-size: 25px;
    text-align: center;
    color: rgb(53, 53, 53);
    padding-bottom: 20px;
}

@media screen and (max-width: 320px) {
    .services-container {
        padding: 120px 0 10px 0 !important;

    }

    .form-button-container {
        display: flex;
        justify-content: center;
    }

    .services-section {
        display: flex;
        flex-wrap: wrap;
        padding: 50px 10px !important;
        justify-content: center;
    }

    .img-services-sections {
        height: 40px !important;
        margin-bottom: 30px !important;
    }
}

@media screen and (min-width:320px) and (max-width: 480px) {
    .form-button-container {
        display: flex;
        justify-content: center;
    }

    .services-container {
        padding: 120px 20px 10px 20px !important;
        width: auto;

    }

    .title-services {
        font-size: 40px !important;
        text-align: center;
    }

    .subtitle-services {
        font-size: 28px !important;
        text-align: center;
    }

    .container-background {
        height: 70vh !important;
    }

    .description-services-section {
        padding: 0 10px;
    }

    .title-services-background {
        font-size: 34px;
        padding: 40px 0 !important;
        text-align: center;
        margin: 0;
    }

    .description-services-background {
        font-size: 20px !important;
        padding: 0 20px !important;

    }

    .services-section {

        padding: 20px 20px 60px 20px !important;
    }

    .img-services-sections {
        margin-bottom: 0 !important;
        height: 49px !important;
    }

    .img-services-sections-maven {
        height: 30px !important;
        margin: 0 10px 0 0 !important;

    }

    .img-services-sections-golang {
        margin: 0 10px 0 0 !important;
        height: 34px !important;
    }

    .img-services-sections-javascript {
        margin: 0 10px 0 0 !important;
        height: 34px !important;
    }

    .img-services-sections-express,
    .img-services-sections-azure,
    .img-services-sections-dynamodb {
        margin: 0 10px 0 0 !important;
        height: 58px !important;
    }


}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .content-card-home {
        margin-bottom: 0;
        /* width: 50%!important; */

    }

    .information-services-squads {
        padding: 16px 0;
    }

    .title-services {
        font-size: 55px !important;
        text-align: start !important;

    }

    .subtitle-services {
        font-size: 28px !important;
        text-align: start;
    }

    .services-container {
        padding: 120px 20px 10px 20px !important;
        width: 100%;
    }

    .form-button-container {
        padding: 0 20px;
    }

    .description-services-background {
        font-size: 29px !important;
    }

    .services-section {
        padding: 80px 30px !important;
    }

}





@media screen and (min-width: 768px) and (max-width: 1024px) {
    .content-card-home {
        width: 100% !important;

    }

    .information-services-squads {
        padding: 16px 0;
    }

    .title-services-text {
        margin-bottom: 0;

    }

    .title-services {
        font-size: 55px !important;
        text-align: start !important;
    }

    .subtitle-services {
        font-size: 28px !important;
        text-align: start;
    }

    .services-container {
        padding: 190px 50px 10px 50px !important;
        width: 100%;

    }

    .form-button-container {
        padding: 0 50px;
    }

    .description-services-background {
        font-size: 29px !important;
    }

    .services-section {
        padding: 80px 30px !important;
    }

}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    .title-services {
        font-size: 70px !important;
        text-align: start !important;

    }

    .subtitle-services {
        font-size: 35px !important;
        text-align: start;
    }

    .services-container {
        padding: 190px 50px 10px 50px !important;
        width: 100%;
    }

    .form-button-container {
        padding: 0 50px;
    }
}



@media screen and (min-width: 1201px) and (max-width: 1440px) {
    .title-services {
        font-size: 70px !important;
        text-align: start !important;

    }

    .subtitle-services {
        font-size: 35px !important;
        text-align: start;
    }

    .services-container {
        padding: 190px 50px 10px 50px !important;
        width: 100%;
    }

    .form-button-container {
        padding: 0 50px;
    }

    .content-home {
        padding: 70px 120px !important;
    }


}



@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .title-services {
        font-size: 80px !important;
        text-align: start !important;

    }

    .subtitle-services {
        font-size: 40px !important;
        text-align: start;
    }

    .services-container {
        padding: 13% 50px 10px 50px !important;

        width: 100%;
    }

    .form-button-container {
        padding: 0 50px;
    }

    .btn-contact {
        font-size: 18px;
    }

    .services-section {

        justify-content: start !important;
        ;
    }
}

@media screen and (min-width: 1921px) {
    .title-services {
        font-size: 90px !important;
        text-align: start !important;

    }

    .subtitle-services {
        font-size: 45px !important;
        text-align: start;
    }

    .services-container {
        padding: 15% 50px 10px 50px !important;
        width: 100%;
    }

    .form-button-container {
        padding: 0 50px;
    }

    .btn-contact {
        font-size: 20px;
    }
}



.img-services {
    height: 100px;

}


.content-home {
    padding: 70px 190px;

}




.content-card-home {
    background-color: transparent;
    background-image: linear-gradient(180deg, var(--e-global-color-accent) 0%, #FFFFFF00 60%);
    border-radius: 40px;
    /* border: 1.5px solid rgb(208 208 208); */
    box-shadow: 0 3px 6px 0 rgba(105, 105, 105, 0.16) !important;
    width: 270px;
    transition: border 300ms ease 0ms, box-shadow 300ms ease 0ms;
    padding: 20px;


}

.content-card-home:hover {
    box-shadow: 0px 15px 35px 0px rgba(112, 144, 176, 0.2) !important;

    border: none;
}

.title-services-text {
    color: #000bf8;
    ;
    /* font-size: 17px; */
    font-size: 16px;
    text-align: center;
    font-weight: bold;
}

.container-img {
    display: flex;
    justify-content: center;
    padding-top: 20px;

}

.container-img-squads {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}




.title-services-background {
    z-index: 1;
    color: white;
    font-size: 40px;
    padding-top: 50px;
    text-align: center;
    margin: 0;
}

.description-services-background {
    color: white;
    font-size: 40px;
    text-align: center;
    padding: 40px;
}

.title-services-section {

    color: #000bf8;
    font-size: 35px;
    font-weight: 500;
    text-align: center;
    padding-top: 100px;

}

.description-services-section {
    text-align: center;
    font-size: 20px;
}

.services-section {
    display: flex;
    flex-wrap: wrap;
    padding: 100px 230px;
    justify-content: center;
}

.img-services-sections {
    height: 60px;
    margin-bottom: 50px;
    margin-right: 10px;

}

.img-services-sections-azure {
    height: 40px;
    margin-top: 20px;
}

.img-services-sections-dynamodb {
    height: 40px;
    margin-top: 10px;
}

.img-services-sections-javascript {
    height: 40px;
    margin-top: 20px;
}

.img-services-sections-maven {
    height: 30px;
    margin-top: 30px;

}

.img-services-sections-express {
    height: 40px;
    margin-top: 10px;

}

.img-services-sections-golang {
    height: 40px;
    margin-top: 10px;

}

.container-background {
    background: linear-gradient(160deg, #2dedff, #000bf8, #2dedff);
    height: 450px;
}</style>