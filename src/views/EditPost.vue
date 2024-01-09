<template>
  <div class="">
    <div v-if="token">
      <NavBarPost />
      <div>

        <v-progress-circular v-if="loadingFirebaseValue" class="loading" indeterminate
          color="primary"></v-progress-circular>


        <div class="content-no-card container-edit-post" v-else-if="arrayComValoresDoFirebase.length === 0">

          <p class="text-no-card">Não há nenhum card para exibir.</p>
          <router-link to="/criar-post">
            <v-btn class="add-card-button">Adicionar Card</v-btn></router-link>

        </div>



        <div v-else>
          <div class="icon-abs">
            <router-link class="link content-button-plus" to="/criar-post">
              <v-btn class="add-card-button-plus  icon-plus">
                <i class="fa-solid fa-plus"></i>
              </v-btn>

            </router-link>

          </div>

          <div class="content-blog ">
            <v-card v-for="(item, index) in arrayComValoresDoFirebase" :key="index" class="mx-auto content-card">
              <div class="icons">
                <v-btn @click="editPost(item)" class="icon">

                  <i class="fa-solid fa-pen-to-square"></i>
                </v-btn>
                <v-btn @click="deletePost(item)" class="icon">
                  <i class="fa-solid fa-trash"></i>
                </v-btn>
              </div>
              <v-img class="img-blog" :src="getCardImage(item.pathImgOnFirebase)"></v-img>
              <v-card-text>
                <div class="infos">
                  <p class="title-blog" v-html="item.title"></p>
                  <p class="title-data" v-html="item.dateHourToPost ? formatDateHour(item.dateHourToPost) : item.date">
                  </p>
                  <p v-html="truncateText(item.content, 150)"></p>
                  <div class="content-arrow">
                    <div class="links"> {{ $t("POSTS.read-more") }} » </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>

      <div class="d-flex icon-language align-items-center" v-if="showLocaleSwitcher">
        <input type="radio" id="en" v-model="$i18n.locale" value="en" style="display: none">
        <label for="en">

          <button @click="switchLanguage('en')" class="me-2">
            <img src="../assets/en-icon.svg" alt="USA">
          </button>
        </label>

        <input type="radio" id="pt-BR" v-model="$i18n.locale" value="pt-BR" style="display: none">
        <label for="pt-BR">
          <button @click="switchLanguage('pt-BR')" class="me-2">
            <img src="../assets/br-icon.svg" alt="Brazil">
          </button>
        </label>
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
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import NavBarPost from "@/components/NavBarPost.vue";
import { doc, deleteDoc } from "firebase/firestore";

// // import { mapGetters } from 'vuex';

export default {
  name: 'EditPost',
  return: {
    languageParam: null,

  },
  components: {
    NavBarPost

  },

  // computed: {
  //   ...mapGetters(['isLoggedIn']), // Certifique-se de ter o getter 'isLoggedIn' no seu store

  // },

  created() {
    // this.getPostsFromFirebase();
    const language = this.$route.params.language || 'en';
    this.getPostsFromFirebase(language);
  },
  mounted() {
    // Exemplo de rastreamento de uma visualização de página
    this.$gtag.pageview('/BlogView');
  },


  // metaInfo() {
  //   const post = this.posts.find((post) => post.url === this.localUrl);
  //   return {
  //     title: post ? post.title : "Posts",
  //     // meta: [
  //     //   {
  //     //     vmid: "description",
  //     //     name: "description",
  //     //     content: post ? post.description : "Meu blog sobre diversos temas.",
  //     //   },
  //     //   {
  //     //     vmid: "og:title",
  //     //     property: "og:title",
  //     //     content: post ? post.title : "Blog - Meu Site",
  //     //   },
  //     //   {
  //     //     vmid: "og:description",
  //     //     property: "og:description",
  //     //     content: post ? post.description : "Meu blog sobre diversos temas.",
  //     //   },
  //     //   {
  //     //     vmid: "og:image",
  //     //     property: "og:image",
  //     //     content: post ? post.image : "URL_DA_IMAGEM_PADRAO_PARA_O_BLOG",
  //     //   },
  //     // ],
  //   };
  // },

  data() {

    return {
      localImages: [],
      arrayComValoresDoFirebase: [],
      // item: []
      posts: {},
      token: localStorage.getItem("token"),
      loadingFirebaseValue: false,

      showLocaleSwitcher: true,

    }
  },
  methods: {
    goBack() {

      this.$router.push("/criar-post");
    },

    async getDonwloadUrlAndSetblogImgUrl() {
      const storage = getStorage();
      await Promise.all(this.arrayComValoresDoFirebase.map(async (item) => {
        const fullPath = ref(storage, item.pathImgOnFirebase);
        const url = await getDownloadURL(fullPath);
        this.localImages.push({ path: item.pathImgOnFirebase, url });
      }));
    },
    getCardImage(path) {
      const image = this.localImages.find(img => img.path === path);
      return image ? image.url : '';
    },

    truncateText(text, maxLength) {
      if (text?.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    // getPostsFromFirebase() {
    //   this.loadingFirebaseValue = true;
    //   this.arrayComValoresDoFirebase = []; // Limpa a array antes de adicionar novos posts

    //    firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').get()
    //      .then((querySnapshot) => {
    //        this.loadingFirebaseValue = false;
    //        querySnapshot.forEach((doc) => {
    //          const post = doc.data();
    //          this.arrayComValoresDoFirebase.push(post);
    //        });
    //        return this.getDonwloadUrlAndSetblogImgUrl();
    //      });
    //  },

    getPostsFromFirebase() {
   this.loadingFirebaseValue = true;
   this.arrayComValoresDoFirebase = [];  // Limpa a array antes de adicionar novos posts

   firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').get()
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         const post = doc.data();
         this.arrayComValoresDoFirebase.push(post);
       });

        //Filtra e ordena as datas
         this.arrayComValoresDoFirebase = this.arrayComValoresDoFirebase
           .filter(item => item.dateHourToPost)
           .sort((a, b) => {
             const dateA = new Date(a.dateHourToPost.seconds * 1000);
             const dateB = new Date(b.dateHourToPost.seconds * 1000);
             return dateA - dateB;
           });

         return this.getDonwloadUrlAndSetblogImgUrl();
       })
       .finally(() => {
         this.loadingFirebaseValue = false;
       });
   },
    formatDateHour(date) {
      const hasPosted = this.verifyCanPost(date);

      if (this.$store.state.language === 'pt-BR') {
        return hasPosted ? 'Postado em: ' + new Date(date.seconds * 1000).toLocaleDateString('pt-BR') : 'Será postado em: ' + new Date(date.seconds * 1000).toLocaleDateString('pt-BR');
      } else {
        return hasPosted ? 'Posted in: ' + new Date(date.seconds * 1000).toLocaleDateString('en-US') : 'Will be posted in: ' + new Date(date.seconds * 1000).toLocaleDateString('en-US');
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return 'Postado em: ' + new Date(date).toLocaleDateString('pt-BR', options);
    },
    verifyCanPost(dateHourToPost) {
      const today = new Date();
      const postDate = this.convertTimestampToDate(dateHourToPost);
      const canPost = today >= new Date(postDate);
      return canPost;
    },
    convertTimestampToDate(timestamp) {
      const seconds = timestamp?.seconds;
      const milliseconds = seconds * 1000;
      // Criar uma instância de Date usando os milissegundos
      const date = new Date(milliseconds);
      return date;
    },
    editPost(post) {

      this.$router.push({ name: 'post-edit-page', params: { postId: post.id } });
    },

    deletePost(post) {
      // Excluir o post do Firebase
      deleteDoc(doc(firebaseDb, this.$store.state.language === 'en' ? 'posts-en' : 'posts', post.id))

        .then(() => {
          console.log('Post excluído com sucesso');
          const index = this.arrayComValoresDoFirebase.findIndex(item => item.id === post.id);
          if (index !== -1) {
            this.arrayComValoresDoFirebase.splice(index, 1);
          }
        })
        .catch(error => {
          console.error('Erro ao excluir o post:', error);
        });
    },
    switchLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setLanguage', language);
      const newRoute = language === 'en' ? '/editar-post/en' : '/editar-post/pt-BR';
      this.$router.push(newRoute);
      setTimeout(() => {
        location.reload();
      }, 300);

    },

  }
}
</script>
<style scoped>
.icon-language {
  position: fixed;
  top: auto !important;
  right: 20px !important;
  bottom: 20px !important;
  left: auto !important;
  box-shadow: none;
  background-repeat: no-repeat;
  background-size: 55px;
  padding: 0;
  height: 58px !important;
  min-width: 56px !important;
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

::v-deep.v-progress-circular>svg {
  width: auto !important;
  position: relative;
  top: 120px !important;
}

.v-progress-circular.loading.v-progress-circular--visible.v-progress-circular--indeterminate.primary--text {
  width: auto !important;
}

.loading {
  justify-content: center;
  display: flex;
}

.icon-abs {
  display: flex;
  justify-content: end;
  padding: 20px 20px 0 0;
}

.fa-plus {
  color: white !important;
}

.content-no-card {
  height: calc(100vh - 120px);
  text-align: center;
  padding-top: 10%;

}


.text-no-card {

  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: #7e7e7e;
}



.add-card-button {
  background-color: #158BBF !important;
  color: white;
}

.add-card-button-plus {
  background-color: #158BBF !important;
  color: white !important;
}

div p img {
  height: 100px;
  /* outras propriedades de estilo, se necessário */
}

.header {
  background: linear-gradient(to right, #158BBF 0%, #021e78 100%);
  height: 120px;
}

.create-post {
  color: #ffffff;
  font-size: 30px;
  padding: 20px 70px;
  font-weight: bold;
}

.icon-arrow {
  color: white;
  font-size: 20px;
  padding: 20px 0 0 30px;

}

.img-blog {
  border-radius: 8px 8px 0 0;
  height: 200px;
  width: 100%;
  background-size: cover;
}

.icon {
  color: white;
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none;
  border-radius: 50%;
  width: 41px;
}

.icon-plus {
  color: white;
  background-color: #21B6F8 !important;
  box-shadow: none;
  border-radius: 50%;

}

.icon-plus:hover {
  color: white;
  background-color: #ace6ff !important;
  box-shadow: none;
  border-radius: 50%;

}

.v-btn:not(.v-btn--round).v-size--default {
  min-width: 10px !important;
  height: 45px;
}

.icon:hover {

  background-color: rgba(255, 255, 255, 0.187) !important;

}

button.icon.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  height: 40px;
  min-width: 30px;
}

.icons {
  position: fixed;
  background-color: #21B6F8;
  height: 45px;
  padding: 3px;
  border-radius: 8px 8px 0 0;
  color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 2;
}



.v-image.v-responsive.theme--light {
  display: inherit !important;
}

.title-blog {
  font-size: 19px;
  font-weight: 700;
}

.title-data {
  color: #a9a9a9;
}

.content-img-blog {
  display: flex;
  justify-content: center;
}

.content-blog {

 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.no-posts {
  text-align: center;
}

.mx-auto.content-card.v-card.v-card--link.v-sheet.theme--light {
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: start !important;
  ;
}

.link {
  text-decoration: none;
}

.links {
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  margin-bottom: 20px;
}

.links:hover {
  color: #7d7c7c;
  transition: 1s;
}

.arrow {
  color: rgb(133, 133, 133);
  font-weight: 300;
}

.content-arrow {

  display: flex;
}

.content-card {
  perspective: 1000px;
  transition: transform 0.3s ease;
  border-radius: 8px !important;

  box-shadow: 0 0 10px 0 rgba(53, 53, 53, 0.15) !important;
  margin-bottom: 50px;
  cursor: pointer;
  margin: 30px !important;

}

.title-details {
  font-weight: bold;
}

.details {
  font-size: 12px;
}

@media screen and (min-width:320px) and (max-width: 480px) {


  .content-card {
    width: 80%;
  }

  /* .content-blog {
    padding: 20px !important;
  } */
}

@media screen and (max-width: 481px) {

  /* .content-blog {
    padding-top: 50px !important;
  } */
  .content-card {
    width: 90%;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .content-card {
    width: 45%;
  }

}

@media screen and (min-width: 769px) and (max-width: 1024px) {

  .content-card {
    width: 30%;
  }

}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .content-card {
    width: 30%;
  }
}

@media screen and (min-width: 1201px) {
  .content-card {
    width: 280px;

  }
}
</style>