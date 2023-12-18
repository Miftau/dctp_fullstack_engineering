function getUserDetails(){
    let username = prompt("Enter your username")
while(validateUsername(username) == false){
    if (username == null){
        return
    }
    username = prompt("The username must not be more than 10 characters, please enter a valid username")
    
    return
}


let password = prompt("Enter your password")
while(validatePassword(password) == false){

    if (password == null){
        return
    }
    
    else if(password.length < 6){
        password = prompt("The password must be more than 6 characters, please enter a valid password")
    }

    else if (password == username) {
        password = prompt("You cannot use username as a password, enter a valid password")
    }
}
return
}


function validateUsername(username){
    if (username == null){
        return 
    }

    else if (username.length > 10){
        return false
    } else{
        return 
    }
}

function validatePassword(password){
    if (password == null){
        return 
    }

    else if (password.length < 6 || password == username){
        return false
    } else{
        return true
    }

}

getUserDetails()

