module.exports = {
  siteMetadata: {
    title: `iCare Health Massage`,
    description: `The best time to take care of you`,
    author: `Jenny Yeh`,
  },
  plugins: [
    "gatsby-plugin-mantine",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
