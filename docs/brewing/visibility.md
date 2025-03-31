---
hide:
  - toc
---
<figure markdown="1">
# Visibility
:fontawesome-solid-person:{ .xxxl }

The [Visibilty Potion](../brewing/visibility.md) gives you a red outline, allowing you to blend in with seekers.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">

```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    PURPLEFLOWER(<img src="../../assets/images/brewing/flowerPurple.webp"/>)
    TAIL(<img src="../../assets/images/brewing/tail.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

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