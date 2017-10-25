import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

export default function VueSentry (Vue, options) {

  const _options = {
    enable: true
  }

  if (options) {
    options = {..._options, ...options}
  }

  if (!options.enable) return

  Raven
      .config(`${options.protocol || 'https'}://${options.key}@${options.server || 'sentry.io'}/${options.project}`, {
        ...options.config
      })
      .addPlugin(RavenVue, Vue)
      .install()  
  
  Vue.prototype.$raven = Raven
}
