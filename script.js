window.onload = function () {
    var svgImage = document.getElementById("svgImage");
    var shapes = document.getElementById("image");
    var colors = document.getElementById("colors");
    var chosenColor = document.getElementById("chosenColor");
    var clearColors = document.getElementById('clearColors');
    var resumeColors = document.getElementById('resumeColors');
    var zoomIn = document.getElementById('zoomIn');
    var zoomOut = document.getElementById('zoomOut');
    var resetZoom = document.getElementById('resetZoom');
    var showImage = document.getElementById('showImage');
    var fullScreenImage = document.getElementById('fullScreenImage');
    var a = 1; var b = 1;
    var colorToReplace;
    var colorTempArray = [];
    var colorBackup = [];
    var shape = shapes.children;
    console.log(colorToReplace);

    /* funkcja pobiera kolory z obrazka SVG i wstawia go do tablicy kolorow. */
    /* Sprawdza tez przed kazdym dodaniem koloru, czy nie ma go juz w tablicy - jesli jest, pomija go */
    function getColorsFromImage() {
        for (var i = 0; i < shape.length; i++) {
            var colorTemp = shape[i].style.fill;
            colorBackup.push(colorTemp);

            if (!(colorTempArray.includes(colorTemp)) && (colorTemp != '')) {
                colorTempArray.push(colorTemp);
                var colorDiv = document.createElement('div');
                colorDiv.classList.add("color");
                colorDiv.style.backgroundColor = colorTemp;
                colors.appendChild(colorDiv);
            }
        }
    }

    getColorsFromImage();

     /* czyszczenie kolorow rysunku do zera, zeby mozna bylo malowac */
    clearColors.onclick = function() {
        for (var i = 0; i < shape.length; i++) {
            shape[i].style.fill = '#fff';
        }
    }

     /* przywrocenie kolorow do stanu poczatkowego */
    resumeColors.onclick = function() {
        for (var i = 0; i < shape.length; i++) {
            shape[i].style.fill = colorBackup[i];
        }
    }

    var divChosenColor = document.createElement("div");
    divChosenColor.classList.add("chosenColor");
    chosenColor.appendChild(divChosenColor);

    /* Funkcja ponizej ustawia kolor w kliknietym elemencie na obrazku svg */
    svgImage.onclick = async function (event) {
        var clickedElement = event;
        if (colorToReplace != null) {
            clickedElement.target.style.fill = colorToReplace;
        } else {
            alert('Wybierz jakis kolor :)');
        }
    }

    /* Funkcja ponizej sczytuje klikniety kolor i ustawia go jako wybrany kolor */
    colors.onclick = async function (event) {
        var clickedElement = event;
        colorToReplace = clickedElement.target.style.backgroundColor;
        divChosenColor.style.backgroundColor = colorToReplace;
        console.log(colorToReplace);
    }

    /* funkcje przyciskow oddalajacych, przyblizajacych i resetujacych obraz */
    zoomIn.onclick = function() {
        console.log(a);
        if (a < 1.8) {
            console.log(a);
            a = a + 0.2;
            b = b + 0.2;
            shapes.style.transform = `scale(${a}, ${b})`;
            shapes.style.transition = "all 0.7s";
        }
    }

    zoomOut.onclick = function() {
        if (a > 1) {
            a = a - 0.2;
            b = b - 0.2;
            shapes.style.transform = `scale(${a}, ${b})`;
            shapes.style.transition = "all 0.7s";
        }
    }

    resetZoom.onclick = function() {
        a = 1;
        b = 1;
        shapes.style.transform = `scale(${a}, ${b})`;
        shapes.style.transition = "all 0.7s";
    }

    showImage.onclick = function() {
        fullScreenImage.style.transform = "translateY(0)";
        fullScreenImage.style.transition = "transform 0.7s";
    }

}