<figure markdown="1">
# Jelly
![jelly](../assets/images/jelly.webp){ .item-image }

```mermaid
graph TD
    FRUIT(<img src="../../assets/images/fruit.webp" width="50"/>)
    SUGAR(<img src="../../assets/images/sugar.webp" width="50"/>)
    OVEN(<img src="../../assets/images/oven.webp" width="50"/>)
    JELLY(<img src="../../assets/images/jelly.webp" width="50"/>)

    FRUIT ==> OVEN
    SUGAR ==> OVEN
    OVEN ==> JELLY

    click FRUIT "../fruit"
    click SUGAR "../sugar"
    click OVEN "../oven"
    click JELLY "../jelly"
```

</figure>