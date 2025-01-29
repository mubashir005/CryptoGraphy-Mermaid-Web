---
title: "Markdown Flowchart"
slug: "/Main-flowchart"
infoData:
  - id: "Perfect secrecy"
    title: "Perfect Secrecy"
    text: "Perfect Secrecy is some topic inside this node. More detail will be added afterwards."
    link: "/perfect-secrecy"
  - id: "computational-security"
    title: "Computational Secrecy"
    text: "Computational Secrecy is some topic inside this node. More detail will be added afterwards."
    link: "/computational-security"
  - id: "Concrete Approach"
    title: "Concrete Approach"
    text: "Concrete Approach is some topic inside this node. More detail will be added afterwards."
    link: "/concrete-approach"
  - id: "Asymptotic Approach"
    title: "Asymptotic Approach"
    text: "Asymptotic Approach is some topic inside this node. More detail will be added afterwards."
    link: "/asymptotic-approach"
  - id: "EAV - Security"
    title: "EAV - Security"
    text: "EAV - Security is some topic inside this node. More detail will be added afterwards."
    link: "/asymptoticApproach"
  - id: "Pseudorandom Generator"
    title: "Pseudorandom Generator"
    text: "Pseudorandom Generator is some topic inside this node. More detail will be added afterwards."
    link: "/pseudorandom-generator"
  - id: "Indistinguishability"
    title: "Indistinguishability"
    text: "Indistinguishability is some topic inside this node. More detail will be added afterwards."
    link: "/indistinguishability"
  - id: "Proof of Reduction"
    title: "Proof of Reduction"
    text: "Proof of Reduction is some topic inside this node. More detail will be added afterwards."
    link: "/proof-of-reduction"
  - id: "Rohel"
    title: "Rohel"
    text: "Rohel is some topic inside this node. More detail will be added afterwards."
    link: "/pseudorandom-generator"
  - id: "omar"
    title: "Omar"
    text: "Omar is some topic inside this node. More detail will be added afterwards."
    link: "/omer-page"
  - id: "Intelligent"
    title: "Intelligent"
    text: "Omar is INTELLIGENT."
    link: "/pseudorandom-generator"
---

```mermaid
graph TD
    %% Define the nodes
    
    A(["fa:fa-spinner Perfect secrecy"]):::hoverNode
    B((Computational secrecy)):::hoverNode
    C[Concrete Approach]:::hoverNode
    D[Asymptotic Approach]:::hoverNode
    E["EAV - Security"]:::hoverNode
    F[Pseudorandom Generator]:::hoverNode
    G[Indistinguishability]:::hoverNode
    H[Proof of Reduction]:::hoverNode
    I[Rohel]:::hoverNode
    J[omar]:::hoverNode
    Omar[Intelligent]:::hoverNode
    K[Mero]:::hoverNode

    %% Define the flow of the nodes

    A ==>|Computational secrecy is weaker| B
    B ==> C
    B ==> D
    D ==> E
    F ==> E
    G ==> E
    H ==> E
    E ==> I
    I ==> J
    J ==> Omar
    C==>K

    %% Define styles for hoverable nodes
    classDef hoverNode fill:#E0E5FC,stroke:#597FEE,stroke-width:2px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:16px,font-weight:bold,text-align:center,padding:10px;

    classDef highlighted-node fill:#e8f5e9,stroke:#43a047,stroke-width:8px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:18px,font-weight:bold,text-align:center,padding:0px 0px;
    
