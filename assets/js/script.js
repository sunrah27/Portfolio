document.addEventListener("DOMContentLoaded", function () {
    
    new JParticles.Particle('#demo', {
        color: '#505050',
        lineShape: 'sphere',
        range: 200,
        proximity: 100,
        parallax: false,
    })
    
    var contentElements = document.querySelectorAll('.content');
    var mainContentElements = document.querySelectorAll('.maincontent');

    var lightThemeElement = document.querySelector('.lightTheme');
    var darkThemeElement = document.querySelector('.darkTheme');

    contentElements.forEach(function (element) {
        element.addEventListener('click', function () {
            showContent(element.id);
        });
    });

    function showContent(contentId) {
        mainContentElements.forEach(function (element) {
            element.style.display = 'none';
        });

        var selectedMainContent = document.getElementById('body_' + contentId.slice(-1));
        if(selectedMainContent) {
        selectedMainContent.style.display = 'block';
        }
    }

    lightThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#f5f5f5');
        document.documentElement.style.setProperty('--d-t-color', '#0d0d0d');
    });

    darkThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#0d0d0d');
        document.documentElement.style.setProperty('--d-t-color', '#f5f5f5');
    });
});
