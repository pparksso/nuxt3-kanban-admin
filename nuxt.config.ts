// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    app: {
        head: {
            charset: 'utf-8',
            title: 'kanbanList-admin',
            htmlAttrs: {
                lang: 'ko',
            },
        },
    },
    css: ['@/assets/styles/reset.css'],
});
