function setupTodoEdit() {
  const editButtons = document.querySelectorAll(".edit-button");

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const li = event.target.closest("li");
      const title = li.querySelector(".todoTitle");
      const form = li.querySelector(".edit-form");
      const input = li.querySelector(".edit-input");
      form.style.display = "block";
      input.value = title.textContent;
    });
  });

  document.querySelectorAll(".edit-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const li = event.target.closest("li");
      const title = li.querySelector(".todoTitle");
      const input = li.querySelector(".edit-input");

      let newTitle = input.value.trim();

      if (newTitle.length > 40) {
        newTitle = newTitle.substring(0, 40);
      }

      title.textContent = newTitle.length > 0 ? newTitle : "Untitled";

      form.style.display = "none";
      input.value = "";
    });
  });

  document.querySelectorAll(".cancel-edit").forEach((button) => {
    button.addEventListener("click", (event) => {
      const li = event.target.closest("li");
      const form = li.querySelector(".edit-form");
      form.style.display = "none";
    });
  });
}

export default setupTodoEdit;
