import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueSentry (Vue, options = {}) {
  Raven
      .config(`https://${options.key}@sentry.io/${options.project}`)
      .addPlugin(RavenVue, Vue)
      .install()  
  
  Vue.prototype.$raven = Raven
}
