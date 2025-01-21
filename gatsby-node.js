const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // General MDX files
  const mdfiles = await graphql(`
    query {
      allMdx(filter: { internal: { contentFilePath: { regex: "/src/content/" } } }) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  if (mdfiles.errors) {
    console.error(mdfiles.errors);
    return;
  }

  const posts = mdfiles.data.allMdx.nodes;

  posts.forEach((post) => {
    if (!post.frontmatter.slug) {
      console.warn(`⚠️ Missing slug in MDX file: ${post.id}`);
      return;
    }

    console.log(`✅ Creating page: ${post.frontmatter.slug}, ID: ${post.id}`);

    createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/mdxTemplate.js"),
      context: { id: post.id },
    });
  });

  // Flowchart MDX files
  const flowchartFiles = await graphql(`
    query {
      allMdx(filter: { internal: { contentFilePath: { regex: "/src/flowchartmdfiles/" } } }) {
        nodes {
          id
          frontmatter {
            title
            Link
          }
        }
      }
    }
  `);

  if (flowchartFiles.errors) {
    console.error(flowchartFiles.errors);
    return;
  }

  const flowcharts = flowchartFiles.data.allMdx.nodes;

  flowcharts.forEach((flowchart) => {
    if (!flowchart.frontmatter.Link) {
      console.warn(`⚠️ Missing slugs in Flowchart MDX file: ${flowchart.id}`);
      return;
    }

    console.log(`✅ Creating flowchart page: ${flowchart.frontmatter.Link}, ID: ${flowchart.id}`);

    createPage({
      path: flowchart.frontmatter.Link,
      component: require.resolve("./src/templates/flowchartTemplate.js"),
      context: { id: flowchart.id },
    });
  });
};

