/**
 * Vue will automatically use the container's innerHTML as the template 
 * if the root component does not already have a template option.
 */
// root component
import { createApp } from 'vue'
import App from '@/App.vue'



const app = createApp(App)

app.mount('#app')