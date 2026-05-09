function register() {
    let user = document.getElementById('logUser').value;
    let pass = document.getElementById('logPass').value;
    
    if (user === "" || pass === "") {
        alert("Please fill in both fields");
        return;
    }
    
    localStorage.setItem(user, pass);
    alert("Registration Successful! Now click Login.");
}

function login() {
    let user = document.getElementById('logUser').value;
    let pass = document.getElementById('logPass').value;
    
    if (localStorage.getItem(user) === pass && user !== "") {
        // Hide the login card and show the secured content
        document.querySelector('.login-card').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
    } else {
        alert("Invalid Credentials. Please register first!");
    }
}