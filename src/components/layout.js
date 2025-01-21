import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* Main Content */}
      <main
        style={{
          margin: "0 auto",
          maxWidth: "var(--size-content)",
          padding: "var(--space-4)",
          flex: 1, 
        }}
      >
        {children}
      </main>

      
      <footer
        style={{
          textAlign: "center",
          padding: "var(--space-3) var(--space-4)",
          fontSize: "var(--font-sm)",
          backgroundColor: "#f8f9fa", 
          color: "#6c757d", 
        }}
      >
        © {new Date().getFullYear()} · Built with Gatsby
      </footer>
    </div>
  );
};

export default Layout;
