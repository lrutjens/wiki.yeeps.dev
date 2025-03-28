---
hide:
  - toc
---
<figure markdown="1">
# Fried Chicken
![friedChicken](../assets/images/cooking/friedChicken.webp){ .item-image }

```mermaid
graph TD
    CHICKEN(<img src="../../assets/images/cooking/chicken.webp" width="50"/>)
    POT(<img src="../../assets/images/cooking/pot.webp" width="50"/>)
    FRIEDCHICKEN(<img src="../../assets/images/cooking/friedChicken.webp" width="50"/>)

    CHICKEN ==> POT
    POT ==> FRIEDCHICKEN

    click CHICKEN "../chicken"
    click POT "../pot"
    click FRIEDCHICKEN "../friedChicken"
```

</figure>