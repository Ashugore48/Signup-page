document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(name === '' || email === '' || password ==='' || confirmPassword === ''){
        throwError();
        return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const accessToken = generateAccessToken();

    const user = {
      name: name,
      email: email,
      password: password,
      accessToken: accessToken,
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/profile-page/profile.html";
  });

function generateAccessToken() {
  const tokenLength = 16;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let accessToken = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    accessToken += characters.charAt(randomIndex);
  }

  return accessToken;
}
function throwError(){
    document.getElementById('mandatory-error').style.display='block';
}