function check() {
      if (form1.userid.value == "akm4h" && form1.pwd.value == "akmal") {
        document.location.href = "index23.html";
      }
      else {
        alert("Incorrect Username or Password");
        event.preventDefault();
        return false;
      }
    } 