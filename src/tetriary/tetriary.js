
function testTetriaryTest() {
    let wartosc = 15;

    let wynik1 = wartosc > 20 ? "Wartosc jest wieksza od 20" :
        "Wartosc mniejsza lub rowna 20";


    let wynik2 = wartosc > 20 ?
        (wartosc < 30 ? "Wieksze od 20 i 30"
            : "Wieksze od 30")
        : "Wartosc mniejsza lub rowna 20";

    console.log(wynik1);
    console.log(wynik2);

}
