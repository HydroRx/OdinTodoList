import setupEditItem from "./editItem.js";

function todoAddItem() {
  const addButton = document.querySelector(".add-button");
  const addForm = document.querySelector(".add-form");
  const titleInput = document.querySelector(".titleInput");
  const descInput = document.querySelector(".descInput");
  const cancelAddButton = document.querySelector(".cancel-add");
  const listContainer = document.querySelector(".list-container ul");

  addButton.addEventListener("click", () => {
    addForm.classList.toggle("hidden");
    titleInput.value = "";
    descInput.value = "";
  });

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newItem = document.createElement("li");
    newItem.innerHTML = `
        <div>
          <h2 class="todoTitle">${titleInput.value}</h2>
          <p class="listItemDescription hidden">${descInput.value}</p>
          <form class="edit-form hidden">
            <input type="text" class="edit-input" value="${titleInput.value}" maxlength="40" />
            <button type="submit">Save</button>
            <button type="button" class="cancel-edit">Cancel</button>
          </form>
        </div>
        <div class="buttonsDiv">
          <button class="edit-button">Edit</button>
          <button>V</button>
          <button>X</button>
        </div>
      `;

    listContainer.appendChild(newItem);

    setupEditItem();

    addForm.classList.add("hidden");
    titleInput.value = "";
    descInput.value = "";
  });

  cancelAddButton.addEventListener("click", () => {
    addForm.classList.add("hidden");
    titleInput.value = "";
    descInput.value = "";
  });
}

export default todoAddItem;
