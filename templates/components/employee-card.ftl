<div class="employee-card">
  <div class="info">
    <p><strong>${empData.firstName} ${empData.lastName}</strong></p>
    <p><strong>Email:</strong> ${empData.email}</p>
    <p><strong>Department:</strong> ${empData.department}</p>
    <p><strong>Role:</strong> ${empData.role}</p>
  </div>
  <div class="actions">
    <button class="edit-btn" data-id="${empData.id}">Edit</button>
    <button class="delete-btn" data-id="${empData.id}">Delete</button>
  </div>
</div>
