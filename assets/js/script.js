document.addEventListener("DOMContentLoaded", function () {
    
    // Display mobile menu
    const menuItems = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menuIcon');
    const myName = document.getElementById('myName');
    const role = document.getElementById('role');

    menuItems.style.maxHeight = '0px';

    menuIcon.addEventListener('click', () => {
        if (menuItems.style.maxHeight === '0px') {
            myName.style.maxHeight = '0px';
            role.style.maxHeight = '0px';
            setTimeout(() => {
                menuItems.style.maxHeight = '200px';
            }, 500);
        } else {
            menuItems.style.maxHeight = '0px';
            setTimeout(() => {
                if(menuItems.style.maxHeight = '0px') {
                    myName.style.maxHeight = '200px';
                    role.style.maxHeight = '200px';
                }
            }, 500);
        }
    });

    var contentElements = document.querySelectorAll('.navContent');
    var mainContentElements = document.querySelectorAll('.mainContent');

    contentElements.forEach(function (element) {
        element.addEventListener('click', function () {
            showContent(element.id);
        });
    });

    function showContent(contentId) {
        mainContentElements.forEach(function (element) {
            element.style.display = 'none';
        });

        var selectedMainContent = document.getElementById('body_' + contentId);
        if (selectedMainContent) {
            selectedMainContent.style.display = 'block';
        }
    }
    
    var lightThemeElement = document.querySelector('.lightTheme');
    var darkThemeElement = document.querySelector('.darkTheme');
    var gitHubElement = document.querySelector('.gitHub');

    lightThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#dcd4c7');
        document.documentElement.style.setProperty('--d-t-color', '#0d0d0d');
        menuIcon.style.setProperty('filter', 'brightness(50%) contrast(200%)');
    });

    darkThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#0d0d0d');
        document.documentElement.style.setProperty('--d-t-color', '#f5f5f5');
        menuIcon.style.setProperty('filter', 'invert(100%)');
    });

    gitHubElement.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(`https://github.com/sunrah27`, `_blank`);
    });
});
