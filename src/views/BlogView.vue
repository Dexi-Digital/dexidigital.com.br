<template>
  <div>
    <NavBar />
    <div class="content-blog" :class="{ 'no-card-height': arrayComValoresDoFirebase.length === 0 }">

      <v-progress-circular v-if="loadingFirebaseValue" class="loading" indeterminate
        color="primary"></v-progress-circular>
      <div class="content-no-card" v-else-if="arrayComValoresDoFirebase.length === 0">
        <p class="text-no-card">Não há nenhum card para exibir.</p>
      </div>
      <v-card v-show="verifyCanPost(item?.dateHourToPost)" v-for="(item, index) in arrayComValoresDoFirebase" :key="index"
        class="mx-auto content-card" @click="navigateToBlog(item)">

        <v-img class="img-blog" :src="getCardImage(item.pathImgOnFirebase)"></v-img>
        <v-card-text>
          <div class="infos">
            <p class="title-blog" v-html="item.title"></p>
            <p class="title-data" v-html="item.dateHourToPost ? formatDateHour(item.dateHourToPost) : item.date"></p>
            <p v-html="truncateText(item.content, 150)"></p>
            <div class="content-arrow">
              <div class="links"> {{ $t("POSTS.read-more") }}» </div>
            </div>
          </div>
        </v-card-text>

      </v-card>

    </div>
    <WhatsappButton />

    <FooterComponent />
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import WhatsappButton from '../components/WhatsappButton.vue';
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// // import { mapGetters } from 'vuex';

export default {
  name: 'BlogView',
  // computed: {
  //   ...mapGetters(['isLoggedIn']), // Certifique-se de ter o getter 'isLoggedIn' no seu store

  // },
  components: {
    NavBar,
    FooterComponent,
    WhatsappButton
  },
  created() {
    this.getPostsFromFirebase();
  },

  data() {

    return {
      localImages: [],
      arrayComValoresDoFirebase: [],
      loadingFirebaseValue: false
      // item: []
    }
  },
  methods: {
    verifyCanPost(dateHourToPost) {
      const today = new Date();
      const postDate = this.convertTimestampToDate(dateHourToPost);
      const canPost = today >= new Date(postDate);
      return canPost;
    },
    // navigateToBlog(item) {
    //   this.$router.push({
    //     path: `/posts/${encodeURIComponent(item.title)}`,
    //     query: {
    //       data: item
    //     }
    //   });
    // },
    navigateToBlog(item) {
      const cleanedTitle = this.cleanTitleForUrl(item.title);
      this.$router.push({
        path: `/posts/${cleanedTitle}`,
        query: {
          data: item
        }
      });
    },
    cleanTitleForUrl(title) {
      // Remove white spaces, convert to lowercase, keep accented letters
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

    //   firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').get()
    //     .then((querySnapshot) => {
    //       this.loadingFirebaseValue = false;
    //       querySnapshot.forEach((doc) => {
    //         const post = doc.data();
    //         this.arrayComValoresDoFirebase.push(post);
    //       });
    //       return this.getDonwloadUrlAndSetblogImgUrl();
    //     });
    // },
    getPostsFromFirebase() {
      this.loadingFirebaseValue = true;

      this.arrayComValoresDoFirebase = []; // Limpa a array antes de adicionar novos posts

      firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').get()
        .then((querySnapshot) => {
          this.loadingFirebaseValue = false;
          querySnapshot.forEach((doc) => {
            const post = doc.data();
            this.arrayComValoresDoFirebase.push(post);
          });

          // Sorting the array based on dateHourToPost
          this.arrayComValoresDoFirebase.sort((a, b) => {
            if (a.dateHourToPost && b.dateHourToPost) {
              return a.dateHourToPost.seconds - b.dateHourToPost.seconds;
            } else {
              return 0;
            }
          });

          return this.getDonwloadUrlAndSetblogImgUrl();
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

    editPost(post) {
      // Aqui você pode abrir um diálogo/modal de edição do post com os campos preenchidos
      // E depois atualizar o post no Firebase
      // Por exemplo:
      const updatedPost = { ...post, title: "Novo Título", content: "Novo conteúdo" };

      // Atualizar o post no Firebase
      firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').doc(post.id).update(updatedPost)
        .then(() => {
          console.log('Post atualizado com sucesso');
        })
        .catch(error => {
          console.error('Erro ao atualizar o post:', error);
        });
    },

    deletePost(post) {
      // Excluir o post do Firebase
      firebaseDb.collection(this.$store.state.language === 'en' ? 'posts-en' : 'posts').doc(post.id).delete()
        .then(() => {
          console.log('Post excluído com sucesso');
        })
        .catch(error => {
          console.error('Erro ao excluir o post:', error);
        });
    },
    convertTimestampToDate(timestamp) {
      const seconds = timestamp?.seconds;
      const milliseconds = seconds * 1000;

      // Criar uma instância de Date usando os milissegundos
      const date = new Date(milliseconds);

      return date;
    },
  }
}
</script>
<style scoped>
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

.text-no-card {

  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: #7e7e7e;
}

.content-no-card {

  text-align: center;
  padding-top: 10%;

}

.no-card-height {
  height: calc(100vh - 120px);
}

div p img {
  height: 100px;
  /* outras propriedades de estilo, se necessário */
}

.img-blog {
  border-radius: 8px 8px 0 0;
  height: 200px;
  width: 100%;
  background-size: cover;
}

.fa-pen-to-square {
  padding-left: 20px;
}

.fa-trash {
  padding-right: 20px;
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
  padding: 120px 20px 70px 20px !important;
  background-color: #f1f1f1;
  display: flex;
  /* flex-direction: row-reverse; */
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: inherit;
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
  box-shadow: none !important;
  width: 100%;
  margin-bottom: 50px;
  cursor: pointer;
  margin: 10px !important;

}

.title-details {
  font-weight: bold;
}

.details {
  font-size: 12px;
}

@media screen and (min-width:320px) and (max-width: 480px) {

  .content-card {
    width: 100%;
  }

  .content-blog {
    padding: 120px 20px 20px 20px !important;
  }
}

@media screen and (max-width: 481px) {
  .content-blog {
    padding-top: 120px !important;
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

.content-card:hover {
  transform: rotate(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);

}
</style>