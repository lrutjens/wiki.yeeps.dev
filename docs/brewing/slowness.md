---
hide:
  - toc
description: How to make slowness potion in yeeps hide and seek
---
<figure markdown="1">
# Slowness
:fontawesome-solid-gauge-high:{ .xxxl .flip-horizontal }

The [Slowness Potion](../brewing/slowness.md), the opposite of the [Speed Potion](../brewing/speed.md), decreases your movement speed when pushing off with your hands. Other sources of movement, such as [launchers](), [water](), and so on, are not affected.


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
    PURPLEFLOWER(<img src="../../assets/images/brewing/flowerPurple.webp"/>):::item
    BERRIES(<img src="../../assets/images/brewing/berries.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    PURPLEFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    BERRIES ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click BERRIES "../berries"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>