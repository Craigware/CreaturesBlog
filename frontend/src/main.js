import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from "@/pages/Home.vue"
import DesignDocument from '@/pages/DesignDocument.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home},
    { path: '/Design-Document', name: 'Design-Document', component: DesignDocument },
    //TODO { path: '/About-Me', name: 'About-Me', component: AboutMe },
    //TODO { path: '/Concept-Art', name: 'Concept-Art', component: ConceptArt },
  ],
})

createApp(App)
.use(router)
.mount('#app')
