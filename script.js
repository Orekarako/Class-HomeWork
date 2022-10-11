// -----------------------------------  1A ------------------------------
var workers = [{ name: "", age: 0, salary: 0 }], hoursOfWorking = [{ regular: 0, bonus: 0, education: 0 }], sumWorkerSalary = [0];
var employee = /** @class */ (function () {
    function employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return employee;
}());
var makeSalary = /** @class */ (function () {
    function makeSalary(regular, bonus, whichWorker) {
        this.regularHour = regular;
        this.bonusHour = bonus;
        this.WorkerClass = whichWorker;
    }
    return makeSalary;
}());
function details(i) {
    console.log("Name : " + workers[i].name);
    console.log("Age :" + workers[i].age);
    console.log("Regular hours " + hoursOfWorking[i].regular);
    console.log("Bonus hour " + hoursOfWorking[i].bonus);
    console.log("Salary : " + workers[i].salary + "$");
    if (hoursOfWorking[i].education == 2) {
        console.log("Earn 70$ for hour");
        console.log("profession: Engineer");
    }
    else if (hoursOfWorking[i].education == 1) {
        console.log("Earn 40$ for hour");
        console.log("profession: regular");
    }
}
// -----------------------------------  1B ------------------------------
function randomNewEmployee(number) {
    if (number == -1)
        return;
    var randomName = "", randomAge = 0, randomSalary = 0;
    /// new Name random
    for (var i = 1; i <= Math.round(Math.random() * (4 - 2) + 2); i++) {
        var randomLetter = String.fromCharCode(Math.round((Math.random() * (121 - 97)) + 97));
        randomName += randomLetter;
    }
    randomAge = Math.round(Math.random() * (60 - 20) + 20);
    randomSalary = Math.round(Math.random() * (9000 - 2000) + 2000);
    workers[number] = new employee(randomName, randomAge, randomSalary);
    randomNewEmployee(number - 1);
}
function giveHours() {
    for (var i = 0; i < workers.length; i++) {
        var regular = Math.round(Math.random() * (80) + 80), bonus = Math.round(Math.random() * (60 - 30) + 30), position = Math.round(Math.random() * (1) + 1);
        hoursOfWorking[i] = { regular: regular, bonus: bonus, education: position };
        if (position == 2) {
            workers[i].salary = (regular * 70) + (bonus * 90);
            sumWorkerSalary[i] = (regular * 70) + (bonus * 90);
        }
        else if (position == 1) {
            workers[i].salary = (regular * 40) + (bonus * 55);
            sumWorkerSalary[i] = (regular * 40) + (bonus * 55);
        }
    }
}
function orderSalary(newList) {
    var test = 0;
    for (var i = 0; i < newList.length - 1; i++) {
        if (test < newList[i] && newList[i] > newList[i + 1]) {
            test = newList[i];
            newList[i] = newList[i + 1];
            newList[i + 1] = test;
            i = -1;
        }
        else if (test >= newList[i] && newList[i] > newList[i + 1]) {
            test = newList[i];
            newList[i] = newList[i + 1];
            newList[i + 1] = test;
            i = -1;
        }
    }
}
// ------------------- create New Workers
randomNewEmployee(5);
// ------------------- give a random number to salary 
giveHours();
console.log(workers);
console.log(hoursOfWorking);
// ------------------- Get details about the worker - 0 = number of worker
console.log("-------------------------------------------------------------");
details(3);
console.log("-------------------------------------------------------------");
console.log(sumWorkerSalary); // before the order
// -------------------  order the high salary
orderSalary(sumWorkerSalary);
// ------------------- All the sum  Salary 
//console.log(sumWorkerSalary); // after the order
// ------------------- console log the info about the high salary
console.log("The high salary is : " + sumWorkerSalary[sumWorkerSalary.length - 1]);
