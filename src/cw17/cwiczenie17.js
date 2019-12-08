
function testWhile2() {

    let bound = 5;
    let value = 0;
    let counter = 0;

    while (value <= bound) {
        counter += value;
        // counter = counter + value;
        value++;
        console.log(counter);
    }

}
