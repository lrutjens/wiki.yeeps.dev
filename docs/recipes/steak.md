<figure markdown="1">
# Steak
![steak](../assets/images/steak.webp){ .item-image }

```mermaid
graph TD
    BEEF(<img src="../../assets/images/beef.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    STEAK(<img src="../../assets/images/steak.webp" width="50"/>)

    BEEF ==> POT
    POT ==> STEAK

    click BEEF "../beef"
    click POT "../pot"
    click STEAK "../steak"
```

</figure>