<figure markdown="1">
# Fried Egg
![friedEgg](../assets/images/friedEgg.webp){ .item-image }

```mermaid
graph TD
    EGG(<img src="../../assets/images/egg.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    FRIEDEGG(<img src="../../assets/images/friedEgg.webp" width="50"/>)

    EGG ==> POT
    POT ==> FRIEDEGG

    click EGG "../egg"
    click POT "../pot"
    click FRIEDEGG "../friedEgg"
```

</figure>