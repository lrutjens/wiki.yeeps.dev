---
hide:
  - toc
---
<figure markdown="1">
# Cookie
![cookie](../assets/images/cooking/cookie.webp){ .item-image }

```mermiad
graph TD
    FLOUR(<img src="../../assets/images/cooking/flour.webp" width="50"/>)
    EGGS(<img src="../../assets/images/cooking/egg.webp" width="50"/>)
    MILK(<img src="../../assets/images/cooking/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/cooking/pot.webp" width="50"/>)
    BATTER(<img src="../../assets/images/cooking/batter.webp" width="50"/>)
    SUGAR(<img src="../../assets/images/cooking/sugar.webp" width="50"/>)
    OVEN(<img src="../../assets/images/cooking/oven.webp" width="50"/>)
    COOKIE(<img src="../../assets/images/cooking/cookie.webp" width="50"/>)

    FLOUR ==> POT
    EGGS ==> POT
    MILK ==> POT
    POT ==> BATTER
    BATTER ==> OVEN
    SUGAR ==> OVEN
    OVEN ==> COOKIE

    click FLOUR "../flour"
    click EGGS "../egg"
    click MILK "../milk"
    click POT "../pot"
    click BATTER "../batter"
    click SUGAR "../sugar"
    click OVEN "../oven"
    click COOKIE "../cookie"
```

</figure>