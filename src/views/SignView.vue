<!-- <template>
    <div class="form-wrap">
      <form class="login" >
  
        <h2>Criar conta</h2>
        <div class="inputs">
  
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img src="@/assets/envelope-regular.svg" alt="Email" class="icon" />
          </div>
          <div class="input">
            <input type="password" placeholder="Senha" v-model="password" />
            <img src="@/assets/lock-alt-solid.svg" alt="Senha" class="icon" />
          </div>
          <div v-if="err" class="error">
            {{ err }}
          </div>
        </div>
        <router-link class="forgot-password" to="/entrar">Já tem uma conta?</router-link>
        <button @click.prevent="signup" class="btn-login" type="submit">Criar</button>
        <div class="angle"></div>
  
      </form>
      <div class="background"></div>
    </div>
  </template>
  
  <script>
  import { firebaseAuth, firebaseDb } from "../firebaseConfig";
  
  export default {
    name: "SignView",
    data() {
      return {
        email: '',
        password: '',
        err: null,
      };
    },
    methods: {
      signup() {
        firebaseAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            (result) => {
        firebaseDb
        .collection("users")
        .doc(result.user.uid)
          .set({
            id: result.user.uid,
            email: this.email,
          })
          .then(() => {
            this.$router.push("/")

                })
              
          })

          
      },
    },
  };
  </script>
  


<style scoped lang="scss">

.btn-login {
    color: white;
    background-color: rgb(32, 32, 32) !important;
    width: 25%;
    height: 5%;
    border-radius: 20px;
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
</style> -->