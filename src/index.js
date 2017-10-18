import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueSentry (Vue, options = {}) {
  Raven
      .config(`${options.protocol || 'https'}://${options.key}@sentry.io/${options.project}`, {
        ...options.config
      })
      .addPlugin(RavenVue, Vue)
      .install()  
  
  Vue.prototype.$raven = Raven
}
