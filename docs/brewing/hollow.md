---
hide:
  - toc
---
<figure markdown="1">
# Hollow
:fontawesome-regular-square:{ .xxxl }

The [Hollow Potion](../brewing/hollow.md), similar to the [Invisibility Potion](../brewing/invisibility.md), makes the yeep's normal body disappear, but leaves all cosmetics visible.

<br />

[comment]: <> ( This is a hacky fix to get recipe items to scale correctly (theres something janky with image sizes and classes that i cant figure out) )
<img src="../../assets/images/hacky-fix.webp" class="item-image hidden janky-fix">

```mermaid
graph TD
    classDef hidden visibility: hidden, height: 1px, width: 50px;
    HIDDEN(<img src="../../assets/images/hacky-fix.webp"/>):::hidden

    BREWSHROOM(<img src="../../assets/images/brewing/brewshroom.webp"/>)
    TALLBREWSHROOM(<img src="../../assets/images/brewing/tallBrewshroom.webp"/>)
    EYEBALL(<img src="../../assets/images/brewing/eyeball.webp"/>)
    TAIL(<img src="../../assets/images/brewing/tail.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    EYEBALL ==> CAULDRON
    HIDDEN ==> CAULDRON
    TAIL ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click EYEBALL "../eyeball"
    click TAIL "../tail"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>