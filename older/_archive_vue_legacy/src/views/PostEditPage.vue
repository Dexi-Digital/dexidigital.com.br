<template>
    <div>
        <div v-if="token">
            <NavBarPost />
            <div class="quillEditorContainer">
                <div class="quillEditor ">
                    <div class="blog-info">

                        <div class="blog-row">
                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                    <v-text-field v-model="blogTitle" label="Titulo do Post"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                                    <v-file-input v-model="imageControl" :disabled="!blogTitle"
                                        :style="{ opacity: blogTitle ? 1 : 0.5, width: '199' }"
                                        :label="blogImgUrl || loadingImage ? null : 'Selecione uma Imagem'" type="file"
                                        accept="image/*" id="files" name="files[]" multiple @change="uploadFile()"
                                        class="input" outlined dense></v-file-input>


                                </v-col>
                            </v-row>
                        </div>
                    <v-row>
                        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="dateFormatted" label="Editar Data de publicação"
                                        v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title locale="pt-BR"
                                    @input="menu1 = false"></v-date-picker>
                            </v-menu>

                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6" xl="6">

                            <v-menu ref="menu" v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                                :return-value.sync="time" lazy transition="scale-transition" offset-y full-width
                                max-width="290px" min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="time" label="Hora da Publicação" readonly
                                        v-on="on"></v-text-field>
                                </template>
                                <v-time-picker v-if="menu2" v-model="time" format="24hr" full-width
                                    @click:minute="$refs.menu.save(time)"></v-time-picker>
                            </v-menu>

                        </v-col>
                    </v-row>
                    </div>
                    <v-img v-if="imageControl !== 0" :src="blogImgUrl" :height="200" alt=" Imagem do
                Blog"></v-img>
                    <v-progress-linear v-if="loadingImage && imageControl !== 0" indeterminate
                        color="primary"></v-progress-linear>
                    <vue-editor v-model="content"></vue-editor>
                    <div class="blog-actions">
                        <button class="btn-publish " @click="updatePost">Salvar Edições</button>
                    </div>
                    <v-alert v-if="err" dense outlined type="error">
                        {{ err | 'Editor está vazio.' }}
                    </v-alert>
                </div>

            </div>
        </div>
        <div class="page-no-access" v-else>
            <h1 class="no-access">{{ $t("LOGIN.without-permission") }}</h1>
            <router-link class="return-login" to="/entrar">
                <p class="title-login">{{ $t("LOGIN.return-to") }} <span class="login">{{ $t("LOGIN.sign-in") }}</span></p>
            </router-link>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { firebaseDb } from "../firebaseConfig";
import NavBarPost from "@/components/NavBarPost.vue";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default {
    name: 'QuillEditor',
    components: {
        VueEditor,
        NavBarPost
    },

    data() {
        return {
            imageControl: [],
            loadingImage: false,
            content: '',
            blogTitle: '',
            blogImgUrl: '',
            token: localStorage.getItem("token"),
            err: null,// O conteúdo do editor será armazenado aqui
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateFormatted: null,
            menu1: false,
            menu2: false,
            time: null,
            customDateFormat: 'DD/MM/YYYY' // Adicione o formato desejado aqui

        };

    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date)
        },
    },

    watch: {
        date() {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    created() {
        this.loadPostData();
    },

    methods: {
        async getDonwloadUrlAndSetblogImgUrl() {
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + document.getElementById("files").files[0].name);

            getDownloadURL(storageRef)
                .then((url) => {
                    this.blogImgUrl = url;
                })
                .catch(() => {
                    this.err = 'Erro ao obter a URL de download';
                }).finally(() => {
                    this.loadingImage = false;
                });
        },
        async uploadFile() {
            if (this.imageControl.length > 0) {
                this.loadingImage = true;
                const storage = getStorage();
                const storageRef = ref(storage, 'images/' + document.getElementById("files").files[0].name);
                var file = document.getElementById("files").files[0];
                // 'file' comes from the Blob or File API
                await uploadBytes(storageRef, file).then((snapshot) => {
                    this.pathImgOnFirebase = snapshot.ref.fullPath;
                });
                await this.getDonwloadUrlAndSetblogImgUrl();
            } else {
                this.blogImgUrl = '';
                this.loadingImage = false;
            }

        },
        async loadPostData() {

            try {
                const postId = this.$route.params.postId;
                const docRef = firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').doc(postId);
                const doc = await docRef.get();
                if (doc.exists) {
                    const post = doc.data();
                    this.blogTitle = post.title;
                    this.content = post.content;
                    this.pathImgOnFirebase = post.pathImgOnFirebase;
                    this.dateFormatted = post.dateHourToPost.toDate().toLocaleDateString('pt-BR');
                    this.time = post.dateHourToPost.toDate().toLocaleTimeString('pt-BR');
                }


            } catch (error) {
                console.error("Erro ao carregar dados do post:", error);
            }
        },
        async updatePost() {
            try {
                const postId = this.$route.params.postId;
                const docRef = firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').doc(postId);
                this.setDateHourToPost();

                await docRef.update({
                    title: this.blogTitle,
                    content: this.content,
                    pathImgOnFirebase: this.pathImgOnFirebase,
                    dateHourToPost: this.dateHourToPost
                });
                console.log("Post atualizado com sucesso");
                this.$router.push('/editar-post'); // Redirecionar para a página de lista de posts após a atualização
            } catch (error) {
                console.error("Erro ao atualizar o post:", error);
            }
        },
        // formatDate(date) {
        //     //formato de data, não exluir 
        //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
        //     return new Date(date).toLocaleString('pt-BR', options);
        // },
        formatDate(date) {
            if (!date) return null;
            const [year, month, day] = date.split('-')
            // Ajuste para o formato DD/MM/YYYY
            return `${day}/${month}/${year}`;

            // return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

        },
        parseDate(date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
       
        setDateHourToPost() {
            //Certifique-se de que a data e a hora estão definidas antes de criar a nova data
            if (this.dateFormatted && this.time) {
                const [day, month, year] = this.dateFormatted.split('/');
                const [hours, minutes] = this.time.split(':');

                // Certifique-se de que todos os valores são numéricos
                const numericValues = [day, month, year, hours, minutes].map(Number);

                // Verifique se há algum NaN (Not a Number) nos valores
                if (!numericValues.some(isNaN)) {
                    //             // Crie a nova data com os valores extraídos
                    this.dateHourToPost = new Date(numericValues[2], numericValues[1] - 1, numericValues[0], numericValues[3], numericValues[4]);
                } else {
                    console.error('Valores não numéricos encontrados ao criar a data.');
                }
            } else {
                console.error('Data ou hora não definidas ao criar a data.');
            }
        },

    },
}
</script> 


<style scoped >
.page-no-access {
    text-align: center;
    padding-top: 20%;
}

.title-login {
    color: #158BBF;
}

.login {
    font-weight: 800;
}

.v-image.v-responsive.theme--light {
    display: none;
}

.blog-row {
    display: flex;
    justify-content: center;

}

.input {
    background-color: #158BBF;
    /* margin: 5px; */
    color: white !important;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 0!important;
    width: 100%;

}


.v-application--is-ltr .v-input__prepend-outer {
    margin: 10px 0 0 8px;
}

.v-text-field fieldset,
.v-text-field .v-input__control {
    color: rgba(0, 0, 0, 0) !important;
    caret-color: rgba(0, 0, 0, 0) !important;
}

.v-text-field fieldset,
.v-text-field .v-input__control::before {
    border: 10px;
}

.v-input__control {
    flex-direction: initial;
}

.v-application--is-ltr .v-text-field--outlined fieldset {
    padding-left: 8px;
    padding-right: 8px;
}

.v-icon.v-icon.v-icon--link::before {
    color: rgb(255, 255, 255);
    padding: 10px;
}

.v-file-input__text {
    color: white !important;
}

.v-messages.theme--light {
    display: none;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0;
    margin: 0;
}

.btn-publish {
    background-color: #158BBF;
    width: 130px;
    height: 40px !important;
    border-radius: 30px;
    font-weight: 300;
    border: none;
    color: white;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 30px;

}

.container-buttonSave {
    padding-top: 20px;
    display: flex;
    justify-content: end;

}

.quillEditor {
    padding-top: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
}

.quillEditorContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ql-editor {
    min-height: 272px !important;
    font-size: 16px;
}

@media screen and (max-width:345px) {
    .create-post {
        padding: 20px 45px 20px 45px !important;

    }
}

@media screen and (max-width: 481px) {


    .input {
        width: 100%;
    }

    .quillEditor {
        width: 90%;

    }
}

@media screen and (max-width: 1200px) {
    .create-post {
        padding-top: 0 !important;
    }
}

@media screen and (min-width: 1200px) {
    .input {
        width: 100% !important;
    }

    .ql-editor {
        min-height: 30vh !important;
        font-size: 16px;
    }

    .create-post {
        padding-top: 0 !important;
    }
}

@media screen and (min-width: 1440px) {
    .quillEditor {
        padding-top: 20px;
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    .ql-editor {
        min-height: 40vh !important;
        font-size: 16px;
    }

}
</style>
