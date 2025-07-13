<#import "layout.ftl" as layout>

<#include "components/filter-sidebar.ftl">
<#include "components/form-sidebar.ftl">


<@layout.layout>
  <section class="controls">
    <input type="text" id="searchInput" placeholder="Search by name/email" />
    <button id="filterBtn">Filter</button>
    <button id="addBtn">Add Employee</button>
    <label for="pageSizeSelect">Show:</label>
<select id="pageSizeSelect">
  <option value="10">10</option>
  <option value="25">25</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>

  </section>

  <section class="employee-grid">
    <#list employees as emp>
      <#assign empData = emp>
      <#include "components/employee-card.ftl">
    </#list>
  </section>
</@layout.layout>
