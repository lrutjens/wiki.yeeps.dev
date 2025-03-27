<figure markdown="1">
# Pepperoni Pizza
![pepperoniPizza](../assets/images/pepperoniPizza.webp){ .item-image }

```mermaid
graph TD
    MILK(<img src="../../assets/images/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    CHEESE(<img src="../../assets/images/cheese.webp" width="50"/>)
    FLOUR(<img src="../../assets/images/flour.webp" width="50"/>)
    TOMATO(<img src="../../assets/images/tomato.webp" width="50"/>)
    OVEN1(<img src="../../assets/images/oven.webp" width="50"/>)
    PIZZA(<img src="../../assets/images/pizza.webp" width="50"/>)
    BACON(<img src="../../assets/images/bacon.webp" width="50"/>)
    OVEN2(<img src="../../assets/images/oven.webp" width="50"/>)
    SAUSAGE(<img src="../../assets/images/sausage.webp" width="50"/>)
    OVEN3(<img src="../../assets/images/oven.webp" width="50"/>)
    PEPPERONIPIZZA(<img src="../../assets/images/pepperoniPizza.webp" width="50"/>)

    MILK ==> POT
    POT ==> CHEESE
    FLOUR ==> OVEN1
    CHEESE ==> OVEN1
    TOMATO ==> OVEN1
    OVEN1 ==> PIZZA
    BACON ==> OVEN2
    OVEN2 ==> SAUSAGE
    SAUSAGE ==> OVEN3
    PIZZA ==> OVEN3
    OVEN3 ==> PEPPERONIPIZZA

    click MILK "../milk"
    click POT "../pot"
    click CHEESE "../cheese"
    click FLOUR "../flour"
    click TOMATO "../tomato"
    click OVEN1 "../oven"
    click BACON "../bacon"
    click OVEN2 "../oven"
    click SAUSAGE "../sausage"
    click PIZZA "../pizza"
    click OVEN3 "../oven"
    click PEPPERONIPIZZA "../pepperoniPizza"
```

</figure>