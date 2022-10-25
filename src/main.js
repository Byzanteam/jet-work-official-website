import { createApp } from 'vue'

import './reset.css'
import App from './App.vue'
import zh_CN from './assets/locales/zh_CN.json'
import locale from './locale'

const localeOptions = {
  translation: {
    zh_CN,
  },
}

const app = createApp(App)

app.use(locale, localeOptions)

app.mount('#app')
