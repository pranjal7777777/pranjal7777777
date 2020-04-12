function msg()
{
    var userid=document.getElementById("userid");
    var pas=document.getElementById("pass");
    if(userid.value=="" || pas.value=="")
    {
        alert("this feild connot be left blank");
    }
    alert("are you sure you want to submit");
}