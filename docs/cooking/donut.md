---
hide:
  - toc
---
<figure markdown="1">
# Donut
![donut](../assets/images/cooking/donut.webp){ .item-image }

```mermaid
graph TD
    FLOUR(<img src="../../assets/images/cooking/flour.webp" width="50"/>)
    EGGS(<img src="../../assets/images/cooking/egg.webp" width="50"/>)
    MILK(<img src="../../assets/images/cooking/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/cooking/pot.webp" width="50"/>)
    BATTER(<img src="../../assets/images/cooking/batter.webp" width="50"/>)
    OVEN1(<img src="../../assets/images/cooking/oven.webp" width="50"/>)
    BAGEL(<img src="../../assets/images/cooking/bagel.webp" width="50"/>)
    SUGAR(<img src="../../assets/images/cooking/sugar.webp" width="50"/>)
    OVEN2(<img src="../../assets/images/cooking/oven.webp" width="50"/>)
    DONUT(<img src="../../assets/images/cooking/donut.webp" width="50"/>)

    FLOUR ==> POT
    EGGS ==> POT
    MILK ==> POT
    POT ==> BATTER
    BATTER ==> OVEN1
    OVEN1 ==> BAGEL
    BAGEL ==> OVEN2
    SUGAR ==> OVEN2
    OVEN2 ==> DONUT

    click FLOUR "../flour"
    click EGGS "../egg"
    click MILK "../milk"
    click POT "../pot"
    click BATTER "../batter"
    click OVEN1 "../oven"
    click BAGEL "../bagel"
    click SUGAR "../sugar"
    click OVEN2 "../oven"
    click DONUT "../donut"
    
```

</figure>