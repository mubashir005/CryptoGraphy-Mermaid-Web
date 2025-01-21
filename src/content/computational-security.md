---
title: "Computational Security"
slug: "/computational-security"
---
# Computational Security

The concept of perfect secrecy represents an ideal in cryptography, ensuring
that no information about an encrypted message is ever leaked, even if an
attacker has unlimited computational power. While this is theoretically
appealing, it is unnecessarily strong and impractical for real-world
applications.
Instead, cryptographic security is commonly defined using the notion of
computational security, which allows for minimal and practically negligible
risks. For instance, an encryption scheme may be considered secure if the
probability of an attacker successfully decrypting a message is infinitely small,
even after decades of computational effort on advanced systems.
Computational security differs fundamentally from perfect secrecy in two ways:
1. Limited Adversary Resources: Security is guaranteed only against attackers with   feasible computational resources and time limits. Given unlimited resources, any system could potentially be compromised, but computational security ensures this scenario is practically unattainable.

2. Minimal Probability of Failure: There is a small, non-zero chance of an attacker succeeding. By ensuring this probability is negligible, the risk remains acceptable in practical applications. Despite these relaxations, computational security maintains a rigorous mathematical framework. Definitions and proofs remain essential to establish and evaluate the strength of encryption schemes.

To formalize computational security, two main approaches are used:

- The Concrete Approach

- The Asymptotic Approach
