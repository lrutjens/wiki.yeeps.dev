<figure markdown="1">
# Lasagna
![lasagna](../assets/images/lasagna.webp){ .item-image }

```mermaid
graph TD
    MILK(<img src="../../assets/images/milk.webp" width="50"/>)
    POT(<img src="../../assets/images/pot.webp" width="50"/>)
    CHEESE(<img src="../../assets/images/cheese.webp" width="50"/>)
    TOMATO(<img src="../../assets/images/tomato.webp" width="50"/>)
    NOODLES(<img src="../../assets/images/noodles.webp" width="50"/>)
    OVEN(<img src="../../assets/images/oven.webp" width="50"/>)
    LASAGNA(<img src="../../assets/images/lasagna.webp" width="50"/>)

    MILK ==> POT
    POT ==> CHEESE
    TOMATO ==> OVEN
    CHEESE ==> OVEN
    NOODLES ==> OVEN
    OVEN ==> LASAGNA

    click MILK "../milk"
    click POT "../pot"
    click TOMATO "../tomato"
    click CHEESE "../cheese"
    click NOODLES "../noodles"
    click OVEN "../oven"
    click LASAGNA "../lasagna"
```

</figure>