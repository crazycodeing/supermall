module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'img': '@/img',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',

            }
        }
    }
}