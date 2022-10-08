// 1. Select all elements I will need
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// 2. When I submit the form add a new item to the list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Create a new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  // 2. Add that item to the list
  list.appendChild(item);

  // 3. Clear Input
  input.value = "";

  // 4. Setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
