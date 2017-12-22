"use strict";
let garage = [
    {
        "make": "Ford",
        "model": "Focus",
        "reg": "EO02 BYT"
    }
];

function addToGarage() {
    let make = document.getElementById("txtMake");
    let model = document.getElementById("txtModel");
    let reg = document.getElementById("txtReg");

    garage.push(vehicleMaker(make.value, model.value, reg.value));

    make.value = "";
    model.value = "";
    reg.value = "";
}

function removeFromGarage() {
    let reg2 = document.getElementById("txtReg");
    let infoPara = document.getElementById("infoPara");

    let indexed = garage.findIndex(a => a.reg === reg2.value);

    if (indexed != -1) {
        garage.splice(indexed, 1);
        console.log(reg2.value);
        infoPara.innerHTML = "Object has been removed";
    } else {
        infoPara.innerHTML = "No object was removed";
    }
    reg2.value = "";
}

function addFault() {
    let reg = document.getElementById("regFault");
    let faultToAdd = document.getElementById("faultToAdd");
    let indexed = garage.findIndex(a => a.reg === reg.value);

    if (!indexed.failts) {
        indexed.faults = [];
    }
    indexed.faults.push(faultToAdd);
}

function getBill() {

}

function vehicleMaker(make, model, reg) {
    let newVehicle = {};
    newVehicle.make = make;
    newVehicle.model = model;
    newVehicle.reg = reg;
    return newVehicle;
}

function outputContents() {
    if (document.getElementById("table")) {
        document.getElementById("table").remove();
    }

    let col = [];
    for (let i = 0; i < garage.length; i++) {
        for (let key in garage[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    let table = document.createElement("table");
    table.setAttribute("id", "table");
    let tableRow = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let tableHeader = document.createElement("th");
        tableHeader.innerHTML = col[i];
        tableRow.appendChild(tableHeader);
    }

    for (let i = 0; i < garage.length; i++) {

        tableRow = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tableRow.insertCell(-1);
            tabCell.innerHTML = garage[i][col[j]];
        }
    }

    var divContainer = document.getElementById("info");
    divContainer.appendChild(table);
}

/*function writeToFile() {
    let json = JSON.stringify(garage);

    var fs = require('fs');
    fs.writeFile("garage.json", json, "utf8", callback);

}*/