const loginForm = document.getElementById("loginForm");

async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return alert("Error logging in: " + data.msg || "unknown error!");
    }

    //data has token and user, render or store accordingly.
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    //direct to the home page
    window.location.href = "./index.html";

    alert("Login successful");
  } catch (err) {
    console.log("Error while registering", err);
  }
}

loginForm.addEventListener("submit", handleLogin);
