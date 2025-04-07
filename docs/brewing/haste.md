---
hide:
  - toc
description: How to make the spinnign/haste potion in yeeps hide and seek
---
<figure markdown="1">
# Haste
:fontawesome-solid-rotate:{ .xxxl }

The [Haste Potion](../brewing/haste.md), not to be confused with [Speed Potion](../brewing/speed.md), will increase your rotation speed and allow you to spin very fast.

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
    BERRIES(<img src="../../assets/images/brewing/berries.webp"/>)
    FEATHER(<img src="../../assets/images/brewing/feather.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    BERRIES ==> CAULDRON
    HIDDEN ==> CAULDRON
    FEATHER ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click BERRIES "../berries"
    click FEATHER "../feather"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>