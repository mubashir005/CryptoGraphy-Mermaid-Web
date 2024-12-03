import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contactPage = ({ pageContext }) => {
  const { contact } = pageContext;

  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>Welcome to the contact page!</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="contact Page" />

export default contactPage;
