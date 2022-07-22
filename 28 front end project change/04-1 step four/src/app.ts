

/**
 * Vue will automatically use the container's innerHTML as the template 
 * if the root component does not already have a template option.
 */
// root component
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')