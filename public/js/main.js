import { renderEmployees } from "./ui/renderCards.js";
import { setupSidebarToggle } from "./ui/toggleSidebar.js";
import { setupFilterLogic } from "./ui/applyFilters.js";
import { setupResetFilter } from "./ui/resetFilters.js";
import { setupFormSidebar  } from "./ui/handleFormSidebar.js";
import { setupSearchInput } from "./ui/searchEmployees.js";


document.addEventListener("DOMContentLoaded", () => {
  renderEmployees(window.employeeData);
  document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.dataset.id;
    const confirmed = confirm("Are you sure you want to delete this employee?");
    if (confirmed) {
      window.employeeData = window.employeeData.filter(emp => emp.id !== id);
      renderEmployees(window.employeeData);
    }
  }
});

  setupSidebarToggle();
  setupFilterLogic();
  setupResetFilter();
  setupFormSidebar ();
  setupSearchInput();
});

const pageSizeSelect = document.getElementById("pageSizeSelect");

if (pageSizeSelect) {
  pageSizeSelect.value = window.pagination.size;

  pageSizeSelect.addEventListener("change", (e) => {
    const size = parseInt(e.target.value, 10);
    window.pagination.size = size;
    renderEmployees(window.employeeData);
  });
}
