import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PostEditPage from '../views/PostEditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'home',
  component: () => import('../views/HomeView.vue')
},
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/servicos',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/fale-conosco',
    name: 'form',
    component: () => import('../views/FormView.vue')
},
  {
  path: '/posts/:title',
  name: 'posts',
  component: () => import('../views/PostsView.vue')
},

  {
  path: '/criar-post/',
  name: 'create-Post',
  component: () => import('../views/CreatePost.vue')
},
  {
    path: '/entrar/',
    name: 'login-view',
    component: LoginView
  },
  {
    path: '/editar-post/:language',
    name: 'edit-post',
    component: () => import('../views/EditPost.vue')
  },
  {
    path: '/editar-post',
    name: 'edit-post',
    component: () => import('../views/EditPost.vue')
  },
  {
    path: '/pagina-de-edicao/:postId',
    name: 'post-edit-page',
    component: PostEditPage
  },
  {
  path: '/politica-de-privacidade',
  name: 'privacy-policy',
  component: () => import('../views/PrivacyPolicy.vue')
},
  {
    path: '/outsourcing-de-ti',
    name: 'it-outsourcing',
    component: () => import('../views/ItOutsourcing.vue')
  },
  {
  path: '/aplicativos-mobile',
  name: 'mobile-applications',
  component: () => import('../views/MobileApplications.vue')
},
  {
  path: '/squad-de-desenvolvimento',
  name: 'development-squads',
  component: () => import('../views/DevelopmentSquads.vue')
},

{
  path: '/experiencia-digital',
  name: 'experiencia-digital',
  component: () => import('../views/DigitalExperience.vue')
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

