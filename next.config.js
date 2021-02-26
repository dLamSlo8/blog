const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
      }),
    assetPrefix: isProd ? '/blog/' : ''
}