let citiesStr = "";

function changeArray(cities) {
    for (let city in cities) {
        if (parseInt(city) === (cities.length - 1)) {
            citiesStr = citiesStr + cities[city] + '.';
        } else {
            citiesStr = citiesStr + cities[city] + ',' + ' ';
        }
    }
}

let array = ['Москва', 'Казань', 'Иваново', 'Санкт-Петербург', 'Воронеж'];

console.log(array);
changeArray(array);
console.log(citiesStr);