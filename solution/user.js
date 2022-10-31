const api = require('../api.js')
    
class User {
    constructor(id, login, email, password, isAdmin) {
        this.id = id;
        this.login = login;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    to_object() {
        return JSON.parse(`{"id": ${this.id},
        "login": "${this.login}",
        "email": "${this.email}",
        "password": "${this.password}",
        "isAdmin": ${this.isAdmin}}`)
    }

    dump() {
        console.log(`${this.id} ${this.login} ${this.email} ${this.password} ${this.isAdmin}`);
    }

    add() {
        api.addUser(this.to_object())
    }

    get(id) {
        var obj = api.getUser(id)
        this.id = obj.id;
        this.login = obj.login;
        this.email = obj.email;
        this.password = obj.password;
        this.isAdmin = obj.isAdmin;
    }

    update() {
        api.updateUser(this)
    }

    delete() {
        api.deleteUser(this.id)
    }

}
module.exports = User;