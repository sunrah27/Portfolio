document.addEventListener("DOMContentLoaded", function () {
    
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
    });

    darkThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#0d0d0d');
        document.documentElement.style.setProperty('--d-t-color', '#f5f5f5');
    });

    gitHubElement.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(`https://github.com/sunrah27`, `_blank`);
    });
});
