<figure markdown="1">
# Hotdog
![hotdog](../assets/images/hotdog.webp){ .item-image }

```mermaid
graph TD
    BACON(<img src="../../assets/images/bacon.webp" width="50"/>)
    OVEN1(<img src="../../assets/images/oven.webp" width="50"/>)
    SAUSAGE(<img src="../../assets/images/sausage.webp" width="50"/>)
    FLOUR(<img src="../../assets/images/flour.webp" width="50"/>)
    OVEN2(<img src="../../assets/images/oven.webp" width="50"/>)
    BREAD(<img src="../../assets/images/bread.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    HOTDOG(<img src="../../assets/images/hotdog.webp" width="50"/>)

    BACON ==> OVEN1
    OVEN1 ==> SAUSAGE
    FLOUR ==> OVEN2
    OVEN2 ==> BREAD
    SAUSAGE ==> POT
    BREAD ==> POT
    POT ==> HOTDOG 

    click BACON "../bacon"
    click OVEN1 "../oven"
    click FLOUR "../flour"
    click OVEN2 "../oven"
    click SAUSAGE "../sausage"
    click BREAD "../bread"
    click POT "../pot"
    click HOTDOG "../hotdog"

```

</figure>