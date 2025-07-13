export function renderEmployees(data) {
  const container = document.querySelector(".employee-grid");
  container.innerHTML = "";

  const pageSize = window.pagination.size || 10;
  const toRender = data.slice(0, pageSize);

  if (!toRender.length) {
    container.innerHTML = "<p>No employees found.</p>";
    return;
  }

  toRender.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";

    card.innerHTML = `
      <div class="info">
        <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
      </div>
      <div class="actions">
        <button class="edit-btn" data-id="${emp.id}">Edit</button>
        <button class="delete-btn" data-id="${emp.id}">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });
}
