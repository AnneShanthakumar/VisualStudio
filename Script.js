document.addEventListener('DOMContentLoaded', function () {
    var element = document.querySelector('h1');

    element.addEventListener('mouseover', function () {
        element.style.color = 'red';
    });

    element.addEventListener('mouseout', function () {
        element.style.color = 'black';
    });
});
