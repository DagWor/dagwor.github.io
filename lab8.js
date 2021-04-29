// QUESTION 1
let student = {
    firstName: "",
    lastName: "",
    grades: [],
    computeAverage: function () {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    },
    inputNewGrade: function (grade) {
        return this.grades.push(grade)
    }
}

let student5 = Object.create(student)
student5.firstName = "Benj"
student5.lastName = "fame"
student5.inputNewGrade(69)
student5.inputNewGrade(79)
student5.inputNewGrade(89)
student5.inputNewGrade(99)

let student6 = Object.create(student)
student6.firstName = "James"
student6.lastName = "Acaster"
student6.inputNewGrade(69)
student6.inputNewGrade(79)
student6.inputNewGrade(89)
student6.inputNewGrade(59)


let list1 = [student5, student6]

function computeAllAverageGrade1(students) {
    let sum = 0;
    students.forEach((student) => {
        sum += student.computeAverage()
    });
    return sum / students.length
}

console.log("Question 1 : " + computeAllAverageGrade1(list1));




// QUESTION 2
function Student(fname, lname, grades) {
    this.firstName = fname,
        this.lastName = lname,
        this.grades = grades
}

let student1 = new Student("dan", "miller", [20, 50, 60])
let student2 = new Student("jane", "kits", [40, 50, 60])
let student3 = new Student("soph", "smites", [26, 40, 60])
let student4 = new Student("hugh", "lavender", [78, 50, 60])

let list = [student1, student2, student3, student4]

Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
}

Student.prototype.inputNewGrade = function () {
    return this.grades.push(grade)
}

function computeAllAverageGrade(students) {
    let sum = 0;
    students.forEach(function (student) {
        sum += student.computeAverageGrade()
    });
    return sum / students.length
}
console.log("Question 2 : " + computeAllAverageGrade(list))




// QUESTION 3
Array.prototype.sort = function () {
    let arr = [...this]
    let len = arr.length;

    for (let i = len - 1; i >= 0; i--)
        for (let j = 1; j <= i; j++)
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }

    return arr;
}

let o = [8, 2, 5, 6]

console.log("Question 3 : " + o.sort());



// QUESTION 4
function SingleLinkedList() {
    this.head = null,
        this.size = 0
}

function Node(x) {
    this.element = x,
        this.next = null
}

SingleLinkedList.prototype.add = function (x) {
    let node = new Node(x);
    let current;

    if (this.head == null) this.head = node;
    else {
        current = this.head;

        while (current.next) current = current.next;
        current.next = node;
    }
    this.size++;
}

SingleLinkedList.prototype.remove = function (x) {
    let current = this.head;
    let prev = null;

    while (current != null) {
        if (current.element === x) {
            if (prev == null) this.head = current.next;
            else prev.next = current.next;

            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

SingleLinkedList.prototype.print = function () {
    let current = this.head;
    let string = "{";
    while (current.next) {
        string += current.element + ", ";
        current = current.next;
    }
    console.log(string + current.element + "}");
}

console.log();
console.log("Question 4")
let c = new SingleLinkedList()
c.add(1);
c.add(2);
c.add(3);
c.print();
c.remove(2);
c.print();


