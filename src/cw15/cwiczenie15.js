function switchStat() {

    let temp = 20;
    let coldThreshold = 15;

    switch (true) {
        case temp >= coldThreshold:
            console.log("Za oknem jest ciepło");
            break;
        default :
            console.log("Za oknem jest zimno");
    }

}
