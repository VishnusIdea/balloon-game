function validate()
{
  
    var Enterusername=document.getElementById("username").value;
    var Enterpassword=document.getElementById("password").value;
  if(Enterusername.length<20 && Enterusername!="" && Enterpassword.length<8 && Enterpassword!="")
  {
    alert("login succesfully");
    window.location.assign("25gameindex.html");

  }
  else{
    alert("login failed");
  }
}