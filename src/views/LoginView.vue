<template>
    <div class="form-wrap">

        <form class="login">
            <h2 class="title-login">Dexi Digital</h2>
            <div class="inputs">
                <v-text-field type="email" class="input-email-login" v-model="email" :error-messages="emailErrors"
                    label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"
                    prepend-icon="mdi-email"></v-text-field>

                <v-text-field type="password" class="input-password-login" v-model="password"
                    :error-messages="passwordErrors" label="Senha" required @input="$v.password.$touch()"
                    @blur="$v.password.$touch()" prepend-icon="mdi-lock"></v-text-field>

                <v-alert v-if="err" dense outlined type="error">
                    E-mail ou senha incorreta.

                </v-alert>
            </div>
            <button @click="login" type="button" class="btn-login">Entrar </button>
            <div class="angle"></div>

        </form>
        <div class="background"></div>
    </div>
</template>
  
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { auth } from "../firebaseConfig"

export default {
    name: "LoginView",
    mixins: [validationMixin],
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) },

    },

    data() {
        return {
            email: '',
            password: '',
            err: null,
            emailRules: [
                v => !!v || "Email é obrigatório",
                v => /.+@.+\..+/.test(v) || "Email deve ser válido",
            ],
            passwordRules: [
                v => !!v || "Senha é obrigatória",
                v => v.length >= 6 || "Senha deve ter pelo menos 6 caracteres",
            ],
            showLocaleSwitcher: true,
        };
    },
    computed: {

        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('O E-mail é obrigatório')
            return errors
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.minLength && errors.push('A senha deve ter pelo menos 6 caracteres');
            !this.$v.password.required && errors.push('A senha é obrigatória');
            return errors;
        },
    },
    methods: {
        login() {
            if (this.email && this.password) {
                auth.signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        (result) => {
                            localStorage.setItem("token", result.user.uid);
                            this.$router.push("/criar-post");
                        },
                        (error) => {
                            this.err = error;

                        }

                    );
            } else {
                this.err = { message: 'Preencha os campos de email e senha.' };
            }
        }
    }
};
</script>
  
<style scoped >
.title-login {
    text-align: center;
}

.btn-login {
    color: white;
    background-color: rgb(32, 32, 32) !important;
    width: 35%;
    height: 5%;
    border-radius: 20px;
    margin-top: 20px;
}

.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 900px) {
        width: 100%;
    }

    .login-register {
        margin-bottom: 32px;

        .router-link {
            color: #000;
        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media (min-width: 900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;

            @media (min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;

                input {
                    width: 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus {
                        outline: none;
                    }
                }

                .icon {
                    width: 12px;
                    position: absolute;
                    left: 6px;
                }
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;

            &:hover {
                border-color: #303030;
            }
        }

        .angle {
            display: none;
            position: absolute;
            background-color: #fff;
            transform: rotateZ(3deg);
            width: 60px;
            right: -30px;
            height: 101%;

            @media (min-width: 900px) {
                display: initial;
            }
        }
    }

    .background {
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/background.png");
        width: 100%;
        height: 100%;

        @media (min-width: 900px) {
            display: initial;
        }
    }
}
</style>