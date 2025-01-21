---
title: "Chapter5"
Link: "/chapter-5"
infoData:
  - id: "CCA-Security"
    title: "CCA-Security"
    text: "CCA-Security is some topic inside this node. More detail will be added afterwards."
    link: "/CCA-Security"
  - id: "Padding Oracle Attack"
    title: "Padding Oracle Attack"
    text: "Padding Oracle Attack is some topic inside this node. More detail will be added afterwards."
    link: "/Padding_Oracle_Attack"
  - id: "Authenticated Encryption"
    title: "Authenticated Encryption"
    text: "Authenticated Encryption is some topic inside this node. More detail will be added afterwards."
    link: "/Authenticated_Encryption"
  - id: "Authenticated Encryption Schemes"
    title: "Authenticated Encryption Schemes"
    text: "Authenticated Encryption Schemes is some topic inside this node. More detail will be added afterwards."
    link: "/Authenticated_Encryption_Schemes"
  - id: "Encrypt and Authenticate"
    title: "Encrypt and Authenticate"
    text: "Encrypt and Authenticate is some topic inside this node. More detail will be added afterwards."
    link: "/Encrypt_and_Authenticate"
  - id: "Authenticate then Encrypt"
    title: "Authenticate then Encrypt"
    text: "Authenticate then Encrypt is some topic inside this node. More detail will be added afterwards."
    link: "/Authenticate_then_Encrypt"
  - id: "Encrypt then Authenticate"
    title: "Encrypt then Authenticate"
    text: "Encrypt then Authenticate is some topic inside this node. More detail will be added afterwards."
    link: "/Encrypt_then_Authenticate"
---

```mermaid
graph TD
    %% Define the nodes
    
    A((CCA-Security)):::hoverNode
    B((Padding Oracle Attack)):::hoverNode
    C((Authenticated Encryption)):::hoverNode
    D((Authenticated Encryption Schemes)):::hoverNode
    E((Encrypt and Authenticate)):::hoverNode
    F((Authenticate then Encrypt)):::hoverNode
    G((Encrypt then Authenticate)):::hoverNode
    %% Define the flow of the nodes

    A ==>|protects from| B
    A ==>|stronger notion of security| C
    C ==> D
    D ==> E
    D ==> F
    D ==> G
    
    %% Define styles for hoverable nodes
    classDef hoverNode fill:#E0E5FC,stroke:#597FEE,stroke-width:2px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:16px,font-weight:bold,text-align:center,padding:10px;

    classDef highlighted-node fill:#e8f5e9,stroke:#43a047,stroke-width:8px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:18px,font-weight:bold,text-align:center,padding:0px 0px;
    
