const fs = require('fs')
    
function get_data() {
    
    const fileContents = fs.readFileSync('./data.json', 'utf8')

    return JSON.parse(fileContents)
}

function write_data(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data), 'utf8', err => {
        if (err) {
            console.log(`Error writing file: ${err}`)
          } else {
            console.log(`File is written successfully!`)
          }
    })
}

function addUser(user) {
    var json = get_data()
    json.push(user)
    write_data(json)
    return true
}

function getUser(id) {
    var json = get_data()

    for (let i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            return json[i]
        }
    }
    return null
}

function updateUser(user) {
    var json = get_data()

    for (let i = 0; i < json.length; i++) {
        if (json[i].id == user.id) {
            json[i] = user
            write_data(json)
            return true
        }
    }
    return false
}

function deleteUser(id) {
    var json = get_data()

    json = json.filter(element => element.id !== id)
    write_data(json)
    return true
}

function getUsers() {
    return get_data()
}

//console.log(`${json[i].id} ${id}`)

module.exports.addUser = addUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.getUsers = getUsers