function comp(value) {
    let valueCase = value % 10;
    if (valueCase === 1) {
        return value + " компьютер"
    } 
    else if (valueCase >= 2 && valueCase <= 4) {
        return value + " компьютера"
    } 
    else if ((valueCase >= 5 && valueCase <= 9) || valueCase === 0){
        return value + " компьютеров"
    }
}

let startFunction = comp(122);
console.log(startFunction);