import * as React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Navbar from "../components/Navbar";
import "../styles/global.css";

const MdxTemplate = ({ data }) => {
  if (!data?.mdx) {
    return <p>⚠️ Page Not Found</p>;
  }

  const { frontmatter, body } = data.mdx;

  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <ReactMarkdown>{body}</ReactMarkdown> {/*  Using react-markdown */}
        </div>
      </div>
    </div>
  );
};

export const Head = ({ data }) => <Seo title={data?.mdx?.frontmatter?.title || "Page"} />;

export const pageQuery = graphql`
  query MdxQuery($id: String!) {
    mdx(
      id: { eq: $id }
      internal: { contentFilePath: { regex: "/src/content/" } } # Restrict to src/content folder
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default MdxTemplate;
