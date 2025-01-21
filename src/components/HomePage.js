import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./Navbar";  
import { motion } from "framer-motion";
import InfoBox from "./InfoBox"; 
import networksvg from '../assets/network-01.svg';
import { Link } from "gatsby";
import "../styles/global.css";



const HomePage = () => {
  const [info, setInfo] = useState({
    title: "",
    text: "",
    link: "",
  });

  const handleMouseOver = (id) => {
    const nodes = {
      csecrecy: {
        title: "Computational Secrecy",
        text: "Computational Secrecy is some topic inside this node. More detail will be added afterwards.",
        link: "/Computational_Security",
      },
      EAV: {
        title: "EAV-Security",
        text: "EAV-Security is some topic inside this node. More detail will be added afterwards.",
        link: "/Computational_Security", 
      },
      psecrecy: {
        title: "Perfect secrecy",
        text: "Perfect secrecy is some topic inside this node. More detail will be added afterwards.",
        link: "/perfectSecrecyPage", 
      },
      capproach: {
        title: "Concrete Approach",
        text: "Concrete Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/concreteApproach", 
      },
      aapproach: {
        title: "Asymptotic Approach",
        text: "Asymptotic Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/asymptoticApproach", 
      },
      indis: {
        title: "Indistinguishability",
        text: "Indistinguishability is some topic inside this node. More detail will be added afterwards.",
        link: "/indistinguishabilityPage", 
      },
      pgenerator: {
        title: "Pseudorandom Generators",
        text: "Pseudorandom Generators is some topic inside this node. More detail will be added afterwards.",
        link: "/pseudorandomGeneratorPage", 
      },
      poreduction: {
        title: "Proof of Reduction",
        text: "Proof of Reduction is some topic inside this node. More detail will be added afterwards.",
        link: "/proofOfReductionPage", 
      },
    };

    setInfo(nodes[id]);
  };

  const handleMouseMove = (event) => {
    const infoBox = document.getElementById("info-box");
    if (infoBox) {
      infoBox.style.left = `${event.clientX + 15}px`;
      infoBox.style.top = `${event.clientY - 20}px`;
    }
  };

  const handleMouseOut = () => {
    setInfo({
      title: "",
      text: "",
      link: "",
    });
  };

  const handleRedirect = (id) => {
    const nodes = {
      csecrecy: {
        link: "/Computational_Security",
      },
      EAV: {
        link: "/Computational_Security",
      },
      psecrecy: {
        link: "/perfectSecrecyPage",
      },
      capproach: {
        link: "/concreteApproach",
      },
      aapproach: {
        link: "/asymptoticApproach",
      },
      indis: {
        link: "/indistinguishabilityPage",
      },
      pgenerator: {
        link: "/pseudorandomGeneratorPage",
      },
      poreduction: {
        link: "/proofOfReductionPage",
      },
    };

    const link = nodes[id]?.link; 
    if (link) {
      
      window.location.href = link;
    }
  };

  useEffect(() => {
    const svgContainer = document.getElementById("svg-container");
    const infoBox = document.getElementById("info-box");
    
    // Fetch and inject the SVG content
    fetch(networksvg)
      .then((response) => response.text())
      .then((svgContent) => {
        svgContainer.innerHTML = svgContent;

        
        const nodes = [
          "csecrecy",
          "EAV",
          "psecrecy",
          "capproach",
          "aapproach",
          "indis",
          "pgenerator",
          "poreduction",
        ];

        nodes.forEach((id) => {
          const element = svgContainer.querySelector(`#${id}`);
          if (element) {
            element.classList.add("icon");

            element.addEventListener("mouseover", () => {
              handleMouseOver(id); // Show info for the hovered element
              infoBox.style.display = "block";
            });

            element.addEventListener("mousemove", (event) => {
              const offsetX = -200;
              const offsetY = -200;
              infoBox.style.left = `${event.clientX + offsetX}px`;
              infoBox.style.top = `${event.clientY + offsetY}px`;
            });

            element.addEventListener("mouseout", () => {
              handleMouseOut();
              infoBox.style.display = "none";
            });

            element.addEventListener("click", () => {
              handleRedirect(id); 
            });
          }
        });
      })
      .catch((error) => console.error("Error loading SVG:", error));

    return () => {
      // Clean up event listeners
      const svgElements = document.querySelectorAll(".icon");
      svgElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div>
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
      <Navbar />
      <div className="map-container">
        <div id="svg-container" />
        <InfoBox info={info} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/MarkdownFlowchart">
          <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >View Markdown Flowchart
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
