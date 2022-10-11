"use strict";
let employee = {
    id: 0,
    name: "abeer",
    retire: (date) => {
        console.log(date);
    }
};
function kgsToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight);
}
let TextBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let weigth = 'lbs';
function great(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("hola");
}
great(null);
//# sourceMappingURL=index.js.map