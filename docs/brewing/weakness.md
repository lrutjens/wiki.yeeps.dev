---
hide:
  - toc
description: How to make the weakness potion in yeeps hide and seek
---
<figure markdown="1">
# Weakness
:fontawesome-solid-person-cane:{ .xxxl }

The [Weakness Potion](../brewing/weakness.md), the opposite of the [Strength Potion](../brewing/strength.md), decreases the knockback applied a yeep when you hit them.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">

```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    PURPLEFLOWER(<img src="../../assets/images/brewing/flowerPurple.webp"/>)
    TENTACLE(<img src="../../assets/images/brewing/tentacle.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    PURPLEFLOWER ==> CAULDRON
    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    HIDDEN ==> CAULDRON
    TENTACLE ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click TENTACLE "../tentacle"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>