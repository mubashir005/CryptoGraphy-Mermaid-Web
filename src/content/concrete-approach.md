---
title: "The Concrete Approach"
slug: "/concrete-approach"
---

# The Concrete Approach

The concrete approach to computational security provides a practical framework for evaluating the robustness of cryptographic schemes by quantifying their resilience against adversaries within specific computational limits. This approach explicitly defines the maximum success probability of an attacker operating within a fixed time frame or computational budget, offering tangible guarantees for the security of cryptographic systems.

## Definition
A scheme is (*t*)-secure if any adversary running for time at most *t* succeeds in breaking the scheme with probability at most a predefined threshold.

## Example
- A scheme might guarantee that no attacker using the fastest supercomputer for 200 years can break it with a probability exceeding 2<sup>−60</sup>.

## Limitations
The concrete approach is particularly valuable because it directly addresses user concerns by providing measurable security assurances. However, its practical implementation presents several challenges:

1. **Dependency on Assumptions:** Security claims often depend on assumptions about the attacker’s computational resources, such as the use of desktop PCs, supercomputers, or extensive computer networks. These guarantees may also fail to consider future advancements in computing power, which could significantly reduce the time required to break a scheme. For instance, Moore’s Law suggests that computational power roughly doubles every 18 months.

2. **Specific Conditions:** Concrete security claims are typically limited to specific conditions. For example, a guarantee against adversaries running for five years does not necessarily account for attackers running for shorter or longer durations. Moreover, assumptions about the attack methods (e.g., off-the-shelf algorithms vs. dedicated hardware) can affect the validity of the claims.

