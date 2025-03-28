---
hide:
  - toc
---
<figure markdown="1">
# Salad
![salad](../assets/images/cooking/salad.webp){ .item-image }

```mermaid
graph TD
    TOMATO(<img src="../../assets/images/cooking/tomato.webp" width="50"/>)
    LETTUCE(<img src="../../assets/images/cooking/lettuce.webp" width="50"/>)
    POT(<img src="../../assets/images/cooking/pot.webp" width="50"/>)
    SALAD(<img src="../../assets/images/cooking/salad.webp" width="50"/>)

    TOMATO ==> POT
    LETTUCE ==> POT
    POT ==> SALAD 
    
    click TOMATO "../tomato"
    click LETTUCE "../lettuce"
    click POT "../pot"
    click SALAD "../salad"
```

</figure>