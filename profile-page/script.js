
const user = JSON.parse(localStorage.getItem("user"));
if (!user || !user.accessToken) {
  window.location.href = "/Signup-page/";
} else {
  document.getElementById("fullName").innerText = user.name;
  document.getElementById("email").innerText = user.email;
  document.getElementById("accessToken").innerText = user.accessToken;
  document.getElementById("password").innerText = user.password;

  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "/Signup-page/";
  });
}
