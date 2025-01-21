---
title: "Understanding Secrecy and Security Approaches"
Link: "/chapter-6"
infoData:
  - id: "Hash Functions"
    title: "Hash Functions"
    text: "Hash Functions is some topic inside this node. More detail will be added afterwards."
    link: "/hashingpage"
  - id: "Collision Resistance"
    title: "Collision Resistance"
    text: "Collision Resistance is some topic inside this node. More detail will be added afterwards."
    link: "/collisionresistancepage"
  - id: "Merkle Damgard Transform"
    title: "Merkle Damgard Transform"
    text: "Merkle Damgard Transform is some topic inside this node. More detail will be added afterwards."
    link: "/merkledamgardpage"
  - id: "Construction of MACs using Hash Functions"
    title: "Construction of MACs using Hash Functions"
    text: "Construction of MACs using Hash Functions is some topic inside this node. More detail will be added afterwards."
    link: "/constructionpage"
  - id: "HMAC"
    title: "HMAC"
    text: "HMAC is some topic inside this node. More detail will be added afterwards."
    link: "/hmacpage"
  - id: "Hash&MAC"
    title: "Hash&MAC"
    text: "Hash&MAC is some topic inside this node. More detail will be added afterwards."
    link: "/hash&macpage"
  - id: "Random Oracle Model"
    title: "Random Oracle Model"
    text: "Random Oracle Model is some topic inside this node. More detail will be added afterwards."
    link: "/randomoraclemodelpage"
  - id: "Applications of Hash Functions"
    title: "Applications of Hash Functions"
    text: "Applications of Hash Functions is some topic inside this node. More detail will be added afterwards."
    link: "/applicationpage"
  - id: "Fingerprinting & Deduplication"
    title: "Fingerprinting & Deduplication"
    text: "Fingerprinting & Deduplication is some topic inside this node. More detail will be added afterwards."
    link: "/fingerprintingpage"
  - id: "Merkle Trees"
    title: "Merkle Trees"
    text: "Merkle Trees is some topic inside this node. More detail will be added afterwards."
    link: "/merklepage"
  - id: "Password Hashing"
    title: "Password Hashing"
    text: "Password Hashing is some topic inside this node. More detail will be added afterwards."
    link: "/passwordpage"
  - id: "Key Derivation"
    title: "Key Derivation"
    text: "Key Derivation is some topic inside this node. More detail will be added afterwards."
    link: "/keyderivationpage"
  - id: "Commitment Schemes"
    title: "Commitment Schemes"
    text: "Commitment Schemes is some topic inside this node. More detail will be added afterwards."
    link: "/commitmentpage"
 
---

```mermaid
graph TD
    %% Define the nodes
    
    A((Hash Functions)):::hoverNode
    B((Collision Resistance)):::hoverNode
    C((Merkle Damgard Transform)):::hoverNode
    D((Construction of MACs using Hash Functions)):::hoverNode
    E((HMAC)):::hoverNode
    F((Hash&MAC)):::hoverNode
    G((Random Oracle Model)):::hoverNode
    H((Applications of Hash Functions)):::hoverNode
    I((Fingerprinting & Deduplication)):::hoverNode
    J((Merkle Trees)):::hoverNode
    K((Password Hashing)):::hoverNode
    L((Key Derivation)):::hoverNode
    M((Commitment Schemes)):::hoverNode
    %% Define the flow of the nodes

    A ==> B
    A ==> D
    A ==> C
    A ==> G
    A ==> H
    C ==> B
    D ==> E
    D ==> F
    H ==> I
    H ==> J
    H ==> K
    H ==> L
    H ==> M

    
    
    


    %% Define styles for hoverable nodes
    classDef hoverNode fill:#E0E5FC,stroke:#597FEE,stroke-width:2px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:16px,font-weight:bold,text-align:center,padding:10px;

    classDef highlighted-node fill:#e8f5e9,stroke:#43a047,stroke-width:8px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:18px,font-weight:bold,text-align:center,padding:0px 0px;
    
