import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueSentry (Vue, options) {

  const _options = {
    enable: true,
    config: {}
  }

  if (options) {
    Vue.util.extend(_options, options)
  }

  if (!options.enable) return

  Raven
      .config(`${options.protocol || 'https'}://${options.key}@sentry.io/${options.project}`, {
        ...options.config
      })
      .addPlugin(RavenVue, Vue)
      .install()  
  
  Vue.prototype.$raven = Raven
}
