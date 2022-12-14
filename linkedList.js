const node = (data = null) => {
  return {
    value: () => data,
    next: null,
  };
};

const linkedList = () => {
  first = null;

  // Appends a node to the end of the list.
  const append = value => {
    const newNode = node(value);

    if (first === null) first = newNode;
    else {
      let temp = first;
      while (temp.next !== null) temp = temp.next;

      temp.next = newNode;
    }
  };

  // Prepends a node to the start of the list.
  const prepend = value => {
    const newNode = node(value);

    newNode.next = first;
    first = newNode;
  };

  // Prints the list.
  const toString = () => {
    let temp = first;
    let str = '';
    while (temp !== null) {
      str += temp.value() + ' -> ';
      temp = temp.next;
    }
    str += 'NULL';
    return str;
  };

  // Returns the total number of nodes in the list.
  const size = () => {
    let temp = first;
    count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }

    return count;
  };

  // Returns the first node of the list.
  const head = () => first.value();

  // Returns the last node of the list.
  const tail = () => {
    let temp = first;
    while (temp.next !== null) temp = temp.next;
    return temp.value();
  };

  // Pops the last node from the list.
  const pop = () => {
    let temp = first;
    for (let i = 0; i < size() - 2; i++) {
      temp = temp.next;
    }
    const popped = temp.next.value();
    delete temp.next;
    temp.next = null;
    return popped;
  };

  // Returns the node at the given index.
  const at = index => {
    let temp = first;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.value();
  };

  // Returns wheather a node is present in the list.
  const contains = value => {
    let temp = first;
    while (temp !== null) {
      if (temp.value() === value) return true;
      temp = temp.next;
    }
    return false;
  };

  // Returns the index of the specified node.
  const find = value => {
    let temp = first;
    for (let i = 0; i < size(); i++) {
      if (at(i) === value) return i;
    }
    return null;
  };

  // Inserts node at the given index.
  const insertAt = (value, index) => {
    let temp = first;
    for (let i = 0; i < index - 1; i++) temp = temp.next;
    const newNode = node(value);
    newNode.next = temp.next;
    temp.next = newNode;
  };

  // Removes node at given index.
  const removeAt = ind => {
    let temp = first;
    for (let j = 0; j < ind - 1; j++) temp = temp.next;
    const temp2 = temp.next;
    temp.next = temp2.next;
    const removed = temp2.value();
    delete temp2;
    return removed;
  };

  return {
    append,
    toString,
    prepend,
    size,
    head,
    tail,
    pop,
    at,
    contains,
    find,
    insertAt,
    removeAt,
  };
};

const list = linkedList();
list.append(400);
list.append(500);
list.prepend(300);
list.prepend(200);
list.prepend(100);
console.log(list.toString());
console.log('Size: ', list.size());
console.log('Tail: ', list.tail());
console.log('Head: ', list.head());
console.log('Popped: ', list.pop());
console.log(list.toString());
console.log('At index 2: ', list.at(2));
console.log('List contains 300: ', list.contains(300));
console.log('List contains 3000: ', list.contains(3000));
console.log('find 300: ', list.find(300));
console.log('find 3000: ', list.find(3000));
list.insertAt(350, 3);
console.log(list.toString());
console.log('Removed', list.removeAt(3));
console.log(list.toString());
