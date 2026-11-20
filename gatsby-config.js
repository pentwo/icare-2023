module.exports = {
  siteMetadata: {
    title: `iCare Health Massage`,
    description: `Remedial, fertility, pregnancy and Restore Scar Therapy massage in Perth with Jenny Yeh. Women-only home studio with ${new Date().getFullYear() - 2010} years of experience. Health fund rebates available.`,
    author: `Jenny Yeh`,
    siteUrl: `https://icarehealthmassage.com.au`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404/`, `/404.html`, `/dev-404-page/`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iCare Health Massage`,
        short_name: `iCare`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon_io-1/android-chrome-512x512.png`,
      },
    },
  ],
};
