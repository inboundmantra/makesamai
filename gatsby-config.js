const config = require("./data/config");

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        siteUrl: config.siteUrl,
    },
    plugins: [
        `gatsby-plugin-react-next`,
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleAlt,
                start_url: "/",
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: "standalone",
                icons: [
                    {
                        src: `/logos/logo-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/logos/logo-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: config.themeColor,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: config.googleTagManagerID,
                includeInDevelopment: false,
            },
        },
    ],
}
