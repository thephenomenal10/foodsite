firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
      window.alert(user);
        window.location.href="../public/dashboard.html";
    }
    else{
      window.location.href="index.html";
    }
  });
  
      function login(){
  
        var userEmail = document.getElementById("email").value;
        var userPass = document.getElementById("password").value;
      
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
      
          window.alert("Error : " + errorMessage);
      
          // ...
        });
      
      }
      function logout(){
        firebase.auth().signOut();
        
      }