---
hide:
  - toc
description: How to make the night vision potion in yeeps hide and seek
---
<figure markdown="1">
# Night Vision
:fontawesome-solid-eye:{ .xxxl }

The [Night Vision Potion](../brewing/nightVision.md) makes all blocks appear to have full lighting, allowing you to see in otherwise dark areas.

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
    EYEBALL(<img src="../../assets/images/brewing/eyeball.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    YELLOWFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    EYEBALL ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click YELLOWFLOWER "../flowerYellow"
    click EYEBALL "../eyeball"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>