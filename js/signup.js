function msg()
{
    var usrn=document.getElementById("usrn");
    if(usrn.value=="")
    {
        alert("usrename cannot be left blank");
        return false;
    }
    else 
    return true;
    //alert("are you sure you want to submit");
}