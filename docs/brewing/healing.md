---
hide:
  - toc
description: How to make the healing potion in yeeps hide and seek
---
<figure markdown="1">
# Healing
:fontawesome-solid-heart-circle-plus:{ .xxxl }

The [Healing Potion](../brewing/healing.md), the opposite of the [Poison Potion](../brewing/poison.md), will slowly give you stuffing for its duration.

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
    LEAF(<img src="../../assets/images/brewing/leaf.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    YELLOWFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    LEAF ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click YELLOWFLOWER "../flowerYellow"
    click LEAF "../leaf"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>