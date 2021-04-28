
// QUESTION 1
function askPassword(ok, fail) {
    let password = prompt("Password?", '')
    if (password == 'rockstar') ok.call(user)
    else fail.call(user);
}

let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`)
    },

    loginFail: function () {
        console.log(`${this.name} failed to log in`)
    }
}

// arrow function
askPassword(() => user.loginOk(), () => user.loginFail())

// using bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// bind using arrow function
askPassword(() => user.loginOk.bind(user)(),() =>  user.loginFail.bind(user)());

// using call
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

// using apply
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));





// QUESTION 2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();

