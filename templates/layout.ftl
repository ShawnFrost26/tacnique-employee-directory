<#macro layout>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title!''}</title>
 <link rel="stylesheet" href="../public/css/main.css" />
  <link rel="stylesheet" href="../public/css/card.css" />
  <link rel="stylesheet" href="../public/css/controls.css" />
  <link rel="stylesheet" href="../public/css/sidebar.css" />
  <link rel="stylesheet" href="../public/css/form.css" />
</head>
<body>

  <header>
    <h1>Employee Directory</h1>
  </header>

  <main>
    <#nested>
  </main>
  <script src="../public/js/data.js"></script>
  <script type="module" src="../public/js/main.js"></script>


</body>
</html>
</#macro>
