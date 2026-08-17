function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
     if (!username || !password) {
      alert("Username and password are required.");
      return false;
    }
  
     alert(`Login successful! Welcome, ${username}`);
  
     window.location.href = 'appointments.html';
  
    return false; 
}
  