<template>
    <div>
        <div class="quillEditorContainer">
            <div class="quillEditor ">
                <div class="blog-info">
                    <div class="blog-row">
                        <v-row>
                            <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                                <v-text-field v-model="blogTitle" label="Titulo do Post"></v-text-field>


                            </v-col>
                            <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                                <v-select v-model="blogLanguage" :items="itemsLanguage" label="Linguagem"></v-select>

                            </v-col>

                        </v-row>
                    </div>
                    <v-row>
                        <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="dateFormatted" label="Data de Publicação"
                                        hint="MM/DD/YYYY format" persistent-hint @blur="date = parseDate(dateFormatted)"
                                        v-on="on"></v-text-field>
                                </template>
                                <v-date-picker :locale="ptBR" v-model="date" no-title @input="menu1 = false"
                                    :format="customDateFormat"></v-date-picker>
                            </v-menu>

                        </v-col>

                        <v-col cols="6" sm="6" md="6" lg="6" xl="6">

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
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="8" xl="4">
                            <v-file-input v-model="imageControl" :disabled="!blogTitle"
                                :style="{ opacity: blogTitle ? 1 : 0.5, width: '199' }"
                                :label="blogImgUrl || loadingImage ? null : 'Selecione uma Imagem'" type="file"
                                accept="image/*" id="files" name="files[]" multiple @change="uploadFile()" class="input"
                                outlined dense></v-file-input>

                            <!-- <router-link :to="{ path: '/outra-pagina', query: { blogImgUrl: blogImgUrl } }"
                        >Ir para Outra Página</router-link>        -->
                        </v-col>
                    </v-row>

                    <!-- <v-row>
                    <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                        <v-date-picker v-model="scheduledDate" label="Data de Agendamento"></v-date-picker>
                    </v-col>
                    <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                        <v-time-picker v-model="scheduledTime" format="24hr" label="Hora de Agendamento"></v-time-picker>
                    </v-col>
                </v-row> -->
                </div>
                <v-img v-if="imageControl !== 0" :src="blogImgUrl" :height="200" alt=" Imagem do
            Blog"></v-img>
                <v-progress-linear v-if="loadingImage && imageControl !== 0" indeterminate
                    color="primary"></v-progress-linear>
                <vue-editor v-model="content"></vue-editor>
                <div class="blog-actions">
                    <button class="btn-publish " @click="sendToFirebase">Publicar</button>
                </div>
                <v-alert v-if="err" dense outlined type="error">
                    {{ err | 'Editor está vazio.' }}
                </v-alert>
            </div>

        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ptBR from 'date-fns/locale/pt-BR';

export default {
    name: 'QuillEditor',
    components: {
        VueEditor
    },

    data() {
        return {
            imageControl: [],
            loadingImage: false,
            content: '',
            blogTitle: '',
            blogImgUrl: '',
            blogLanguage: 'pt-BR',
            err: null,
            itemsLanguage: [
                {
                    text: 'Português',
                    value: 'pt-BR'

                },
                {
                    text: 'Inglês',
                    value: 'en'
                }
            ],

            time: null,

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            ptBR: ptBR,
            menu1: false,
            menu2: false,
            dateHourToPost: null,
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
        // $route(to) {
        //     // Verifica a rota atual e ajusta a linguagem do seletor
        //     if (to.name === 'edit-post' && to.params.language) {
        //         this.blogLanguage = to.params.language;
        //     }
        // }
    },
    methods: {
        async sendToFirebase() {
            this.err = null; // Limpa o erro anterior antes de tentar novamente

            if (this.content.trim() === '' && this.blogTitle.trim() === '') {
                this.err = 'Todos os campos são obrigatórios.';
                return;
            }
            try {
                const options = { year: "numeric", month: "long", day: "numeric" };
                const postedName = this.blogLanguage === 'en' ? "Posted in " : "Postado em ";
                const date = postedName + new Date().toLocaleDateString(this.blogLanguage === "en" ? 'en-US' : 'pt-BR', options);
                const timestampInSeconds = Math.floor(+new Date() / 1000).toString();

                this.setDateHourToPost();

                if (this.blogLanguage === "en") {
                    await firebaseDb.doc("posts-en/" + timestampInSeconds)
                        .set({
                            content: this.content,
                            title: this.blogTitle,
                            pathImgOnFirebase: this.pathImgOnFirebase,
                            date: date,
                            id: timestampInSeconds,
                            language: this.blogLanguage,
                            dateHourToPost: this.dateHourToPost
                        });
                } else {
                    await firebaseDb.doc("posts/" + timestampInSeconds)
                        .set({
                            content: this.content,
                            title: this.blogTitle,
                            pathImgOnFirebase: this.pathImgOnFirebase,
                            date: date,
                            id: timestampInSeconds,
                            language: this.blogLanguage,
                            dateHourToPost: this.dateHourToPost
                        });
                }
 
                // this.$router.push("/editar-post");

                const language = this.blogLanguage;
                const routeName = 'edit-post';
                // this.switchLanguage(language);

                this.$i18n.locale = language;
                this.$store.commit('setLanguage', language);
                this.cleanForm();
                this.$router.push({ name: routeName, params: { language: language } });

            } catch (error) {
                this.err = error;
            }
        },
        
        cleanForm() {
            this.content = "";
            this.blogTitle = "";
            this.blogImgUrl = "";
            this.pathImgOnFirebase = "";
            this.blogLanguage = "";
            this.dateHourToPost = "";
        },
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
        // formatDate(date) {
        //     if (!date) return null
        //     const [year, month, day] = date.split('-')

        //     return `${month}/${day}/${year}`

        // },
        formatDate(date) {
            if (!date) return null;
            const [year, month, day] = date.split('-')
            // Ajuste para o formato DD/MM/YYYY
            return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

        }, parseDate(date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },

        // setDateHourToPost() {
        //     this.dateHourToPost = new Date(this.dateFormatted);
        //     this.dateHourToPost?.setHours(this.time.split(':')[0]);
        //     this.dateHourToPost?.setMinutes(this.time.split(':')[1]);
        // },
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
    created() {
        // Atualiza a linguagem com base na rota ao criar o componente
        if (this.$route.name === 'edit-post' && this.$route.params.language) {
            this.blogLanguage = this.$route.params.language;
        }
    }
}
</script> 

<style >
/* .blog-info {
    display: flex;
    
} */
.v-image.v-responsive.theme--light {
    display: none;
}

.blog-row {
    display: flex;
    justify-content: center;

}

.input {
    background-color: #21B6F8 !important;
    margin: 5px;
    color: white !important;
    border-radius: 20px;
    width: 50%;
    cursor: pointer;
    margin-bottom: 20px !important;

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
    background-color: #21B6F8 !important;
    width: 90px;
    height: 30px;
    border-radius: 30px;
    font-weight: 300;
    border: none;
    color: white;
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