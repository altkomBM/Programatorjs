function testBuiltException() {
    // let a = 2;

    try{
        console.log("Poczatek try");
        console.log(a); // Tutaj zostanie rzucony wyjatek
        // Linie po wyjatku w bloku try nie sa wykonywane
        console.log("Dalsza czesc try");
    } catch (e) {
        // Blok kodu wykonywany w przypadku rzucenia wyjatku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        // Blok kodu wykonywany niezaleznie od tego czy pojawi
        // sie wyjatek czy tez nie
        console.log("Sekcja finally");
    }

}


function testOwnException() {
    try{
        console.log("Poczatek try");
        throw new Error("Wyjatek w linii 20");// Wlasny wyjatek
        console.log("Dalsza czesc try");
    } catch (e) {
        console.log(e);
        console.log("Koniec catch");
    } finally {
        console.log("Sekcja finally");
    }

}
