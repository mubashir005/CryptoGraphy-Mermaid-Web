module.exports = {
  pathPrefix: `/rohelweb/`,
  siteMetadata: {
    title: `CryptoGraphy Website`,
    description: `My Gatsby site hosted on GitHub Pages.`,
    author: `@mubashir005`,
    siteUrl: `https://mubashir005.github.io/rohelweb`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components/md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `flowchartmdfiles`,
        path: `${__dirname}/src/flowchartmdfiles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              theme: 'default',
              mermaidOptions: {
                startOnLoad: true,
              },
            },
          },
        ],
      },
    },
  ],
};
