---
title: "Indistinguishability"
slug: "/indistinguishability"
---

# Indistinguishability

## Perfect Indistinguishability

Perfect indistinguishability is an equivalent definition of perfect secrecy that focuses on an adversary’s inability to distinguish between two chosen messages based on their ciphertexts.

### Adversarial Experiment
1. The adversary chooses two messages *m₀* and *m₁* from the message space *M*.
2. A key *k* is generated using the key generation algorithm *Gen*, and a random bit *b ∈ {0,1}* is selected.
3. The message *m_b* is encrypted to produce a challenge ciphertext *c*, which is given to the adversary.
4. The adversary guesses *b*, trying to determine which message was encrypted.

The scheme is perfectly indistinguishable if no adversary, regardless of computational power, can succeed with a probability greater than *1/2*, which represents a random guess.

### Formal Definition
An encryption scheme *(Gen, Enc, Dec)* with message space *M* is perfectly indistinguishable if, for every adversary *A*:

> *Pr[PrivKeav_A = 1] = 1/2*

