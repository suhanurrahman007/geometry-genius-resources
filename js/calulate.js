// Input Flied Values 
function getInputFlied(inputId) {
    const inputFlied = document.getElementById(inputId)
    const inputFliedStringValue = inputFlied.value
    const inputFliedValue = parseFloat(inputFliedStringValue)
    inputFlied.value = ""
    return inputFliedValue;
}

// Iteams Value set in Area
function setArea(areaId, area) {
    const areaFlied = document.getElementById(areaId)
    areaFlied.innerText = area;
}

// Area Calculation items added all
function setItems(iteamsId, element, items) {
    const areaFlied = document.getElementById(iteamsId)
    const newElement = document.createElement("p")
    newElement.classList.add("hudai")
    newElement.innerHTML = `
        <div class="flex justify-between space-x-3 items-center" >
            <h2 class="font-bold text-md">${element}</h2>
            <p class="text-xs">${items}cm<sup>2</sup></p >
            <button class ="btn btn-xs text-xs bg-fuchsia-950 hover:bg-indigo-950"> Convert </button>
        </div>
    `
    areaFlied.appendChild(newElement)
}

// Triangle Calculate Area 
function triangleCalculateArea() {
    const baseFlied = getInputFlied("base-flied")
    const hightFlied = getInputFlied('hight-flied')

    if (isNaN(baseFlied) || isNaN(hightFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const triangleArea = 0.5 * baseFlied * hightFlied;
    setArea("triangle-area", triangleArea);
    setItems("geometry-genius-items", "Triangle", triangleArea)
}

// Rectangle Calculate Area 
function rectangleCalculateArea() {
    const widthFlied = getInputFlied("width-Flied")
    const langthFlied = getInputFlied('langth-Flied')

    if (isNaN(widthFlied) || isNaN(langthFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const rectangleArea = widthFlied * langthFlied;
    setArea("rectangle-area", rectangleArea);
    setItems("geometry-genius-items", 'Rectangle', rectangleArea)

}

// Parallelogram Calculate Area 
function parallelogramCalculateArea() {
    const widthFlied = getInputFlied("parallelogram-width-Flied")
    const langthFlied = getInputFlied('parallelogram-langth-Flied')

    if (isNaN(widthFlied) || isNaN(langthFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const parallelogramArea = widthFlied * langthFlied;
    setArea("parallelogram-area", parallelogramArea);
    setItems("geometry-genius-items", 'Parallelogram', parallelogramArea)

}

// Rhombus Calculate Area 
function rhombusCalculateArea() {
    const widthFlied = getInputFlied("rhombus-width-Flied")
    const langthFlied = getInputFlied('rhombus-langth-Flied')

    if (isNaN(widthFlied) || isNaN(langthFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const rhombusArea = 0.5 * widthFlied * langthFlied;
    setArea("rhombus-area", rhombusArea);
    setItems("geometry-genius-items", 'Rhombus', rhombusArea)

}

// Pentagon Calculate Area 
function pentagonCalculateArea() {
    const widthFlied = getInputFlied("pentagon-width-Flied")
    const langthFlied = getInputFlied('pentagon-langth-Flied')

    if (isNaN(widthFlied) || isNaN(langthFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const pentagonArea = 0.5 * widthFlied * langthFlied;
    setArea("pentagon-area", pentagonArea);
    setItems("geometry-genius-items", 'Pentagon', pentagonArea)

}

// Ellipse Calculate Area 
function ellipseCalculateArea() {
    const widthFlied = getInputFlied("ellipse-width-Flied")
    const langthFlied = getInputFlied('ellipse-langth-Flied')

    if (isNaN(widthFlied) || isNaN(langthFlied)) {
        alert("Data is Not Valid");
        return;
    }

    const ellipseArea = 3.14 * widthFlied * langthFlied;
    setArea("ellipse-area", ellipseArea);
    setItems("geometry-genius-items", 'Ellipse', ellipseArea)

}