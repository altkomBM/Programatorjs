
function countSquareAndCube(value) {
    let square = value ** 2;
    let cube = value ** 3;

    console.log(square);
    console.log(cube);
}



function countAndReturnPower(value, power) {
    return value ** power;
}

function displayResults() {
    console.log(countAndReturnPower(3, 2));
    console.log(countAndReturnPower(3, 3));
    console.log(countAndReturnPower(3, 10));
}

