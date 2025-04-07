---
hide:
  - toc
description: How to make the poison potion in yeeps hide and seek
---
<figure markdown="1">
# Poison
:fontawesome-solid-biohazard:{ .xxxl }

The [Poison Potion](../brewing/poison.md), the opposite of the [Healing Potion](../brewing/healing.md), will slowly drain your stuffing for the duration of the potion.

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
    LEAF(<img src="../../assets/images/brewing/leaf.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    PURPLEFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    LEAF ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click LEAF "../leaf"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>