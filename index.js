function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //nested is ID target is class
  return document.querySelector(`#nested .target`);
}

function deepestChild() {
  let node = document.getElementById("grand-node");
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  const rankedList = document.getElementsByClassName("ranked-list")

  for(const item of rankedList) {
    item.innerHTML = `${parseInt(item.innerHTML) + n}`;
  }
}
