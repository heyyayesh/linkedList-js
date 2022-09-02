const node = (data = null) => {
  return {
    value: () => data,
    next: null,
  };
};

const linkedList = () => {
  head = null;
  tail = null;

  // Appends a node to the end of the list.
  const append = value => {
    const newNode = node(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      let temp = head;
      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = newNode;
      tail = newNode;
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
    console.log(str);
  };

  return {
    append,
    toString,
    prepend,
  };
};
