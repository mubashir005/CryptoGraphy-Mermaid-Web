import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const nodesPage = ({ pageContext }) => {
  const { nodes} = pageContext;

  return (
    <Layout>
      <h1>Nodes Page</h1>
      <p>Welcome to the nodes page! Demo Version is here</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="nodes Page" />

export default nodesPage;
