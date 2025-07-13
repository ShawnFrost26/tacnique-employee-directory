import { renderEmployees } from "./renderCards.js";

export function setupSearchInput() {
  const input = document.getElementById("searchInput");

  input.addEventListener("input", () => {
    const searchTerm = input.value.trim().toLowerCase();

    const results = window.employeeData.filter(emp => {
      return (
        emp.firstName.toLowerCase().includes(searchTerm) ||
        emp.lastName.toLowerCase().includes(searchTerm) ||
        emp.email.toLowerCase().includes(searchTerm)
      );
    });

    window.filteredResults = results; // save current filtered state
    renderEmployees(results);
  });
}
