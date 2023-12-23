function randomizeListWithCriteria() {
  const listItems = [
    { id: "Q366G1", text: "Header 1" },
    { id: "Q366C1", text: "text 1" },
    { id: "Q366C2", text: "text 2" },
    { id: "Q366C3", text: "text 3" },
    { id: "Q366C4", text: "text 4" },
    { id: "Q366G2", text: "Header 2" },
    { id: "Q366C5", text: "text 5" },
    { id: "Q366C6", text: "text 6" },
    { id: "Q366C7", text: "text 7" },
    { id: "Q366C8", text: "text 8" },
    { id: "Q366C9", text: "text 9" },
    { id: "Q366C10", text: "text 10" },
    { id: "Q366C11", text: "text 11" },
    { id: "Q366G3", text: "Header 3" },
    { id: "Q366C12", text: "text 12" },
    { id: "Q366C13", text: "text 13" },
    { id: "Q366C14", text: "text 14" },
    { id: "Q366C15", text: "text 15" },
    { id: "Q366C16", text: "text 16" },
    { id: "Q366C17", text: "text 17" },
    { id: "Q366G4", text: "Header 4" },
    { id: "Q366C18", text: "text 18" },
    { id: "Q366C19", text: "text 19" },
    { id: "Q366C20", text: "text 20" },
  ];

  const shuffledList = shuffleArray(listItems);

  return shuffledList;
}
function shuffleArray(array) {
  // Create a clone of array
  const shuffledArray = cloneArray(array);

  while (!isShuffled(shuffledArray)) {
    swapRandomElements(shuffledArray);
  }

  return shuffledArray;
}

function cloneArray(array) {
  const clonedArray = [];
  for (const element of array) {
    clonedArray.push({ ...element });
  }
  return clonedArray;
}

function isShuffled(array) {
  return array.some(
    (element, index) =>
      index === array.findIndex((item) => item.id === element.id)
  );
}
//  swap random elements
function swapRandomElements(array) {
  const index1 = Math.floor(Math.random() * array.length);
  const index2 = Math.floor(Math.random() * array.length);

  if (index1 !== index2) {
    const tempElement = { ...array[index1] };
    array[index1] = { ...array[index2] };
    array[index2] = tempElement;
  }
}

function randomizeAndDisplayList() {
  const randomizedList = randomizeListWithCriteria();
  updateListInDOM(randomizedList);
}

function updateListInDOM(list) {
  const responseList = document.getElementById("js-list");

  // Clear existing list items
  responseList.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.id = item.id;
    li.textContent = item.text;
    responseList.appendChild(li);
  });
}

// display list on page load
window.onload = randomizeAndDisplayList;

const randomizedList = randomizeListWithCriteria();
console.log(randomizedList);
