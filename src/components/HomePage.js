import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";  // Import the Navbar component
import InfoBox from "./InfoBox"; // Import the InfoBox component
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
        link: "/nodes", // Corrected to relative path
      },
      EAV: {
        title: "EAV-Security",
        text: "EAV-Security is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      psecrecy: {
        title: "Perfect secrecy",
        text: "Perfect secrecy is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      capproach: {
        title: "Concrete Approach",
        text: "Concrete Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      aapproach: {
        title: "Asymptotic Approach",
        text: "Asymptotic Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      indis: {
        title: "Indistinguishability",
        text: "Indistinguishability is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      pgenerator: {
        title: "Pseudorandom Generators",
        text: "Pseudorandom Generators is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
      },
      poreduction: {
        title: "Proof of Reduction",
        text: "Proof of Reduction is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes", // Corrected to relative path
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
        link: "/nodes",
      },
      EAV: {
        link: "/nodes",
      },
      psecrecy: {
        link: "/nodes",
      },
      capproach: {
        link: "/nodes",
      },
      aapproach: {
        link: "/nodes",
      },
      indis: {
        link: "/nodes",
      },
      pgenerator: {
        link: "/nodes",
      },
      poreduction: {
        link: "/nodes",
      },
    };

    const link = nodes[id]?.link; // Access the link property dynamically
    if (link) {
      // Perform the redirect by updating the window location
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

        // Add hover and click interactions
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
              handleRedirect(id); // Redirect on click
            });
          }
        });
      })
      .catch((error) => console.error("Error loading SVG:", error));

    return () => {
      // Clean up event listeners when the component is unmounted
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
      <Navbar />
      <div className="map-container">
        <div id="svg-container" />
        <InfoBox info={info} />
      </div>
    </div>
  );
};

export default HomePage;
