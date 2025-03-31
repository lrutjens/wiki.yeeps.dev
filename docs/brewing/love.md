---
hide:
  - toc
---
<figure markdown="1">
# Love
:fontawesome-solid-face-grin-hearts:{ .xxxl }

When two yeeps drink a [Love Potion](../brewing/love.md), both are pulled together. This effect is similar to what a [Rose]() does, but with less strength and it happens over a peroid of time.

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
    TENTACLE(<img src="../../assets/images/brewing/tentacle.webp"/>)
    CAULDRON(<img src="../../assets/images/brewing/cauldron.webp"/>)
    POTION(<img src="../../assets/images/brewing/potion.webp"/>)

    BREWSHROOM -.- HIDDEN
    TALLBREWSHROOM -.- HIDDEN
    EYEBALL ==> CAULDRON
    HIDDEN ==> CAULDRON
    TENTACLE ==> CAULDRON
    CAULDRON ==> POTION

    click BREWSHROOM "../brewshroom"
    click TALLBREWSHROOM "../tallBrewshroom"
    click EYEBALL "../eyeball"
    click TENTACLE "../tentacle"
    click CAULDRON "../cauldron"
    click POTION "../potion"
```
</figure>