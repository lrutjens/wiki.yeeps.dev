---
hide:
  - toc
description: How to make the strenght/strong potion in yeeps hide and seek
---
<figure markdown="1">
# Strength
:fontawesome-solid-dumbbell:{ .xxxl }

The [Strength Potion](../brewing/strength.md), the opposite of the [Weakness Potion](../brewing/weakness.md), increases the knockback applied to a yeep when you hit them.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">
![hacky_fix](../assets/images/hacky-fix.webp){ .item-image .hidden .janky-fix }
```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    classDef item  height: 5.5rem, width: 5.5rem;

    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>):::item
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>):::item
    YELLOWFLOWER(<img src="../../assets/images/brewing/flowerYellow.webp"/>):::item
    TENTACLE(<img src="../../assets/images/brewing/tentacle.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    YELLOWFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    TENTACLE ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click YELLOWFLOWER "../flowerYellow"
    click TENTACLE "../tentacle"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>