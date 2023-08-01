import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PiniaLogger from 'pinia-logger'
import { piniaServiceInjectionPlugin } from './stores/plugins'
import { useCounterStore } from './stores/counter'

const app = createApp(App)
const pinia = createPinia()

pinia.use(PiniaLogger({ expanded: true }))
pinia.use(piniaServiceInjectionPlugin)


app.use(pinia)
app.use(router)

const store = useCounterStore()

app.mount('#app')
