---
title: "Chapter 3"
Link: "/chapter-3"
infoData:
  - id: "Perfect Secrecy"
    title: "Perfect Secrecy"
    text: "Perfect Secrecy is some topic inside this node. More detail will be added afterwards."
    link: "/perfectSecrecyPage"
  - id: "Computational Security"
    title: "Computational Security"
    text: "Computational Security is some topic inside this node. More detail will be added afterwards."
    link: "/Computational_Security"
  - id: "The Concrete Approach"
    title: "The Concrete Approach"
    text: "The Concrete Approach is some topic inside this node. More detail will be added afterwards."
    link: "/theconcreteApproach"
  - id: "The Asymptotic Approach"
    title: "The Asymptotic Approach"
    text: "The Asymptotic Approach is some topic inside this node. More detail will be added afterwards."
    link: "/theasymptoticApproach"
  - id: "EAV - Security"
    title: "EAV - Security"
    text: "EAV - Security is some topic inside this node. More detail will be added afterwards."
    link: "/eavsecurityPage"
  - id: "CPA - Security"
    title: "CPA - Security"
    text: "CPA - Security is some topic inside this node. More detail will be added afterwards."
    link: "/cpasecurityPage"
  - id: "Pseudorandom Generator"
    title: "Pseudorandom Generator"
    text: "Pseudorandom Generator is some topic inside this node. More detail will be added afterwards."
    link: "/pseudorandomGeneratorPage"
  - id: "Pseudorandom Function"
    title: "Pseudorandom Function"
    text: "Pseudorandom Functio is some topic inside this node. More detail will be added afterwards."
    link: "/pseudorandomFunctionPage"
  - id: "Pseudorandom Permuation"
    title: "Pseudorandom Permuation"
    text: "Pseudorandom Permuation is some topic inside this node. More detail will be added afterwards."
    link: "/pseudorandomPermuationPage"
  - id: "Perfect Indistinguishability"
    title: "Perfect Indistinguishability"
    text: "Indistinguishability is some topic inside this node. More detail will be added afterwards."
    link: "/perfectindistinguishabilityPage"
  - id: "Proof of Reduction"
    title: "Proof of Reduction"
    text: "Proof of Reduction is some topic inside this node. More detail will be added afterwards."
    link: "/proofOfReductionPage"
  - id: "Ciphertextonly attacks"
    title: "Ciphertextonly attacks"
    text: "Ciphertextonly attacks is some topic inside this node. More detail will be added afterwards."
    link: "/ciphertextonlyattacksPage"
  - id: "Cipherplaintext-Attacks"
    title: "Cipherplaintext-Attacks"
    text: "Cipherplaintext-Attacks is some topic inside this node. More detail will be added afterwards."
    link: "/cipherplaintextattacksPage"
  - id: "Pseudo-randomness"
    title: "Pseudo-randomness"
    text: "Pseudo-randomness is some topic inside this node. More detail will be added afterwards."
    link: "/pseudoRandomnessPage"
  - id: "Modes of Operation"
    title: "Modes of Operation"
    text: "Modes of Operation is some topic inside this node. More detail will be added afterwards."
    link: "/modesOfOperationPage"
  - id: "Block Ciphers"
    title: "Block Ciphers"
    text: "Block Ciphers is some topic inside this node. More detail will be added afterwards."
    link: "/blockCiphersPage"
  - id: "Stream Ciphers"
    title: "Stream Ciphers"
    text: "Stream Ciphers is some topic inside this node. More detail will be added afterwards."
    link: "/streamCiphersPage"
---

```mermaid
graph TD
    %% Define the nodes
    
    A((Perfect Secrecy)):::hoverNode
    B((Computational Security)):::hoverNode
    C((The Concrete Approach)):::hoverNode
    D((The Asymptotic Approach)):::hoverNode
    E((EAV - Security)):::hoverNode
    F((CPA - Security)):::hoverNode
    G((Pseudorandom Generator)):::hoverNode
    H((Pseudorandom Function)):::hoverNode
    I((Pseudorandom Permuation)):::hoverNode
    J((Perfect Indistinguishability)):::hoverNode
    K((Proof of Reduction)):::hoverNode
    L((Ciphertextonly attacks)):::hoverNode
    M((Cipherplaintext-Attacks)):::hoverNode
    N((Modes of Operation)):::hoverNode
    O((Block Ciphers)):::hoverNode
    P((Stream Ciphers)):::hoverNode
    Q((Pseudo-randomness)):::hoverNode
    %% Define the flow of the nodes

    A <==>|Computational secrecy is weaker| B
    A ==> J
    B ==> C
    B ==> D
    D ==> E
    D ==> F
    E ==> G
    E ==> K
    E ==> J
    E ==> L
    F ==> J
    F ==> H
    F ==> M
    N ==> O
    N ==> P
    G ==> P
    I ==> O
    Q ==> G
    Q ==> H
    Q ==> I
    


    %% Define styles for hoverable nodes
    classDef hoverNode fill:#E0E5FC,stroke:#597FEE,stroke-width:2px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:16px,font-weight:bold,text-align:center,padding:10px;

    classDef highlighted-node fill:#e8f5e9,stroke:#43a047,stroke-width:8px,rx:10px,ry:10px,font-family:'Raleway',sans-serif,font-size:18px,font-weight:bold,text-align:center,padding:0px 0px;