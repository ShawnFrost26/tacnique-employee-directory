<div id="employeeSidebar" class="employee-sidebar hidden">
  <h3 id="formTitle">Add Employee</h3>

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

    <div class="employee-actions">
      <button type="button" id="cancelEmployee">Cancel</button>
      <button type="submit" id="saveEmployee">Add</button>
    </div>
  </form>
</div>
