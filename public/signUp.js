const signUpForm = document.getElementById("signUpForm");
async function handleSignUp(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();
    console.log("Signup respose: ", data);

    if (!res.ok) {
      return alert("Error singing up: " + data.msg || "unkown error");
    }
    alert("Sing Up successful, you can login now");
  } catch (err) {
    console.log("Error while registering", err);
  }
}

signUpForm.addEventListener("submit", handleSignUp);
