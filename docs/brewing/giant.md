---
hide:
  - toc
description: How to make the big/giant potion in yeeps hide and seek
---
<figure markdown="1">
# Giant
:fontawesome-solid-person-arrow-up-from-line:{ .xxxl }

The [Giant Potion](../brewing/giant.md), the opposite of the [Tiny Potion](../brewing/tiny.md), causes the player's size to increase. This allows you to pick up and hold large items, such as the [Biggie Sword](), while still large. After the potion's duration ends, you will drop any large items.

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
    BONE(<img src="../../assets/images/brewing/bone.webp"/>):::item
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>):::item
    POTION(<img src="../../assets/images/brewing/potion.webp"/>):::item

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    YELLOWFLOWER ==> CAULDRON
    HIDDEN ==> CAULDRON
    BONE ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click YELLOWFLOWER "../flowerYellow"
    click BONE "../bone"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>