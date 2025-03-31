---
hide:
  - toc
---
<figure markdown="1">
# Giant
:fontawesome-solid-person-arrow-up-from-line:{ .xxxl }

The [Giant Potion](../brewing/giant.md), the opposite of the [Tiny Potion](../brewing/tiny.md), causes the player's size to increase. This allows you to pick up and hold large items, such as the [Biggie Sword](), while still large. After the potion's duration ends, you will drop any large items.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">

```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    YELLOWFLOWER(<img src="../../assets/images/brewing/flowerYellow.webp"/>)
    BONE(<img src="../../assets/images/brewing/bone.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

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