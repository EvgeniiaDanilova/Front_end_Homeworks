function func1() {
    let summ = +prompt('Введите число');
    let result = summ * 0.1;
    console.log(result)	
}

function func2() {
    let a = +prompt('Введите число 1');
    let b = +prompt('Введите число 2');
    console.log(Math.min(a,b));
}

function func3() {
    let summ = +prompt('Введите число');

    if(summ > 100) { 
        console.log("Число больше 100")
    } 
    else if(summ < 100) {
        console.log("Число меньше 100")
    } 
    else {
        console.log("Число равно 100")
    }
}

function func4() {
    let name = prompt('Введите имя');
    let age = +prompt('Введите возраст');
    if(age > 18) { 
        console.log(`Hello - ${name}`)
    } 
    else if(age < 18) {
        console.log(`Hi - ${name}`)
    } 
    
}