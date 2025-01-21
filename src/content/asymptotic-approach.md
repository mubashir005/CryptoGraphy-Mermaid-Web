---
title: "The Asymptotic Approach"
slug: "/asymptotic-approach"
---

# The Asymptotic Approach

Due to the limitations of the concrete approach, such as difficulties in providing precise guarantees and accounting for evolving computational capabilities, the asymptotic approach offers a more flexible and theoretical framework for analyzing cryptographic security.

Rooted in complexity theory, this approach uses a security parameter (*n*), which acts as a central variable that both defines the cryptographic scheme itself and influences the resources available to all parties involved, including attackers.

## Security Parameter
- **The security parameter *n*** is an integer value that typically represents the size of the cryptographic key. In practical terms, this value correlates to the amount of resources or effort required to break the scheme.
- For example, a larger *n* implies a stronger cryptographic system, as the effort to break the system increases as the size of the security parameter increases.

## Polynomial
A function *f* from the natural numbers to the non-negative real numbers is polynomial if there exists a constant *c* such that:

> *f(n) < n^c for all n.*

An algorithm *A* runs in polynomial time if there exists a polynomial *p* such that, for every input *x*, the computation of *A(x)* terminates within at most *p(|x|)* steps, where *|x|* denotes the length of the input *x*.

- In the asymptotic approach, adversaries are modeled as probabilistic algorithms that run in polynomial time relative to the security parameter *n*.
- A polynomial function *p(n)* describes the maximum amount of time or resources an adversary can use to attack the system.

## Negligible Probability of Success
A negligible function is one that is asymptotically smaller than any inverse polynomial function. Formally:

> A function *f* is negligible if, for every polynomial *p*, there exists an *N* such that for all *n > N*, it holds that:
>
> *f(n) < 1/p(n).* 

In simpler terms, this ensures that the chance of an adversary succeeding is so small that, for practical purposes, it can be ignored.

## Security Definition in the Asymptotic Model
A cryptographic scheme is considered secure in the asymptotic approach if any probabilistic polynomial-time (PPT) adversary has a negligible probability of successfully breaking the scheme. As *n* grows, the likelihood of an adversary succeeding diminishes significantly, ensuring long-term security.

This perspective makes the asymptotic approach valuable for understanding the scalability of cryptographic systems.

