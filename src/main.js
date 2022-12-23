import { createApp } from 'vue'

import './reset.css'
import App from './App.vue'
import zh_CN from './assets/locales/zh_CN.json'
import locale from './locale'
import { router } from './router'

const localeOptions = {
  translation: {
    zh_CN,
  },
}

const app = createApp(App)

app.use(locale, localeOptions).use(router)

app.mount('#app')
