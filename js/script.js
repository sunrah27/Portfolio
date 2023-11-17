document.addEventListener("DOMContentLoaded", function () {
    var contentElements = document.querySelectorAll('.content');
    var mainContentElements = document.querySelectorAll('.maincontent');

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
});
