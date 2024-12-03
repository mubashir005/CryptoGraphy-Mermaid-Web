import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";  // Import the Navbar component
import InfoBox from "./InfoBox"; // Import the InfoBox component
import networksvg from '../assets/network-01.svg';
import { Link } from "gatsby";
import  "../styles/global.css"

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
        link: "/nodes",
      },
      EAV: {
        title: "EAV-Security",
        text: "EAV-Security is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      psecrecy: {
        title: "Perfect secrecy",
        text: "Perfect secrecy is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      capproach: {
        title: "Concrete Approach",
        text: "Concrete Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      aapproach: {
        title: "Asymptotic Approach",
        text: "Asymptotic Approach is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      indis: {
        title: "Indistinguishability",
        text: "Indistinguishability is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      pgenerator: {
        title: "Pseudorandom Generators",
        text: "Pseudorandom Generators is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
      },
      poreduction: {
        title: "Proof of Reduction",
        text: "Proof of Reduction is some topic inside this node. More detail will be added afterwards.",
        link: "/nodes",
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

  useEffect(() => {
    const svgContainer = document.getElementById("svg-container");
    const infoBox = document.getElementById("info-box");

    // Fetch and inject the SVG content
    fetch(networksvg)
      .then(response => response.text())
      .then(svgContent => {
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

            element.addEventListener("mouseover", (event) => {
              handleMouseOver(id);  // Show info for the hovered element
              const rect = element.getBoundingClientRect(); // Get element position

              // Position the info box above the icon
              infoBox.style.display = "block";
              infoBox.style.left = `${rect.left + rect.width / 2 - infoBox.offsetWidth / 2}px`;
              infoBox.style.top = `${rect.top - infoBox.offsetHeight - 10}px`;
            });

            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseout", () => {
              handleMouseOut();
              infoBox.style.display = "none"; // Hide info box when mouse is out
            });

            element.addEventListener("click", () => {
              window.location.href = nodes[id].link;  // Redirect on click
            });
          }
        });
      })
      .catch(error => console.error("Error loading SVG:", error));

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
      {/* Include Navbar here */}
      <Navbar />

      {/* Map Container with SVG */}
      <div className="map-container">
        <div id="svg-container" />
        <InfoBox info={info} />
      </div>
    </div>
  );
};

export default HomePage;
