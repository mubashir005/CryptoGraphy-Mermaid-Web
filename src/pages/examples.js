import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const examplePage = ({ pageContext }) => {
  const { example } = pageContext;

  return (
    <Layout>
      <h1>example Page</h1>
      <p>Welcome to the example page!</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="example Page" />

export default examplePage;
