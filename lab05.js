function question1(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++)
        if (array[index] > 20)
            sum += array[index];

    console.log(sum);
}


function question2(array) {
    let newArr = []
    for (let index = 0; index < array.length; index++)
        if (array[index].length >= 5 && array[index].includes('a'))
            newArr.push(array[index])

    console.log(newArr);
}

class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFullName(){
        return  this.firstName + ' ' + this.lastName;
    }

    getBirthDate(){
        return this.birthDate
    }

    getAge(){
        let age = this.birthDate.getTime() - Date.now(); 
        let ageDate = new Date(age); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


let numbers = [1, 50, 40, 3, 10]
question1(numbers)

let strings = ['awesome', 'and', 'fantastic', 'life']
question2(strings)

let p = new Person('John', 'Doe', new Date(2018, 1, 14));
let p1 = new Person('Jane', 'Doe', new Date(2000, 4, 4));
let p2 = new Person('Susan', 'Rodes', new Date(1997, 5, 20));
let p3 = new Person('James', 'Stewart', new Date(1978, 11, 21));
let p4 = new Person('Meryll', 'Streep', new Date(2001, 16, 30));

let people = [p, p1, p2, p3, p4]

function question3OlderThan20(people){
    let older20 = []
    people.forEach(element => {
        if(element.getAge() > 20)
            older20.push(element)
    });
    console.log(older20);
}

question3OlderThan20(people)


function question3BornAfter2000(people){
    let after2000 = []
    people.forEach(element => {
        if(element.getBirthDate().getUTCFullYear() > 2000)
            after2000.push(element.getFullName())
    });
    console.log(after2000);
}

question3BornAfter2000(people)