const node = (data = null) => {
  return {
    value: () => data,
    next: null,
  };
};

const linkedList = () => {
  head = null;

  // Appends a node to the end of the list.
  const append = value => {
    const newNode = node(value);

    if (head === null) head = newNode;
    else {
      let temp = head;
      while (temp.next !== null) temp = temp.next;

      temp.next = newNode;
    }
  };

  // Prepends a node to the start of the list.
  const prepend = value => {
    const newNode = node(value);

    newNode.next = head;
    head = newNode;
  };

  // Prints the list.
  const toString = () => {
    let temp = head;
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
    let temp = head;
    count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }

    return count;
  };

  // Returns the last node of the list.
  const tail = () => {
    let temp = head;
    while (temp.next !== null) temp = temp.next;
    return temp.value();
  };

  return {
    append,
    toString,
    prepend,
    size,
    tail,
  };
};
