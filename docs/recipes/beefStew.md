<figure markdown="1">
# Beef Stew
![beefStew](../assets/images/beefStew.webp){ .item-image }

```mermaid
graph TD
    POT1(<img src="../../assets/images/pot.webp" width="50"/>)
    BEEF(<img src="../../assets/images/beef.webp" width="50"/>)
    POTATO(<img src="../../assets/images/potato.webp" width="50"/>)
    STEAK(<img src="../../assets/images/steak.webp" width="50"/>)
    POT2(<img src="../../assets/images/pot.webp" width="50"/>)
    BEEFSTEW(<img src="../../assets/images/beefStew.webp" width="50"/>)

    BEEF ==> POT1
    POT1 ==> STEAK
    STEAK ==> POT2
    POTATO ==> POT2
    POT2 ==> BEEFSTEW

    click BEEF "../beef"
    click POT1 "../pot"
    click POTATO "../potato"
    click STEAK "../steak"
    click POT2 "../pot"
    click BEEFSTEW "../beefStew"
```
</figure>