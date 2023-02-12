function filterArray(arrayOne, arrayTwo) {
    var arrayOnefilter = [];
    var arrayOneEnd = [];
    var arrayTwofilter = [];
    var arrayTwoEnd = [];
    let arrayThree = [];

    for (var i=0; i<arrayOne.length; i++){
        if (arrayOnefilter[arrayOne[i]]){
            arrayOnefilter[arrayOne[i]]++;
            arrayOneEnd.push(arrayOne[i]);
        } else {
            arrayOnefilter[arrayOne[i]] = 1;
        }
    }
    let filteredArrOne = arrayOneEnd.filter((item, index) => {
        return arrayOneEnd.indexOf(item) === index;
    });

    for (var i=0; i<arrayTwo.length; i++){
        if (arrayTwofilter[arrayTwo[i]]){
            arrayTwofilter[arrayTwo[i]]++;
            arrayTwoEnd.push(arrayTwo[i]);
        } else {
            arrayTwofilter[arrayTwo[i]] = 1;
        }
    }
    let filteredArrTwo = arrayTwoEnd.filter((item, index) => {
        return arrayTwoEnd.indexOf(item) === index;
    });

    for (let number of filteredArrOne) {
        if (filteredArrTwo.includes(number)) {
            arrayThree.push(number);
        }
    }
    return arrayThree;
}

let arrayOne = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let arrayTwo = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
let startFunction = filterArray(arrayOne, arrayTwo);
console.log(startFunction);
