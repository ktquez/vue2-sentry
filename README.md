# vue2-sentry

Plugin Vue.js for error tracking with Sentry

## Sentry
If you do not already have a [Sentry](https://sentry.io) account, you will need to create it to gain access to the panel and the `keys` to integrate your Vue.js application into Sentry and start tracking errors and logs.

## Usage

### NPM

```shell
npm install vue2-sentry --save
```

In your src/main.js:

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueSentry from 'vue2-sentry'

Vue.use(VueSentry, {
  protocol: 'https', // Optional: default is https
  key: 'your_key_sentry',
  project: 'your_name_project',
  config: {} // Optional: custom config
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```

## Explaining the properties

When installing the plugin using `Vue.use` it is possible to define an object by passing the default settings and the keys needed to build the DSN communication and make the tracking work the errors.

**key:** Here you put the public key available in your Sentry account. But also if you need to pass the private key, just enter it this way.

```javascript
key: 'your_public_key:your_private_key'
```

**project:** Each project created in the Sentry panel it generates a project ID, in this property you inform the ID of the project that you want to track.

**config:** At the time of installation, you can set various properties for your application to manage in a custom way on your Sentry dashboard. You can find out which options are available through this link [config sentry](https://docs.sentry.io/clients/javascript/config/)

## How to use within components
Thinking of the flexibility to customize and define some specific information with tags, userContext, among others. The plugin uses Raven (which is the official Sentry SDK) and integrates into the Vue prototype, making it available in its component.

For example, in any Vue component
```vue
...
<script>
  export default {
    name: 'UserAccount',

    mounted () {
      this.$raven.setUserContext({
        email: 'bar@example.com',
        id: '15'
      })
    }
  }
</script>
...
```

For more information on how to make the most of Sentry contexts, just go to this link [Context with Sentry](https://docs.sentry.io/learn/context/)

## Server-side rendering
Vue2-sentry is supported in projects with server-side rendering, both in manual deployments and using other structures.

If you are using [Nuxt.js](https://nuxtjs.org/), you can opt for this [nuxt-community/sentry-module](https://github.com/nuxt-community/sentry-module).

If you want to use vue2-sentry, just follow the plugins installation tutorial in the Nuxt.js documentation, through [this link](https://nuxtjs.org/guide/plugins/)

## Environments
vue2-sentry will track in all environments, but if you want to track only in production, you can use the Node environment variables to determine.

**enable:** By default `true` and is optional, equivalent to all environments.

*If you want to track only in production, you can use this example below.*

```javascript
Vue.use(VueSentry, {
  enable: process.env.NODE_ENV === 'production', // Optional: default is true for (all environments)
  ...
}
```

## Available options

Property        | Description    
--------------- | -------------
enable          | Enable plugin - `default: true`
protocol        | Protocol used, this can http or https - `default: https`
key             | The public and secret keys to authenticate the SDK
server          | The destination server - `default: sentry.io`
project         | The project ID which the authenticated user is bound to
config          | Add extra configuration


## Contributing
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found.

- Fork repository, make changes, add your name and link in the authors session readme.md

- Send a pull request

If you want a faster communication, find me on [@ktquez](https://twitter.com/ktquez)

> Thank you
