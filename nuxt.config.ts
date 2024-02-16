// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
        baseURL: '/dante/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    },

    experimental: { payloadExtraction: true },

    devtools: { enabled: true },

    modules: ['@samk-dev/nuxt-uikit3'],

    uikit3: {
    	css: {
        // disable core and theme css to minimize final css bundle 
    		coreCss: false,
    		coreTheme: false,
    		build: {
    			preprocessor: 'scss',
    			stylesPath: '~/assets/styles/main.scss',
    			variablesPath: '~/assets/styles/variables.scss'
    		}
    	},
    	js: true,
    	icons: true
    },
})