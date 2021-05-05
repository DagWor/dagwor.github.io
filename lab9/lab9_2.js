class Student {
    constructor(studentID) {
        this.studentID = studentID;
        this.answers = [];
    }

    addAnswer(answer) {
        this.answers.push(answer)
    }

    get studentID() {
        return this._studentID
    }

    get answers() {
        return this._answers
    }

    set answers(answers) {
        this._answers = answers
    }

    set studentID(sID) {
        this._studentID = sID
    }

}

class Question {
    constructor(qID, answer) {
        this.qID = qID
        this.answer = answer
    }

    checkAnswer(ans) {
        if (this.answer === ans) return 1
        else return 0
    }

    get answer() {
        return this._answer
    }

    get qID() {
        return this._qID
    }

    set answer(answer) {
        this._answer = answer
    }

    set qID(qid) {
        this._qID = qid
    }
}

class Quiz {
    constructor(questions, students) {
        this.students = students
        this.questions = questions
    }

    scoreStudentBySid(sID) {
        let student = null;
        this.students.forEach(element => {
            if (element.studentID === sID){
                student = element
            } 
        });

        let studentAnswers = student.answers
        let score = 0;

        for (let i = 0; i < studentAnswers.length; i++) {
            for (let j = 0; j < this.questions.length; j++) {
                if (this.questions[j].qID === studentAnswers[i].qID) {
                    score += this.questions[j].checkAnswer(studentAnswers[i].answer)
                }
            }

        }
        return score
    }

    getAverageScore(){
        let sum = 0
        this.students.forEach(element => {
            sum += this.scoreStudentBySid(element.studentID)
        });

        return sum/this.students.length
    }
}


let student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
let student2 = new Student(11);


student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
let students = [student1, student2];


const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

