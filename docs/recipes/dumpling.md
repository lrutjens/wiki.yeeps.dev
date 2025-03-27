<figure markdown="1">
# Dumpling
![dumpling](../assets/images/dumpling.webp){ .item-image }

```mermaid
graph TD
    FLOUR(<img src="../../assets/images/flour.webp" width="50"/>)
    LETTUCE(<img src="../../assets/images/lettuce.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    DUMPLING(<img src="../../assets/images/dumpling.webp" width="50"/>)

    FLOUR ==> POT
    LETTUCE ==> POT
    POT ==> DUMPLING

    click FLOUR "../flour"
    click LETTUCE "../lettuce"
    click POT "../pot"
    click DUMPLING "../dumpling"
```

</figure>