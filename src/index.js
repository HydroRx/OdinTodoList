import "./styles.css";
import setupTodoEdit from "./modules/editItem.js";
import todoAddItem from "./modules/addItem.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTodoEdit();
  todoAddItem();
});
