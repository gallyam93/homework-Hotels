function rounding(value) {
    var inv = 1.0 / 5;
    return Math.round(value * inv) / inv;
}

let u = rounding(21.5);
console.log(u);