<figure markdown="1">
# Syrup
![syrup](../assets/images/syrup.webp){ .item-image }

```mermaid
graph TD
    SUGAR1(<img src="../../assets/images/sugar.webp" width="50"/>)
    SUGAR2(<img src="../../assets/images/sugar.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    SYRUP(<img src="../../assets/images/syrup.webp" width="50"/>)

    SUGAR1 ==> POT
    SUGAR2 ==> POT
    POT ==> SYRUP 

    click SUGAR1 "../sugar"
    click SUGAR2 "../sugar"
    click POT "../pot"
    click SYRUP "../syrup"
```

</figure>