---
hide:
  - toc
description: How to make the visibility/outline/seeker potion in yeeps hide and seek
---
<figure markdown="1">
# Visibility
:fontawesome-solid-person:{ .xxxl }

The [Visibilty Potion](../brewing/visibility.md) gives you a red outline, allowing you to blend in with seekers.

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
    TAIL(<img src="../../assets/images/brewing/tail.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    PURPLEFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    TAIL ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click PURPLEFLOWER "../flowerPurple"
    click TAIL "../tail"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>