
function funcWithThreeParams(a, b, h) {
    if(a <= 0 || b <= 0 || h <= 0) {
        throw "Podano nieprawidłowy parametr";
    }
    let area = a * b;
    let result = funcWithTwoParams(area, h);
    return result;
}

function funcWithTwoParams(area, h) {
    let result = area * h;
    return result;
}

function getResults() {
    try {
        let finalResult = funcWithThreeParams(0, 2, 3);
        console.log(finalResult);
    } catch (e) {
        console.log(e);
    }
}

