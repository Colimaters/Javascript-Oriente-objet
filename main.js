const User = require('./user.js')
const api = require('./api.js')

function ex1() {
    var u = new User(0, "Darius", "darius1.morel@epitech.eu", "vouav", true);
    console.log(u)
}

function ex2() {
    var u = new User(0, "Darius", "darius1.morel@epitech.eu", "vouav", true);
    u.dump()
}

function ex3() {
    var u = new User(124, "login", "mail@epitech.eu", "password", true);
    u.add()
    console.log(api.getUser(124))
    u.id = 124
    u.login = "ENFAITNON"
    u.mail = "ptdr@fun.com"
    u.password = "pastouche"
    u.isAdmin = false
    u.update()
    console.log(api.getUser(124))
    u.delete()
    console.log(api.getUser(124))
}

function main() {
    const test = {
        "ex1": ex1,
        "ex2": ex2,
        "ex3": ex3
    }
    const ex = process.argv[2]

    if (process.argv.length != 3) {
        console.log("Il faut 1 argument")
        return
    }
    if (!ex in test) {
        console.log("L'argument ne correspond pas à un exercice")
        return
    }
    test[ex]()
}

main()
