function signing_in()
{
    //getting the values from the DOM for username and password
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value

    //Adding the content to the Object
    var verifying_details={
        username:username,
        password:password
    }

    //getting the array from the localstorage
    var user=localStorage.getItem('user')
    var register_user=JSON.parse(user)||[]
    console.log(register_user[0].username)
    

    for(i=0;i<register_user.length;i++)
    {
        if(register_user[i].username===verifying_details.username && register_user[i].password===verifying_details.password)
        {
            window.location.href="dashbord.html"
            break
        }
        else
        {
            alert("Wrong Username and password please try again!!!")
        }
    }



    
}


//add event listener for signing up the  from the values
var sign_in=document.getElementById('sign_in')
sign_in.addEventListener('click',signing_in)

