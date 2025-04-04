---
hide:
  - toc
description: How to make a pie in yeeps hide and seek
---
<figure markdown="1">
# Pie
![pie](../assets/images/cooking/pie.webp){ .item-image }

```mermaid
graph TD
    FRUIT(<img src="../../assets/images/cooking/fruit.webp" width="50"/>)
    SUGAR(<img src="../../assets/images/cooking/sugar.webp" width="50"/>)
    FLOUR(<img src="../../assets/images/cooking/flour.webp" width="50"/>)
    OVEN(<img src="../../assets/images/cooking/oven.webp" width="50"/>)
    PIE(<img src="../../assets/images/cooking/pie.webp" width="50"/>)

    FRUIT ==> OVEN
    SUGAR ==> OVEN
    FLOUR ==> OVEN
    OVEN ==> PIE

    click FRUIT "../fruit"
    click SUGAR "../sugar"
    click FLOUR "../flour"
    click OVEN "../oven"
    click PIE "../pie"
```
</figure>