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

  return {
    append,
    toString,
    prepend,
    size,
    head,
    tail,
    pop,
  };
};

const list = linkedList();
list.append(400);
list.append(500);
list.prepend(300);
list.prepend(200);
list.prepend(100);
console.log(list.toString());
console.log(list.size());
console.log(list.tail());
console.log(list.head());
console.log('Popped', list.pop());
console.log(list.toString());
