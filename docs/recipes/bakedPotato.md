<figure markdown="1">
# Baked Potato
![bakedPotato](../assets/images/bakedPotato.webp){ .item-image }

```mermaid
graph TD
    POTATO(<img src="../../assets/images/potato.webp" width="50"/>)
    BACON(<img src="../../assets/images/bacon.webp" width="50"/>)
    MILK(<img src="../../assets/images/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width ="50">)
    CHEESE(<img src="../../assets/images/cheese.webp" width="50"/>)
    OVEN(<img src="../../assets/images/oven.webp" width="50"/>)
    BAKEDPOTATO(<img src="../../assets/images/bakedPotato.webp" width="50"/>)
    
    MILK ==> POT
    POT ==> CHEESE
    POTATO ==> OVEN
    CHEESE ==> OVEN
    BACON ==> OVEN
    OVEN ==> BAKEDPOTATO


    click POTATO "../potato"
    click BACON "../bacon"
    click MILK "../milk"
    click POT "../pot"
    click CHEESE "../cheese"
    click OVEN "../oven"
    click BAKEDPOTATO "../bakedPotato"

```

</figure>
