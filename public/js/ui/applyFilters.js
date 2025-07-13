import { renderEmployees } from "./renderCards.js";

export function setupFilterLogic() {
  const applyBtn = document.getElementById("applyFilters");
  const sidebar = document.getElementById("filterSidebar");

  applyBtn.addEventListener("click", () => {
    const fname = document.getElementById("filterFirstName").value.toLowerCase().trim();
    const dept = document.getElementById("filterDepartment").value.toLowerCase().trim();
    const role = document.getElementById("filterRole").value.toLowerCase().trim();

    const filtered = window.employeeData.filter(emp => {
      return (
        (!fname || emp.firstName.toLowerCase().includes(fname)) &&
        (!dept || emp.department.toLowerCase().includes(dept)) &&
        (!role || emp.role.toLowerCase().includes(role))
      );
    });

    renderEmployees(filtered);
    sidebar.classList.remove("show");
  });
}
