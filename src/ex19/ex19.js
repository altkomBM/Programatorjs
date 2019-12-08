class Test {

    static testWhileWithModulo() {
        let value = 0;

        while (value < 10) {
            if (value % 2 === 0) {
                console.log(value);
            }
            value++;
        }

    }


     testWhileWithDoubleIncrease() {
        let value = 0;

        while (value < 10) {
            console.log(value);
            value += 2;
        }

    }
}