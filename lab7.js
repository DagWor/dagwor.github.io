
// QUESTION 1
function askPassword(ok, fail) {
    let password = prompt("Password?", '')
    if(password == 'rockstar') ok.call(user)
    else fail.call(user);
}

let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`)
    },

    loginFail: function() {
        console.log(`${this.name} failed to log in`)
    }
}

// arrow function
askPassword(() => user.loginOk(), () => user.loginFail())

// bind
let fail = user.loginFail.bind(user)
let ok = user.loginOk.bind(user)
askPassword(ok, fail)

// call
askPassword(user.loginOk, user.loginFail)





// QUESTION 2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();

