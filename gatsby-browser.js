/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// gatsby-browser.js
import React from "react";
import { AnimatePresence } from "framer-motion";
import mermaid from "mermaid";
import "./src/styles/flowchart.css";


export const wrapPageElement = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);

export const onRouteUpdate = () => {
  // Reinitialize Mermaid on route change
  mermaid.initialize({ startOnLoad: true });
  mermaid.contentLoaded();
};
