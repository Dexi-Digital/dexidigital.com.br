<template>
    <div>
        <NavBar />
        <div class="content-form">
            <div class="content-form-title">
                <p class="custom-title">
                    <span class="custom-strong">{{ $t("FORM.title") }}</span> 
                </p>
            </div>
            <div class="box-form">
                <v-form class="form" ref="form" v-model="valid" lazy-validation @submit.prevent="submitForm">
                    <v-row>
                        <v-col cols="12" sm="12" md="6  ">

                            <v-text-field style="color: black!important;" v-model="name" :counter="10" :rules="nameRules"
                                :label="$t('FORM.name')" required></v-text-field>

                        </v-col>

                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="company" :rules="companyRules" :label="$t('FORM.company')"
                                required></v-text-field>


                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="phone" :rules="phoneRules" :label="$t('FORM.phone')"
                                v-mask="'(##) #####-####'" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">

                            <v-text-field v-model="email" :rules="emailRules" :label="$t('FORM.email')"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">

                            <v-text-field v-model="linkedin" :rules="linkedinRules" :label="$t('FORM.linkedIn')"
                                required></v-text-field>

                        </v-col>
                        <v-col cols="12" sm="12" md="6">

                            <v-select v-model="select" :items="translatedItems"
                                :rules="[v => !!v || $t('VALIDATION.required')]" :label="$t('FORM.job')"
                                required></v-select>


                        </v-col>
                        <v-col cols="12" sm="12" md="12">

                            <v-text-field v-model="description" :rules="descriptionRules"
                                :label="$t('FORM.describe-the-project')" required></v-text-field>

                        </v-col>
                    </v-row>
                    <div>

                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                            :label="$t('FORM.policy-input')" required></v-checkbox>
                        <div class="links">
                            <router-link to="/politica-de-privacidade">{{ $t("FORM.privacy-policy") }} </router-link><br>

                        </div>
                    </div>
                    <div class="content-btn-form">
                        <v-btn class="btn-form" @click="send">
                            {{ $t("FORM.send") }} 
                        </v-btn>
                    </div>

                    <v-alert v-if="successAlert && !isError" dense text type="success">{{ 'Formulário enviado com sucesso!'
                    }}</v-alert>
                    <v-alert v-if="isError" dense text type="error">{{ errorMessage }}</v-alert>
                </v-form>
            </div>
            <WhatsappButton />
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import { firebaseDb } from "../firebaseConfig";
import WhatsappButton from '../components/WhatsappButton.vue';

// import * as admin from "firebase-admin";
// import * as functions from "firebase-functions";

export default {
    name: "FormView",
    mounted() {
        this.$gtag.pageview('/BlogView');
    },
    data() {
        return {
            valid: true,
            name: "",
            company: "",
            phone: "",
            email: "",
            linkedin: "",
            select: "",
            description: "",
            err: null,
            items: [
                'headInnovation',
                'itCoordinator',
                'projectManager',
                'marketingManager',
                'analyst',
                'developer',
                'other'
            ],
            checkbox: false,
            successAlert: false,

            isError: false,
            errorMessage: "",

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            companyRules: [
                v => !!v || 'Company is required',
            ],
            phoneRules: [
                v => !!v || 'Phone is required',
                v => /^\(\d{2}\) \d{5}-\d{4}$/.test(v) || 'Phone must be in the format (XX) XXXXX-XXXX',
            ],
            linkedinRules: [
                v => !!v || 'LinkedIn is required',
                v => !!v || 'LinkedIn is required',
            ],
            selectRules: [
                v => !!v || 'Please select a job title',
            ],
            descriptionRules: [
                v => !!v || 'Description is required',
                v => v.length >= 10 || 'Description must have at least 10 characters',
            ],
        }
    },
    components: {
        NavBar,
        FooterComponent,
        WhatsappButton
    }, computed: {
        translatedItems() {
            return this.items.map(item => ({
                value: item,
                text: this.$t(`OPTIONS.JOB-OPTIONS.${item}`)
            }));
        }
    },
    methods: {

        async send() {

            try {
                this.isError = false;
                if (this.name && this.email && this.company && this.phone && this.select && this.description && this.linkedin && this.checkbox) {
                    this.$gtag.event('form_submit', {
                        event_category: 'form_submission',
                        event_label: 'form_submitted',
                        value: 1,
                    });

                    await firebaseDb.collection("mail").add({
                        to: ['dexidigitalcompany@gmail.com'],
                        message: {
                            subject: 'Formulário de Contato',
                            text: 'This is the plaintext section of the email body.',
                            html: `<p><strong>Nome:</strong> ${this.name}</p>
                                <p><strong>Empresa:</strong> ${this.company}</p>
                                <p><strong>Telefone:</strong> ${this.phone}</p>
                                <p><strong>E-mail:</strong> ${this.email}</p>
                                <p><strong>LinkedIn:</strong> ${this.linkedin}</p>
                                <p><strong>Cargo:</strong> ${this.select}</p>
                                <p><strong>Descrição:</strong> ${this.description}</p>
                             `
                        },

                    });

                    // Reset form fields
                    this.name = "";
                    this.company = "";
                    this.phone = "";
                    this.email = "";
                    this.linkedin = "";
                    this.select = "";
                    this.description = "";
                    this.checkbox = false;

                    // Reset form validation status
                    this.valid = false;

                    // Clear validation errors for each field
                    this.$refs.form.resetValidation();

                    this.successAlert = true;
                    this.errorMessage = ""; // Limpar a mensagem de erro, se houver
                } else {
                    this.isError = true;
                    this.errorMessage = this.$t('VALIDATION.please-fill-in-all-required-fields');
                }
            } catch (error) {
                this.isError = true;
                this.errorMessage = "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.";

                console.error("Erro no envio do formulário:", error);
            }
        }
    }


}
</script>

<style>
.theme--light.v-text-field>.v-input__control>.v-input__slot:before {
    color: #ff0000;
}

.links {
    margin-top: 10px;
}

.v-application--wrap {
    min-height: 0;
}

.content-form {
    padding: 120px 20px 50px 20px;
}

.content-form-title {
    text-align: center;
}

.custom-title {
    font-size: 30px;
    font-weight: 100;
    line-height: 1;
}

.custom-strong {
    font-weight: bold;
    color: #7A7A7A;
    font-size: 30px;
}

.content-btn-form {
    display: flex;
    justify-content: center;
    padding: 40px 0 20px 0;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 33px;
    min-width: 27px;

    padding: 0 16px;
}

.btn-form {
    padding: 10px;
    background-color: #21aae7 !important;

    color: white !important;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    width: 25% !important;
    cursor: pointer;
}

.btn-form:hover {
    background-color: #005276 !important;
    transition: 0.2s;
}

.btn-form:active {
    border: 1.5px solid black;
}

@media screen and (min-width: 481px) and (max-width: 768px) {

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 90%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 200px;
    }
}

@media screen and (max-width: 769px) {
    div#offcanvasNavbar {
        width: 70%;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;
    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 90%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 220px;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;

    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 70%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 250px;
    }
}

@media screen and (min-width: 1201px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;

    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 70%;
    }

    .v-input__control {
        width: 100% !important;

    }

    .btn-form {
        width: 250px;

    }
}
</style>