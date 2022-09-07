function randInt(a, b) {
    // Generate random integer in [a, b], including both end points.
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function randChoice(a) {
    // Generate random element from array 'a'.
    return a[randInt(0, a.length - 1)];
}

function randString(len) {
    // Generate random string of specified length.
    let s = "";
    for (let i = 0; i < len; i++) {
        s += String.fromCharCode(randInt(32, 126));
    }
    return s;
}

function randFloat(a, b, upto=2) {
    // Generate random float in [a, b].
    // upto represents the number of decimal places.
    return (Math.random() * (b - a) + a).toFixed(upto);
}

