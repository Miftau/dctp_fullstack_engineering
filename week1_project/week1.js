function getUserDetails(){
    let username = prompt("Enter your username")
while(validateUsername(username) == false){
    username = prompt("The username must not be more than 10 characters, please enter a valid username")
}


let password = prompt("Enter your password")
while(validatePassword(password) == false){
    password = prompt("The password must be more than 6 characters, please enter a valid password")

    if (password == username) {
        password = prompt("You cannot username as a password, enter a valid password")
    }
}

}


function validateUsername(username){
    if (username == false){
        return false
    }

    else if (username.length > 10){
        return false
    } else{
        return true
    }
}

function validatePassword(password){
    if (password == null){
        return false
    }

    else if (password.length < 6 || password == username){
        return false
    } else{
        return true
    }

}

