function multiplication (value){
    let arr1 = [];
    for (let i = 1; i <= value; i++) {
        let arr2 = [];
        for (let o = 1; o <= value; o ++) {
            let x = i * o;
            arr2[o] = x;
        }
        arr1[i] = arr2;
    }
    return arr1;
}

let startFunction = multiplication(10);
console.table(startFunction);