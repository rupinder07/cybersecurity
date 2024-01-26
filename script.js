// Function to toggle submenu visibility
function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);

    // Get all submenus
    var allSubMenus = document.querySelectorAll('.sub-menu');

    // Close all submenus
    allSubMenus.forEach(function (menu) {
        if (menu !== subMenu) {
        menu.style.display = 'none';
        }
    });

    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
  }
  
  // Function to load external content
  function loadExternalContent(targetId, url) {
    var targetElement = document.getElementById(targetId);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        targetElement.innerHTML = xhr.responseText;
      }
    };
  
    xhr.send();
  }
  
  // Additional JavaScript code can be added here
  