import { renderEmployees } from "./renderCards.js";

export function setupResetFilter() {
  const resetBtn = document.getElementById("resetFilters");

  resetBtn.addEventListener("click", () => {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";

    renderEmployees(window.employeeData);
  });
}
