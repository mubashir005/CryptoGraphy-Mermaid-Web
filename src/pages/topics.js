import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TopicPage = ({ pageContext }) => {
  const { topic } = pageContext;

  return (
    <Layout>
      <h1>topics Page</h1>
      <p>Welcome to the {topic} page!</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Topic Page" />

export default TopicPage;
