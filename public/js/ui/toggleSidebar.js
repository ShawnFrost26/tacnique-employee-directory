export function setupSidebarToggle() {
  const filterBtn = document.getElementById("filterBtn");
  const sidebar = document.getElementById("filterSidebar");

  filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("show");
  });

  // Hide sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("show") &&
      !sidebar.contains(e.target) &&
      e.target !== filterBtn
    ) {
      sidebar.classList.remove("show");
    }
  });

  // Prevent sidebar itself from triggering document click
  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
