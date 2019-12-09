
function ifStat() {

    let temp = 20;
    let hotThreshold = 25;
    let coldThreshold = 15;

    if (temp >= hotThreshold) {
        console.log("Za oknem jest bardzo ciepło");
    } else if (temp >= coldThreshold) {
        console.log("Za oknem jest ciepło");
    } else {
        console.log("Za oknem jest zimno");
    }

}
