---
hide:
  - toc
description: How to make the blindness potion in yeeps hide and seek
---
<figure markdown="1">
# Blindness
:fontawesome-solid-eye-slash:{ .xxxl }

[Blindness](../brewing/blindness.md) causes the players vision to be limited to a small area around them, while everything else is behind a black fog.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">
![hacky_fix](../assets/images/hacky-fix.webp){ .item-image .hidden .janky-fix }
```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    PURPLEFLOWER(<img src="../../assets/images/brewing/flowerPurple.webp"/>)
    EYEBALL(<img src="../../assets/images/brewing/eyeball.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>) 

    PURPLEFLOWER ==> CAULDRON
    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    HIDDEN ==> CAULDRON
    EYEBALL ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click EYEBALL "../eyeball"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>