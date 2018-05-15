var bogosort = require('bogosort');

function bogo() {
    var sorted = bogosort.measure([8, 3, 99, -12, -4, 8, 9, 11, 183, 12, 33]);
    console.log('Sorted collection: ', sorted.result);
    console.log('Rounds it took: ', sorted.rounds);
    return sorted.rounds
}

do {
    var rounds = bogo();
} while (rounds > 10000)
