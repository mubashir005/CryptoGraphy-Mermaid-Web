import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const aboutPage = ({ pageContext }) => {
  const { about} = pageContext;

  return (
    <Layout>
      <h1>about Page</h1>
      <p>Welcome to the about page!</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="about Page" />

export default aboutPage;
