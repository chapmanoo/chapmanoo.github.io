"use strict";

let num1 = 12;

console.log(num1);

function sqrNum(n1) {
    return n1 * n1;
}

function sum(n1, n2, n3) {
    return n1 + n2 + n3;
}

function ageUp() {
    person1.age++;
}

function getAge() {
    var field = document.getElementById('fillbox');
    field.value = person1.age;
}

function makePerson() {

    let person2 = {};

    var field1 = document.getElementById('name_box');
    var field2 = document.getElementById('age_box');
    var field3 = document.getElementById('occupation_box');

    if (field1) {
        person2.name = field1.value;
    }
    if (field2) {
        person2.age = field2.value;
    }
    if (field3) {
        person2.occupation = field3.value;
    }

    var field = document.getElementById('string_box');
    field.value = "Name: " + person2.name + ", Age: " + person2.age + ", Occupation: " + person2.occupation;

}

console.log(sqrNum(num1));
console.log(sum(1, 2, 3));

let person1 = {
    name: "Owen",
    age: 23,
    occupation: "Trainee"
};



console.log(person1);

person1.name = "Owen C";
person1.occupation = "Consultant";
person1.hobby = "Skiing";

console.log(person1);


let string1 = 'He said "My Name is Elliot"';
//alert(string1.toUpperCase());
string1 = "15";
let concatVar = string1.concat(num1);
//alert(concatVar);

//---Arrays 1 / Strings 3
let myArray = ['red', 'green', 'blue'];

console.table(myArray);

myArray[myArray.length] = 'orange';

console.table(myArray);

myArray.splice(myArray.length - 1, 1);

console.table(myArray);
//---

//---Conditionals 1
if (person1.age > 20) {
    if (person1.age < 40) {
        console.log("Person is within age range!");
    } else {
        console.log("Person is 40 or over, out of age range!");
    }
} else {
    console.log("Person is 20 or under, out of age range!");
}
//---

//---Iteration 1
for (let i = 1; i <= 10; i++) {
    //---Iteration 2
    if (i % 2 === 0) {
        console.log(i);
    }
    //---
}
//---

//---Iteration 3 - FizzBuzz /w Custom values
function fizzbuzz() {
    let fizzword = document.getElementById('fizzword').value;
    let buzzword = document.getElementById('buzzword').value;
    let max = document.getElementById('maxCount').value;

    for (let j = 1; j <= +max; j++) {
        if (j % 3 === 0) {
            if (j % 5 === 0) {
                console.log(fizzword.concat(buzzword));
            } else {
                console.log(fizzword);
            }
        } else if (j % 5 === 0) {
            console.log(buzzword);
        } else {
            console.log(j);
        }
    }
}
//---

//---Iteration 4
function reachOne() {
    let value = document.getElementById('maxCount').value;

    console.log("Starting at: " + value);
    while (value != 1) {
        if (value % 3 === 0) {
            console.log(value / 3 + " /3");
            value = value / 3;
        } else if ((value + 1) % 3 === 0) {
            console.log(value + 1 + " + 1");
            value++;
        } else if ((value - 1) % 3 === 0) {
            console.log(value - 1 + " - 1");
            value--;
        }
    }
}
//---

//---Strings 4
function tripleFinder() {
    let counter = 0;
    let stringValue = document.getElementById('tripleString').value;

    for (let _i = 0; _i < stringValue.length; _i++) {
        let charValueAt = stringValue.charAt(_i);
        if (stringValue.charAt(_i + 1) === charValueAt) {
            if (stringValue.charAt(_i + 2) === charValueAt) {
                counter++;
            }
        }
    }

    console.log(counter);
}
//---

//---DOM 1
function createParagraph() {
    if (document.getElementById("para1")) { //find by id
        document.getElementById("para1").remove(); //if already exists, remove it
    }

    let para = document.createElement("p"); //create new element
    para.setAttribute("id", "para1"); //assign new element id attribute

    let stringFromparaText = document.getElementById("paraText").value; //recieve string from text field
    let node = document.createTextNode(stringFromparaText); //creates text node with input string

    para.appendChild(node); //append node to the paragraph

    let element = document.getElementById("div1"); //find part of document to append paragraph onto
    element.appendChild(para); //append paragraph

    element = document.getElementById("div1>p1");
    element.innerHTML = "Look, now there is another paragraph!";
}
//---


function getSuperHeroes() {
    if (document.getElementById("heroesP")) { //find by id
        document.getElementById("heroesP").remove(); //if already exists, remove it
    }

    let heroPara = document.createElement("p");
    heroPara.setAttribute("id", "heroesP");

    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let superHeroes = request.response;
        let textToAdd;

        for (var _key in superHeroes) {
            if (superHeroes.hasOwnProperty(_key)) {
                if (_key === "members") {
                    for (let _k = 0; _k < superHeroes.members.length; _k++) {
                        textToAdd = document.createTextNode("MEMBER: ");
                        heroPara.appendChild(textToAdd);
                        textToAdd = document.createTextNode("Name: " + superHeroes.members[_k].name + ", Age: " + superHeroes.members[_k].age + ", Identity: " + superHeroes.members[_k].secretIdentity + " POWERS: ");
                        heroPara.appendChild(textToAdd);

                        //superHeroes.members[_k].powers.forEach(a => textToAdd += a + ", ");
                        //heroPara.appendChild(textToAdd);
                        for (let _l = 0; _l < superHeroes.members[_k].powers.length; _l++) {
                            textToAdd = document.createTextNode(superHeroes.members[_k].powers[_l] + ", ");
                            heroPara.appendChild(textToAdd);
                        }
                    }
                } else {
                    textToAdd = document.createTextNode(_key + ": " + superHeroes[_key] + ", ");
                    heroPara.appendChild(textToAdd);
                }
            }
        }
        let divToAppendTo = document.getElementById("div2");
        divToAppendTo.appendChild(heroPara);
        console.log(superHeroes);
    }

}

function kingSearch() {
    let searchValue = document.getElementById("searchValue").value;
    if (document.getElementById("monarchs")) { //find by id
        document.getElementById("monarchs").remove(); //if already exists, remove it
    }

    let monarchsDiv = document.createElement("div");

    monarchsDiv.setAttribute("id", "monarchs");

    document.getElementById("div4").appendChild(monarchsDiv);

    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let kings = request.response;

        let results = kings.filter(a => a.nm.toLowerCase().includes(searchValue.toLowerCase()) ||
                                     a.cty.toLowerCase().includes(searchValue.toLowerCase()) || 
                                     a.hse.toLowerCase().includes(searchValue.toLowerCase()) || 
                                     a.yrs.toLowerCase().includes(searchValue.toLowerCase()));
        console.log(results);
        
        var col = [];
        for (var i = 0; i < results.length; i++) {
            for (var key in results[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        var table = document.createElement("table");
        var tr = table.insertRow(-1);                   

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < results.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = results[i][col[j]];
            }
        }

        var divContainer = document.getElementById("div4");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }

}