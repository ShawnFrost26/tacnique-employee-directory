import { renderEmployees } from "./renderCards.js";

export function setupFormSidebar() {
  const addBtn = document.getElementById("addBtn");
  const formSidebar = document.getElementById("formSidebar");
  const cancelBtn = document.getElementById("cancelFormBtn");
  const form = document.getElementById("employeeForm");
  const submitBtn = document.getElementById("submitFormBtn");

  let editingEmployeeId = null;

  // Open sidebar for Add
  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    form.reset();
    editingEmployeeId = null;
    formSidebar.classList.add("show");
    submitBtn.textContent = "Add";
  });

  // Cancel
  cancelBtn.addEventListener("click", () => {
    formSidebar.classList.remove("show");
  });

  // Outside click
  document.addEventListener("click", (e) => {
    if (
      formSidebar.classList.contains("show") &&
      !formSidebar.contains(e.target) &&
      e.target !== addBtn
    ) {
      formSidebar.classList.remove("show");
    }
  });

  formSidebar.addEventListener("click", (e) => e.stopPropagation());

  // Handle submit (Add or Edit)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emp = {
      id: editingEmployeeId || Date.now().toString(),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      department: document.getElementById("department").value.trim(),
      role: document.getElementById("role").value.trim(),
    };

    if (!emp.firstName || !emp.lastName || !emp.email || !emp.department || !emp.role) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingEmployeeId) {
      // Edit
      const index = window.employeeData.findIndex(e => e.id === editingEmployeeId);
      if (index !== -1) {
        window.employeeData[index] = emp;
      }
    } else {
      // Add
      window.employeeData.push(emp);
    }

    form.reset();
    editingEmployeeId = null;
    formSidebar.classList.remove("show");
    renderEmployees(window.employeeData);
  });

  // 📌 Global handler for edit buttons
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      const id = e.target.dataset.id;
      const emp = window.employeeData.find(emp => emp.id === id);
      if (emp) {
        editingEmployeeId = emp.id;
        document.getElementById("firstName").value = emp.firstName;
        document.getElementById("lastName").value = emp.lastName;
        document.getElementById("email").value = emp.email;
        document.getElementById("department").value = emp.department;
        document.getElementById("role").value = emp.role;
        submitBtn.textContent = "Update";
        formSidebar.classList.add("show");
      }
    }
  });
}
