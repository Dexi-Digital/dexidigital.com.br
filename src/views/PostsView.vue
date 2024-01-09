<template>
    <div>

        <div v-if="posts" class="posts">
            <NavBar :openedArticle="false" />
            <div>
                <v-progress-circular v-if="loadingFirebaseValue" class="loading" indeterminate
                    color="primary"></v-progress-circular>
                <div class="content-no-card" v-else-if="posts.length === 0">

                    <div class="content-no-card">
                        <p class="text-no-card">Não há nenhum post para exibir.</p>
                    </div>
                </div>
                <div v-else>
                    <div v-for="(post, index) in posts" :key="index">

                        <div v-if="cleanTitleForUrl(post.title) === cleanTitleForUrl(localUrl)" class="content-post">

                            <h2 class="title-post" v-html="post.title"></h2>
                            <p class="date-post" v-html="post.date"></p>
                            <v-img class="img-blog" :src="getPostImage(post.pathImgOnFirebase)"
                                alt="Imagem do Post"></v-img>
                            <p class="description-post" v-html="post.content"></p>
                        </div>

                    </div>
                </div>

                <WhatsappButton />
                <FooterComponent />
            </div>
        </div>
        <div v-else class="page-no-access posts-no-access">
            <h1 class="no-access">{{ $t("LOGIN.without-permission") }}</h1>
            <router-link class="return-login" to="/entrar">
                <p class="title-login">{{ $t("LOGIN.return-to") }} <span class="login">{{ $t("LOGIN.sign-in") }}</span></p>
            </router-link>
        </div>

    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import Vue from 'vue'
import WhatsappButton from '../components/WhatsappButton.vue';
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import VueMeta from 'vue-meta'
Vue.use(VueMeta);

export default {

    name: 'PostsView',
    components: {
        NavBar,
        FooterComponent,
        WhatsappButton
    },
    mounted() {
        // Exemplo de rastreamento de uma visualização de página
        this.$gtag.pageview('/PostsView');
        this.getPostsFromFirebase();
    },
    watch: {
        '$route'() {
            
            this.localUrl = this.$route.params.title;
        }
    },
    created() {
        if (this.$route.query.data) {
            this.$router.replace({ query: {} });
        }
    },
    data() {
        return {
            localUrl: this.$route.params.title,
            localImages: [],
            posts: [],
            imagesMap: [],
            loadingFirebaseValue: false,
        };
    },

    methods: {
        cleanTitleForUrl(title) {
  return title
  .toLowerCase()
        .replace(/ç/g, 'c') // Replace "ç" with "c"
        .replace(/â/g, 'a') // Replace "â" with "a"
        .replace(/ã/g, 'a') // Replace "ã" with "a"
        .replace(/á/g, 'a') // Replace "á" with "a"
        .replace(/à/g, 'a') // Replace "à" with "a"
        .replace(/é/g, 'e') // Replace "é" with "e"
        .replace(/ê/g, 'e') // Replace "ê" with "e"
        .replace(/í/g, 'i') // Replace "í" with "i"
        .replace(/ó/g, 'o') // Replace "ó" with "o"
        .replace(/ô/g, 'o') // Replace "ô" with "o"
        .replace(/õ/g, 'o') // Replace "õ" with "o"
        .replace(/ú/g, 'u') // Replace "ú" with "u"
        .replace(/ü/g, 'u') // Replace "ü" with "u"
        .replace(/,/g, '-') //
        .replace(/\s+/g, '-') // Replace spaces with hyphens again (there may be additional spaces)
        .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/:/g, '') // Remove ":"
        .replace(/\?/g, '') // Add this line to replace "?"
        + '/'; // Adicionar barra no final
        },

        async getDonwloadUrlAndSetblogImgUrl() {
            const storage = getStorage();
            await Promise.all(this.posts.map(async (post) => {
                const fullPath = ref(storage, post.pathImgOnFirebase);
                const url = await getDownloadURL(fullPath);
                this.imagesMap.push({ path: post.pathImgOnFirebase, url });

            }));
        },
        getPostImage(path) {
            const image = this.imagesMap.find(img => img.path === path);

            return image ? image.url : '';
        },
        truncateText(text, maxLength) {
            if (text?.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        },
        getPostsFromFirebase() {
            this.loadingFirebaseValue = true;
            this.posts = [];
            firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').get()
                .then((querySnapshot) => {
                    this.loadingFirebaseValue = false;
                    querySnapshot.forEach((doc) => {
                        const post = doc.data();
                        this.posts.push(post);

                    })
                    return this.getDonwloadUrlAndSetblogImgUrl();

                })
        },

        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return 'Postado em: ' + new Date(date).toLocaleDateString('pt-BR', options);
        },
    }

}
</script>
<style scoped>
.content-blog {
    padding: 90px 0 90px 0;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
}

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

.no-card-height {
    height: calc(100vh - 300px);
}

::v-deep.v-progress-circular>svg {
    width: auto !important;
    position: relative;
    top: 300px !important;
}

.v-progress-circular.loading.v-progress-circular--visible.v-progress-circular--indeterminate.primary--text {
    width: auto !important;
}

.loading {
    justify-content: center;
    display: flex;
}

.content-no-card {

    text-align: center;
    height: calc(100vh - 200px);

}

.text-no-card {
    text-align: center;
    padding-top: 130px;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    color: #7e7e7e;
}

.v-image.v-responsive.theme--light {
    display: inherit;
}

.content-post {
    padding-top: 120px !important;
    font-family: 'Quicksand', sans-serif;
}

.title-details {
    font-weight: bold;
}

.title-url {
    display: none;
}

.img-blog {
    width: 100%;
    margin-bottom: 20px;
}

::v-deep .v-application p {
    margin: 0;
    padding: 0;
}

.description-post {
    margin: 0 !important;
    padding: 0px !important;
}

.title-post {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 30px;

}

.date-post {
    color: #8d8d8d;
    padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
    .content-post {
        padding: 120px 30px 60px 30px !important;
    }

    .content-no-card {
        height: calc(100vh - 450px);
    }

    .text-no-card {

        padding: 120px 0 120px 0;

    }
}

@media screen and (min-width: 769px) {
    .content-post {
        padding: 120px 140px 60px 140px;
    }

    .content-no-card {
        height: auto;
    }

    .text-no-card {

        padding: 6% 0 6% 0;

    }
}
</style>