---
hide:
  - toc
description: How to make the neutralizer potion in yeeps hide and seek
---
<figure markdown="1">
# Neutralizer
:fontawesome-solid-kit-medical:{ .xxxl }

The [Neutralizer Potion](../brewing/neutralizer.md) negates the effects of all potions while active. If you drink a potion whose duration has been extended by the [Tall Brewshroom](../brewing/tallBrewshroom.md), then consume a standard [Neutralizer Potion](../brewing/neutralizer.md), the original potion will take effect again once the [Neutralizer Potion](../brewing/neutralizer.md) wears off.


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
    LEAF(<img src="../../assets/images/brewing/leaf.webp"/>):::item
    TAIL(<img src="../../assets/images/brewing/tail.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    LEAF ==> CAULDRON
    HIDDEN ==> CAULDRON
    TAIL ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click LEAF "../leaf"
    click TAIL "../tail"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>