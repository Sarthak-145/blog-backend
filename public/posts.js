const token = localStorage.getItem(token);
async function loadPost() {
  try {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();

    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    data.post.forEach((post) => {
      const el = document.createElement("div");
      el.className = "bg-white shadow-md rounded-lg p-4";
      el.innerHTML = `
                    <h2 class= "text-lg font-semibold">${post.title}</h2>
                    <p class="text-gray-600">${post.content}</p>
                    <p class="text-sm text-gray-400">By ${post.username}</p>
                    `;
      postsDiv.appendChild(el);
    });
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
}
loadPost();
//for createPost
const form = document.getElementById("postForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  try {
    const res = await fetch("http://localhost/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
        Authorization: "Bearer" + token,
      },
      body: JSON.stringify({ title, content }),
    });

    if (!res.ok) throw new Error("Failed to create post");
    await loadPost();
    form.reset();
  } catch (err) {
    console.log("Error creating post", err);
  }
});

//conditional rendering
const authBtns = document.getElementById("authBtn");
const logOutBtn = document.getElementById("logOutBtn");

//when user has logged in
if (token) {
  authBtns.style.display = "none";
} else {
  logOutBtn.style.display = "none";
  post.style.display = "none";
}
