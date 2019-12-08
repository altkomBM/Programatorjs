
function testTypes() {

    var age = 50;

    if (age > 18) {
        console.log("Wiecej niz 18");
    } else if (age === 18) {
        console.log("Równe 18 lat");
    } else {
        console.log("Mniej niż 18 lat");
    }

    var expr = "Mangoes"
    switch (expr) {
        case "Oranges":
            console.log("Oranges are $0.59 a pound.");
            break;
        case "Mangoes":
        case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log("Sorry, we are out of " + expr + ".");
    }

}
