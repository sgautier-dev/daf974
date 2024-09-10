/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.daf974.re',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}