function testForLoopWithModulo() {
    for (let value = 0; value < 10; value++) {
        if (value % 2 === 0) {
            console.log(value);
        }
    }
}

function testWhileWithDoubleIncrease() {
    for (let value = 0; value < 10; value += 2) {
        console.log("");
        console.log(value);
    }
}
