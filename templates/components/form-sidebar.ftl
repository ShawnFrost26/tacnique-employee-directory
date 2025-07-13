<div id="formSidebar" class="form-sidebar hidden">
  <h3>Add Employee</h3>
  <form id="employeeForm">
    <input type="hidden" id="empId" />

    <label>First Name:</label>
    <input type="text" id="firstName" required />

    <label>Last Name:</label>
    <input type="text" id="lastName" required />

    <label>Email:</label>
    <input type="email" id="email" required />

    <label>Department:</label>
    <input type="text" id="department" required />

    <label>Role:</label>
    <input type="text" id="role" required />

    <div class="form-sidebar-actions">
      <button type="button" id="cancelFormBtn">Cancel</button>
      <button type="submit" id="submitFormBtn">Add</button>
    </div>
  </form>
</div>
