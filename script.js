window.onload = function () {
    var svgImage = document.getElementById("svgImage");
    var shapes = document.getElementById("image");
    var colors = document.getElementById("colors");
    var chosenColor = document.getElementById("chosenColor");
    var shape = image.children;
    console.log(shape.length);

    function getColorsFromImage() {
        for (var i = 0; i < shape.length; i++) {
            var colorDiv = document.createElement('div');
            colorDiv.classList.add("color");
            colorDiv.style.backgroundColor = shape[i].style.fill;
            colors.appendChild(colorDiv);
        }
    }

    getColorsFromImage();

    var divChosenColor = document.createElement("div");
    divChosenColor.classList.add("chosenColor");
    chosenColor.appendChild(divChosenColor);

    /* Funkcja ponizej ustawia kolor w kliknietym elemencie na obrazku svg */
    svgImage.onclick = async function (event) {
        var clickedElement = event;

        clickedElement.target.style.fill = divChosenColor.style.backgroundColor;
    }
    
    /* Funkcja ponizej sczytuje klikniety kolor i ustawia go jako wybrany kolor */
    colors.onclick = async function (event) {
        var clickedElement = event;

        divChosenColor.style.backgroundColor = clickedElement.target.style.backgroundColor;
    }
}