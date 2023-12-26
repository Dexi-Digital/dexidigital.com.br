import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ServicesView from '../views/ServicesView.vue'
import FormView from '../views/FormView.vue'
import PostsView from '../views/PostsView.vue'
import CreatePost from '../views/CreatePost.vue'
import LoginView from '../views/LoginView.vue'
// import SignView from '../views/SignView.vue'
import EditPost from '../views/EditPost.vue'
import PostEditPage from '../views/PostEditPage.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import ItOutsourcing from '../views/ItOutsourcing.vue'
import MobileApplications from '../views/MobileApplications.vue'
import DevelopmentSquads from '../views/DevelopmentSquads.vue'
import DigitalExperience from '../views/DigitalExperience.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/fale-conosco',
    name: 'form',
    component: FormView
  },
  {
    path: '/posts/:title',
    name: 'posts',
    component: PostsView
  },


  // {
  //   path: '/blog/:title',
  //   name: 'blog',
  //   component: BlogView,
  //   beforeEnter: (to, from, next) => {
  //     const cleanTitle = to.params.title.replace(/códigos a serem removidos/g, '');
  //     const formattedTitle = encodeURIComponent(cleanTitle.replace(/[^a-zA-Z0-9]/g, '-'));
  
  //     if (to.params.title !== formattedTitle) {
  //       // Construa uma URL corrigida, mantendo outros parâmetros da rota intactos
  //       const correctedPath = `/blog/${formattedTitle}`;
  //       next({ path: correctedPath, replace: true });
  //     } else {
  //       next();
  //     }
  //   },
  // },  
//   {
//     path: '/posts/:title',
//     name: 'posts',
//     component: PostsView,
//     beforeEnter: (to, from, next) => {
//       const cleanTitle = to.params.title.replace(/códigos a serem removidos/g, '');
//       const formattedTitle = encodeURIComponent(cleanTitle.replace(/[^a-zA-Z0-9]/g, '-'));
  
//      if (to.params.title !== formattedTitle) {
//          // Construa uma URL corrigida, mantendo outros parâmetros da rota intactos
//        const correctedPath = `/posts/${formattedTitle}`;
//        next({ path: correctedPath, replace: true });
//      } else {
//        next();
//      }
//    },
//  },  
  
  {
    path: '/criar-post/',
    name: 'create-Post',
    component: CreatePost
  },
  {
    path: '/entrar/',
    name: 'login-view',
    component: LoginView
  },
  // {
  //   path: '/sign-view/',
  //   name: 'sign-view',
  //   component: SignView
  // },
  {
    path: '/editar-post/:language',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/editar-post',
    name: 'edit-post',
    component: EditPost
  },
  // {
  //   path: '/edit-post/en/:language',
  //   name: 'edit-post-en',
  //   component: EditPost,
  // },
  {
    path: '/pagina-de-edicao/:postId',
    name: 'post-edit-page',
    component: PostEditPage
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/outsourcing-de-ti',
    name: 'ItOutsourcing',
    component: ItOutsourcing
  },
  {
    path: '/aplicativos-mobile',
    name: 'mobile-applications',
    component: MobileApplications
  },
  {
    path: '/squad-de-desenvolvimento',
    name: 'development-squads',
    component: DevelopmentSquads
  },
  {
    path: '/experiencia-digital',
    name: 'experiencia-digital',
    component: DigitalExperience

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

})

export default router
