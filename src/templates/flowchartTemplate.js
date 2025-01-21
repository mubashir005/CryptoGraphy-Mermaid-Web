import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router"; 
import InfoBox from "../components/InfoBox";
import Navbar from "../components/Navbar";
import "../styles/flowchart.css";
import mermaid from "mermaid"; // Import Mermaid

const FlowchartTemplate = ({ data }) => {
  const location = useLocation(); // 👈 Detects when user navigates
  const [info, setInfo] = useState({
    title: "",
    text: "",
    link: "",
  });

  const { body, frontmatter } = data.mdx;
  const [infoData, setInfoData] = useState(frontmatter?.infoData || []);

  useEffect(() => {
    const addCustomListeners = () => {
      const nodes = document.querySelectorAll(".hoverNode,.highlighted-node");

      nodes.forEach((node) => {
        node.addEventListener("mouseover", (event) => {
          const nodeId = node.textContent.trim();
          const nodeInfo = infoData.find((item) => item.id === nodeId);

          if (nodeInfo) {
            setInfo(nodeInfo);
            const infoBox = document.getElementById("info-box");
            if (infoBox) {
              infoBox.style.display = "block";
              infoBox.style.left = `${event.clientX + 15}px`;
              infoBox.style.top = `${event.clientY + 15}px`;
            }
          }
        });

        node.addEventListener("mousemove", (event) => {
          const infoBox = document.getElementById("info-box");
          if (infoBox) {
            infoBox.style.left = `${event.clientX + 15}px`;
            infoBox.style.top = `${event.clientY + 15}px`;
          }
        });

        node.addEventListener("mouseout", () => {
          setInfo({ title: "", text: "", link: "" });
          const infoBox = document.getElementById("info-box");
          if (infoBox) {
            infoBox.style.display = "none";
          }
        });

        node.addEventListener("click", () => {
          const nodeId = node.textContent.trim();
          const nodeInfo = infoData.find((item) => item.id === nodeId);

          if (nodeInfo?.link) {
            window.location.href = nodeInfo.link;
          }
        });
      });
    };

    // Initialize Mermaid
    mermaid.initialize({ startOnLoad: false });

    // Force re-initialization when navigating back
    setTimeout(() => {
      mermaid.contentLoaded();
      addCustomListeners();
    }, 100);
  }, [body, infoData, location.pathname]); 

  const parseMermaidContent = (content) => {
    return content
      .replace("```mermaid", "")
      .replace("```", "")
      .trim();
  };

  return (
    <div key={location.pathname}> 
      <Navbar />
      <div className="flowchart-container">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{frontmatter.title}</h1>
        <div className="mermaid-wrapper">
          {body ? (
            <div className="mermaid">
              {parseMermaidContent(body)}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>No flowchart content available.</p>
          )}
        </div>
        <InfoBox info={info} />
      </div>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        infoData {
          id
          title
          text
          link
        }
      }
    }
  }
`;

export default FlowchartTemplate;
