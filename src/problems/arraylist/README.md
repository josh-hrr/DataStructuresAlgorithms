# ArrayList

## Concepts

### Advantages

- Capacity grows dynamically
- push/pop: o(1)
- retrieval: o(1)

### Disadvantage

- shift/unshift: o(n)
- insert at the middle: o(n) - because it requires to shift subsequent elements.

### Differences (trade-offs) between LinkedList and ArrayList

- LinkedList: allows to enqueue at o(1) because we only use the Node logic instead of indices.
- but, it requires to traverse o(n) for random access.

### Edge cases for ArrayList

- push: when the ArrayList capacity is reached, the ArrayList capacity grows dynamically, it often doubles the capacity, however it needs to copy the existing values into the new array with the new capacity and then add the new value at the end, this coverts the push operation a o(n) time complexity.
