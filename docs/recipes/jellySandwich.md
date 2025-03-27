<figure markdown="1">
# Jelly Sandwich
![jellySandwich](../assets/images/jellySandwich.webp){ .item-image }

```mermaid
graph TD
    FRUIT(<img src="../../assets/images/fruit.webp" width="50"/>)
    SUGAR(<img src="../../assets/images/sugar.webp" width="50"/>)
    OVEN1(<img src="../../assets/images/oven.webp" width="50"/>)
    JELLY(<img src="../../assets/images/jelly.webp" width="50"/>)
    FLOUR(<img src="../../assets/images/flour.webp" width="50"/>)
    OVEN2(<img src="../../assets/images/oven.webp" width="50"/>)
    BREAD(<img src="../../assets/images/bread.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    JELLYSANDWICH(<img src="../../assets/images/jellySandwich.webp" width="50"/>)

    FRUIT ==> OVEN1
    SUGAR ==> OVEN1
    OVEN1 ==> JELLY
    FLOUR ==> OVEN2
    OVEN2 ==> BREAD
    JELLY ==> POT
    BREAD ==> POT
    POT ==> JELLYSANDWICH

    click FRUIT "../fruit"
    click SUGAR "../sugar"
    click OVEN1 "../oven"
    click JELLY "../jelly"
    click FLOUR "../flour"
    click OVEN2 "../oven"
    click BREAD "../bread"
    click POT "../pot"
    click JELLYSANDWICH "../jellySandwich"
```
</figure>