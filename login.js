function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "12345"){
    alert ("Login successfully");
    location = "home.html"
      }
      else{
        alert("Invalid username or password");
        }
      return false;
      }