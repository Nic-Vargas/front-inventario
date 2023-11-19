function moveCircle(element) {
    var circle = document.getElementById('movingCircle');
    var rect = element.getBoundingClientRect();
    var offsetY = rect.top + window.scrollY + rect.height / 2 - circle.clientHeight / 2;

    // Desplaza el círculo hacia la derecha
    circle.style.transform = 'translateX(' + (rect.right + window.scrollX + 10) + 'px) translateY(' + offsetY + 'px)';

    // Resetea la posición después de un breve retraso (500 ms)
    setTimeout(function() {
        circle.style.transform = 'translateX(0) translateY(' + offsetY + 'px)';
    }, 500);
}