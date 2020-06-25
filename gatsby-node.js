/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const aboutAuthorTemplate = path.resolve('src/templates/about-author.jsx');
  const result = await graphql(`
    {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              path
              lng
            }
          }
        }
      }
    }
  `);
  // path: `/${node.frontmatter.lng}${node.frontmatter.path}`,
  if (result.errors) {
    console.log(result.errors);
    throw new Error('Things broke, see console output above');
  }
  result.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.frontmatter.lng}${node.frontmatter.path}`,
      component: aboutAuthorTemplate,
      context: {
        searchPath: node.frontmatter.path,
        lang: node.frontmatter.lng,
      }, // additional data can be passed via context
    });
  });

  const indexPage = path.resolve('src/pages/index.js');
  const searchPage = path.resolve('src/pages/search.js');
 // const nf = path.resolve('src/pages/404.js');
  ['en', 'ru', 'by'].forEach(
    (lang) => {
      createPage({ path: `/${lang}/`, component: indexPage });
      createPage({ path: `/${lang}/search`, component: searchPage });
     // createPage({ path: `/${lang}/404`, component: nf });
    },
  );
};
