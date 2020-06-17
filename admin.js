var admin_login={
    admin:'admin',
    password:'12345'
}
function admin_verification()
{
   var admin=document.getElementById('admin').value
   var password=document.getElementById('password').value
   var admin_entry={
       admin:admin,
       password:password
   }
   console.log(admin_entry,admin_login)
   if(admin_entry.admin===admin_login.admin && admin_entry.password===admin_login.password)
   {
       window.location.href="admin_panel.html"
    
   }
   else
   {
       alert("U are not supposed to enter the admin Panel")
   }
}





var admin_login_click=document.getElementById('login')
admin_login_click.addEventListener('click',admin_verification)