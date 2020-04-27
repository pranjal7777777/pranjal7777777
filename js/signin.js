function msg()
{
    var userid=document.getElementById("userid");
    var pas=document.getElementById("pass");
    if(userid.value.trim()=="")
    {
        alert("username connot be left blank");
        userid.style.border ="solid 2px red";
    }
    else if(pas.value.trim()=="")
    {
        alert("password connot be left blank");
        pas.style.border ="solid 2px red";
    }
    else if(userid.value.trim().length<7)
    {
        alert("incorrect username")
    }
    else if(pas.value.trim().length<5)
    {
        alert("incorrect password")
    }
    else if(userid.value.trim().length>=7||pas.value.trim().length>=5)
    {
        alert("login sucessfull")
    }
    else
    {
    alert("are you sure you want to submit");
    }
}