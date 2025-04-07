---
hide:
  - toc
description: How to make the speed potion in yeeps hide and seek
---
<figure markdown="1">
# Speed
:fontawesome-solid-gauge-high:{ .xxxl }

The [Speed Potion](../brewing/speed.md), the opposite of the [Slowness Potion](../brewing/slowness.md), increases your movement speed when pushing off with your hands. Other sources of movement, such as [launchers](), [water](), and so on, are not affected.

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
    YELLOWFLOWER(<img src="../../assets/images/brewing/flowerYellow.webp"/>)
    BERRIES(<img src="../../assets/images/brewing/berries.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    YELLOWFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    BERRIES ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click YELLOWFLOWER "../flowerYellow"
    click BERRIES "../berries"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>