function primeNumber(value) {
    let primeCheck = 0;

    for (let step = 2; step < value; step++) {
        let numberCheck = value % step;
        if (numberCheck === 0) {
            primeCheck = 1;
            return 'Число ' + value + ' не является простым'
        }
    }
    if (primeCheck === 0) {
        return 'Число ' + value + ' простое'
    }
};

for (i = 1; i < 101; i++) {
    let startFunction = primeNumber(i);
    console.log(startFunction);
}