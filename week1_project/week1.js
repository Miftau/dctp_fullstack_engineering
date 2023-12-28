const userDataBase = {
    yttrium: {
        firstName: "Yusuf",
        lastName: "Muftaudeen",
        email: "miftaudeenb@gmail.com",
        verified: true,
        password: "Baba##thunday"
    }
}

function getUserDetails(){
    let username = prompt("Enter your username")
while(validateUsername(username) == false){
    if (username == null){
        return
    }
    username = prompt("The username must not be more than 10 characters, please enter a valid username")
    
}

let password = prompt("Enter your password")
while(validatePassword(password) == false){

    if (password == null){
        return
    }
    
}

    let confPassword = prompt("confirm password")
    while(confPassword != password){
        confPassword = prompt("Password mismatch, enter again")
    }

    console.log(username, password, confPassword)   

    // check if the credentials correlate with the one on the database

    const user = userDataBase[username]
    if (user == undefined) {
        alert("User no found!, Please register on the app")
        return
    }

    console.log(user)

}



function validateUsername(username){

    if (username.length > 10){
        return false
    } else{
        return 
    }
}

function validatePassword(password){

   if (password.length < 6 || password == username){
        return false
    } else{
        return true
    }


}

getUserDetails()
alert ("You have reached the end of the program")






