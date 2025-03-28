---
hide:
  - toc
---
<figure markdown="1">
# Pizza
![pizza](../assets/images/cooking/pizza.webp){ .item-image }

```mermaid
graph TD
    MILK(<img src="../../assets/images/cooking/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/cooking/pot.webp" width="50"/>)
    CHEESE(<img src="../../assets/images/cooking/cheese.webp" width="50"/>)
    FLOUR(<img src="../../assets/images/cooking/flour.webp" width="50"/>)
    TOMATO(<img src="../../assets/images/cooking/tomato.webp" width="50"/>)
    OVEN(<img src="../../assets/images/cooking/oven.webp" width="50"/>)
    PIZZA(<img src="../../assets/images/cooking/pizza.webp" width="50"/>)

    MILK ==> POT
    POT ==> CHEESE
    FLOUR ==> OVEN
    CHEESE ==> OVEN
    TOMATO ==> OVEN
    OVEN ==> PIZZA


    click MILK "../milk"
    click POT "../pot"
    click CHEESE "../cheese"
    click FLOUR "../flour"
    click TOMATO "../tomato"
    click OVEN "../oven"
    click PIZZA "../pizza"

```

</figure>