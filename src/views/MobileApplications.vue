 <!-- <template>
    <div>
        <NavBar />
        <div class="mobile-applications-container">
            <div class="mobile-applications-container-navbar">
                <p class="mobile-applications-container-navbar-title">Desenvolvimento de Aplicativos Mobile</p>
            </div>
            <div class="mobile-applications-section">
                <div class="mobile-applications-section-description">
                    Na era digital, os aplicativos móveis se tornaram uma parte essencial da vida cotidiana. Seja para
                    comunicação, entretenimento, compras ou produtividade, os aplicativos móveis desempenham um papel
                    fundamental na forma como interagimos com a tecnologia.<br>
                    <br>
                    Na Dexi Digital, somos apaixonados por oferecer soluções de aplicativos móveis de alta qualidade que
                    atendam
                    às necessidades de nossos clientes. Desenvolvemos aplicativos nativos para Android e iOS, bem como
                    aplicativos híbridos usando a tecnologia Flutter. Nossa abordagem centrada no cliente e nossa
                    metodologia
                    ágil nos permitem entregar soluções de aplicativos sob medida dentro do prazo e do orçamento.
                </div>

            </div>
            <div class="mobile-applications-services">
                <h2 class="mobile-applications-services-span">
                    <span class="mobile-applications-services-span-title">
                        Nossos Serviços de Desenvolvimento de
                    </span>
                    Aplicativos Mobile
                </h2>
                <p class="mobile-applications-services-description">Nossos serviços de desenvolvimento de aplicativos mobile
                    abrangem uma ampla variedade de áreas e setores.
                    Aqui estão alguns dos principais serviços que oferecemos:</p>
            </div>
            <div class="mobile-applications-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Desenvolvimento de Aplicativos Nativos:
                        </span>
                        Se sua empresa deseja um aplicativo nativo para Android ou iOS, nossa equipe de desenvolvedores
                        altamente qualificados está pronta para transformar sua visão em realidade.
                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Aplicativos Híbridos com Flutter:
                        </span>
                        A tecnologia Flutter nos permite criar aplicativos híbridos que funcionam perfeitamente em ambas as
                        plataformas, economizando tempo e recursos.
                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Reformulação de Aplicativos Existentes:
                        </span>
                        Se você já possui um aplicativo, podemos ajudar a reformulá-lo e melhorar sua funcionalidade e
                        design.
                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Consultoria em Estratégia de Aplicativos:
                        </span>
                        Trabalhamos com você desde a concepção até o lançamento do aplicativo, oferecendo insights
                        estratégicos
                        para garantir o sucesso de seu projeto.
                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Manutenção e Suporte Contínuo:
                        </span>
                        Após o lançamento, estamos disponíveis para manutenção e suporte contínuo, garantindo que seu
                        aplicativo
                        funcione perfeitamente.
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
                    <span class="mobile-applications-advantages-span-title">Vantagens do Desenvolvimento de Aplicativos com
                        a</span>
                    Dexi Digital
                </h2>
                <p class="mobile-applications-advantages-description">Ao escolher a Dexi Digital como seu parceiro de
                    desenvolvimento de aplicativos móveis, você se beneficiará das seguintes vantagens:</p>
            </div>

            <div class="mobile-applications-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Qualidade Premium:
                        </span>
                        Nossa equipe se dedica à excelência em cada detalhe, garantindo que seu aplicativo seja de alta
                        qualidade e atenda às expectativas dos usuários.
                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Metodologia Ágil:
                        </span>
                        Seguimos uma abordagem ágil que permite entregas rápidas e eficientes, mantendo você atualizado em
                        cada etapa do processo.
                    </li>

                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Experiência Diversificada:
                        </span>
                        Trabalhamos com empresas de diversos setores, o que nos permite oferecer insights e soluções
                        adaptadas às necessidades exclusivas de cada cliente.
                    </li>
                    <li class="mobile-applications-container-color-item">
                        <span class="mobile-applications-container-color-strong">
                            Suporte Personalizado:
                        </span>
                        Nosso compromisso com o sucesso de seu aplicativo não termina no lançamento. Estamos sempre
                        disponíveis para oferecer suporte e manutenção contínuos.
                    </li>
                </ul>
            </div>
            <div class="mobile-applications-container-color-img-bottom"></div>

            <p class="mobile-applications-container-description">O Outsourcing de TI é uma estratégia inteligente para
                empresas
                que desejam manter sua vantagem competitiva e garantir a eficiência operacional. A Dexi Digital está aqui
                para ser seu parceiro de confiança no mundo da tecnologia.
            </p>
            <div class="mobile-applications-container-contact">
                <p class="mobile-applications-container-contact-background">
                    Entre em contato conosco hoje mesmo para saber
                    mais sobre como nossos serviços de Outsourcing de TI podem beneficiar sua empresa.
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
    background-image: url('../assets/top2.png');
    padding-top: 70px;
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

    &-img-bottom {
        background-image: url('../assets/bottom2.png');
        height: 100px;
        width: 100%;
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
            padding: 125px 20px 20px 20px;
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
        height: auto;
        width: 70%;
        border-radius: 20px;

    }
    .mobile-applications-container-navbar{
        &-title{
            padding: 126px 20px 20px 20px;
        }
    }
}


@media screen and (min-width: 1025px) {
    .mobile-applications-content-img {
        height: 65vh;
        width: 70%;
        border-radius: 20px;
    }
    .mobile-applications-container-navbar{
        &-title{
            padding: 140px 20px 30px 20px;
        }
    }
}
</style>  -->