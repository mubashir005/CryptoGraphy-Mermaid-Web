---
title: "chapter4"
Link: "/chapter-4"
infoData:
  - id: "MAC"
    title: "MAC"
    text: "MAC is some topic inside this node. More detail will be added afterwards."
    link: "/MAC"
  - id: "GMAC&POLY"
    title: "GMAC&POLY"
    text: "GMAC&POLY is some topic inside this node. More detail will be added afterwards."
    link: "/GMAC&POLY"
  - id: "Fixed Length MAC Construction"
    title: "Fixed Length MAC Construction"
    text: "Fixed Length MAC Construction is some topic inside this node. More detail will be added afterwards."
    link: "/Fixed_Length_MAC_Construction"
  - id: "Arbitrary Length MAC Construction"
    title: "Arbitrary Length MAC Construction"
    text: "Arbitrary Length MAC Construction is some topic inside this node. More detail will be added afterwards."
    link: "/Arbitrary_Length_MAC_Construction"
  - id: "CBC-MAC"
    title: "CBC-MAC"
    text: "CBC-MAC is some topic inside this node. More detail will be added afterwards."
    link: "/CBC_MAC"
  - id: "Message Authentication"
    title: "Message Authentication"
    text: "Message Authentication is some topic inside this node. More detail will be added afterwards."
    link: "/Message_Authentication"
---

```mermaid
graph TD
    %% Define the nodes
    
    A((MAC)):::hoverNode
    B((GMAC&POLY)):::hoverNode
    C((Fixed Length MAC Construction)):::hoverNode
    D((Arbitrary Length MAC Construction)):::hoverNode
    E((CBC-MAC)):::hoverNode
    F((Message Authentication)):::hoverNode
    %% Define the flow of the nodes

    A ==> B
    A ==> C
    C ==> |constructs| D
    C ==> E
    F ==> A
   
    
    %% Define styles for hoverable nodes
    classDef hoverNode fill:#E0E5FC,stroke:#597FEE,stroke-width:2px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:16px,font-weight:bold,text-align:center,padding:10px;

    classDef highlighted-node fill:#e8f5e9,stroke:#43a047,stroke-width:8px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:18px,font-weight:bold,text-align:center,padding:0px 0px;
    
