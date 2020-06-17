var register_user=[]
var admin=[{'admin':'admin','pasword':'12345'}]



class User {
    constructor(name, email, mobile, age, username, password) {

        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.age = age;
        this.username = username;
        this.password = password;

    }
}

function registering()
{
   var user_details=document.querySelectorAll('.user_data')
    var newuser=new User()
    //console.log(user_details[0].value)
    i=0
    for(key in newuser)
    {
        newuser[key]=user_details[i].value
        user_details[i].value=""
        i++
    }
    
    //console.log(register_user)
    //Getting the user array from the local storage.Parse is used for converting the strings to objects
    var user=localStorage.getItem('user')
    //new array has been created and added all the local storage content to the array
    register_user=JSON.parse(user)||[]
    register_user.push(newuser)
    //for adding the userdata array into the localstorage we need to covert in to strings and send the data to local storage using setitem
    var user_content=JSON.stringify(register_user)
    localStorage.setItem('user',user_content)




}

var register=document.getElementById('register')
register.addEventListener('click',registering)


var sign_in=document.getElementById('sign_in')
sign_in.addEventListener('click',signing_in)