---
hide:
  - toc
description: How to make the tiny/small potion in yeeps hide and seek
---
<figure markdown="1">
# Tiny
:fontawesome-solid-person-arrow-down-to-line:{ .xxxl }

The [Tiny Potion](../brewing/tiny.md), the opposite of the [Giant Potion](../brewing/giant.md), causes the players size to increase. This allows you to fit through gaps you otherwise wouldn't be able to.

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
    BONE(<img src="../../assets/images/brewing/bone.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    PURPLEFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    BONE ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click BONE "../bone"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>