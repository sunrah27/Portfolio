document.addEventListener("DOMContentLoaded", function () {

    new JParticles.Particle('#demo', {
        color: '#505050',
        lineShape: 'spider',
        range: 2000,
        proximity: 100,
        parallax: false,
    })
    
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
            var contentFileName = 'assets/' + contentId + '.html';
            fetch(contentFileName)
                .then(response => response.text())
                .then(data => {
                    selectedMainContent.innerHTML = data;
                    selectedMainContent.style.display = 'block';
                })
                .catch(error => console.error('Error fetching content:', error));
        }
    }
    
    var lightThemeElement = document.querySelector('.lightTheme');
    var darkThemeElement = document.querySelector('.darkTheme');

    lightThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#f5f5f5');
        document.documentElement.style.setProperty('--d-t-color', '#0d0d0d');
    });

    darkThemeElement.addEventListener('click', function () {
        document.documentElement.style.setProperty('--d-bg-color', '#0d0d0d');
        document.documentElement.style.setProperty('--d-t-color', '#f5f5f5');
    });
});
