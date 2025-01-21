---
title: "Proof of Reduction"
slug: "/proof-of-reduction"
---

# Proof of Reduction

In cryptography, computational security relies on unproven assumptions since most schemes are not information-theoretically secure. The strategy is to assume the hardness of a mathematical problem or the security of a low-level cryptographic primitive and to prove that the construction built on it is secure under this assumption.

A proof of security for a cryptographic construction is typically achieved through a reduction. This method explicitly shows how any efficient adversary *A* that can break the cryptographic scheme *Π* can be transformed into an efficient algorithm *A′* that solves the underlying hard problem *X*.

## Steps for a Proof by Reduction

1. Fix some efficient (i.e., probabilistic polynomial-time) adversary *A* attacking *Π*. Denote this adversary’s success probability by *ϵ(n)*.
2. Construct an efficient algorithm *A′* that attempts to solve problem *X* by using adversary *A* as a subroutine. An important point here is that *A′* knows nothing about how *A* works; the only thing *A′* knows is that *A* is expecting to attack *Π*. So, given some input instance *x* of problem *X*, our algorithm *A′* will simulate for *A* an instance of *Π* such that:
   - As far as *A* can tell, it is interacting with *Π*. That is, the view of *A* when run as a subroutine by *A′* should be distributed identically to (or at least close to) the view of *A* when it interacts with *Π*.
   - When *A* succeeds in breaking the instance of *Π* that is being simulated by *A′*, this should allow *A′* to solve the instance *x* it was given, at least with inverse polynomial probability *1/p(n)*. In other words, we attempt to reduce the problem of solving *X* to the problem of breaking *Π*.
3. Taken together, the above imply that *A′* solves *X* with probability *ϵ(n)/p(n)*. Now, if *ϵ(n)* is not negligible, then neither is *ϵ(n)/p(n)*. Moreover, if *A′* is efficient, we obtain an efficient algorithm *A′* solving *X* with non-negligible probability, contradicting our initial assumption.
4. Given our assumption regarding *X*, we conclude that no efficient adversary *A* can succeed in breaking *Π* with non-negligible probability. Stated differently, *Π* is computationally secure.

