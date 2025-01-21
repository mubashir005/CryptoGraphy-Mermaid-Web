---
title: "Pseudorandom Generator (PRG)"
slug: "/pseudorandom-generator"
---

# Pseudorandom Generator (PRG)

To understand EAV-Security, it is necessary to introduce the concept of pseudorandom generators (PRGs), which are fundamental components in private-key encryption.

A pseudorandom generator *G* is an efficient, deterministic algorithm for transforming a short, uniform string (called a seed) into a longer, uniform-looking (or pseudorandom) output string.

The PRG is beneficial when a large number of random (or random-looking) bits are required, as generating true random bits is often challenging and time-consuming.

A pseudorandom generator (PRG) should pass all efficient statistical tests, meaning that for any efficient distinguisher *D*, the probability that *D* outputs *1* when given the output of the PRG should be close to the probability that *D* outputs *1* when given a uniform string of the same length. This ensures that the PRG’s output appears uniformly random to any efficient observer.

A distribution *Dist* on *n*-bit strings is considered pseudorandom if the process of sampling a string from *Dist* is indistinguishable from sampling a uniform *n*-bit string. Specifically, it should be infeasible for any polynomial-time algorithm to distinguish between a string sampled from *Dist* and a uniformly random string. Pseudorandomness is a property of distributions, not individual strings, and is defined as a computational relaxation of true randomness.

If *G* is an efficiently computable function that maps *n*-bit strings to outputs longer than *n*, and *Distₙ* is the distribution obtained by choosing a uniform seed *s* of length *n* and outputting *G(s)*, then *G* is a pseudorandom generator if and only if *Distₙ* is pseudorandom.

## Definition

Let *G* be a deterministic polynomial-time algorithm such that for any *n* and any input *s ∈ {0,1}ⁿ*, the result *G(s)* is a string of length *ℓ(n)*.

*G* is a pseudorandom generator if the following conditions hold:

1. **Expansion:** For every *n*, it holds that *ℓ(n) > n*.
2. **Pseudorandomness:** For any probabilistic polynomial-time (PPT) algorithm *D*, there is a negligible function *negl(n)* such that:
   
   > *Pr[D(G(s)) = 1] − Pr[D(r) = 1] ≤ negl(n),*
   
   where the first probability is taken over the uniform choice of *s ∈ {0,1}ⁿ* and the randomness of *D*, and the second probability is taken over the uniform choice of *r ∈ {0,1}^ℓ(n)* and the randomness of *D*.

*ℓ(n)* is the expansion factor of *G*.

