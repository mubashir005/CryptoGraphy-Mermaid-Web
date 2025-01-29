import React, { useEffect, useState, useRef } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router"; 
import InfoBox from "../components/InfoBox";
import Navbar from "../components/Navbar";
import "../styles/flowchart.css";
import mermaid from "mermaid";

const MarkdownFlowchart = ({ data }) => {
  const location = useLocation();
  const [info, setInfo] = useState({ title: "", text: "", link: "" });
  const [markdownContent, setMarkdownContent] = useState(
    data?.allMdx?.nodes?.[0]?.body || ""
  );
  const [infoData, setInfoData] = useState(
    data?.allMdx?.nodes?.[0]?.frontmatter?.infoData || []
  );
  const mermaidRef = useRef(null); 

  useEffect(() => {
    setMarkdownContent(data?.allMdx?.nodes?.[0]?.body || "");
    setInfoData(data?.allMdx?.nodes?.[0]?.frontmatter?.infoData || "");
  }, [data]);

//-----------------------------------------------------------------
// Initialize Mermaid and render flowchart with the given mechanism
useEffect(() => {
  const renderMermaid = async () => {
    try {
      if (mermaidRef.current && !mermaidRef.current.hasAttribute('data-processed')) {
        mermaid.initialize({ startOnLoad: false });
        mermaidRef.current.removeAttribute("data-processed"); // Forces re-render
        
        await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for the setTimeout
        mermaid.init(undefined, mermaidRef.current);
        mermaidRef.current.setAttribute('data-processed', 'true');
      }
    } catch (error) {
      console.error("Mermaid initialization error:", error);
    }
  };

  renderMermaid();
}, [markdownContent, location.pathname]); 
// Re-run on markdownContent or route change
//-----------------------------------------------------------------

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

    setTimeout(addCustomListeners, 200);
  }, [infoData]);

  const parseMermaidContent = (content) => {
    return content.replace("```mermaid", "").replace("```", "").trim();
  };

  return (
    <div key={location.pathname}>
      <Navbar />
      <div className="flowchart-container">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Markdown Flowchart</h1>
        <div className="mermaid-wrapper">
          {markdownContent ? (
            <div className="mermaid" ref={mermaidRef}>
              {parseMermaidContent(markdownContent)}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>No content available.</p>
          )}
        </div>
        <InfoBox info={info} />
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/src/components/md/" } }
      }
    ) {
      nodes {
        body
        frontmatter {
          infoData {
            id
            title
            text
            link
          }
        }
      }
    }
  }
`;

export default MarkdownFlowchart;
  

  