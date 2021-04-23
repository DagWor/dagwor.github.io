function question1(array) {
    let sum = array.filter(a => a > 20).reduce((a, b) => a + b, 0)
    console.log("The sum of digits greater than 20 : ", sum);
}


function question2(array) {
    let newArr = array
        .filter(a => a.length >= 5 && a.includes('a'))
        .reduce((newArray, current) =>{
            [...newArray, current]
            newArray.push(current)
            return newArray
        }, [])
    console.log("Question 2 : ", newArr);
}

function Person(firstName, lastName, birthDate) {

    this.firstName = firstName
    this.lastName = lastName
    this.birthDate = birthDate

    this.getFullName = function(){
        return  this.firstName + ' ' + this.lastName;
    }

    this.getBirthDate = function(){
        return this.birthDate
    }

    this.getAge = function(){
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
    let older20 = people.filter(p => p.getAge() > 20).reduce((newArray, current) =>{
        [...newArray, current]
        newArray.push(current)
        return newArray
    }, [])
    console.log("People older than 20 : ", older20);
}

question3OlderThan20(people)


function question3BornAfter2000(people){
    let after2000 = people
        .filter(p => p.getBirthDate().getUTCFullYear() > 2000)
        .map(p => p.getFullName())
    console.log("People born after 2000 : ", after2000);
}

question3BornAfter2000(people)