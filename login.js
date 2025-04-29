// Setup login event
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;
  const rememberMe = document.querySelector("#rememberMe").checked;

  // Set session persistence based on "Remember Me" checkbox
  const persistence = rememberMe
    ? firebase.auth.Auth.Persistence.LOCAL
    : firebase.auth.Auth.Persistence.SESSION;

  firebase.auth().setPersistence(persistence)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .then((userCredential) => {
      const user = userCredential.user;

      // Check if the email is verified
      if (user.emailVerified) {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to the homepage
      } else {
        alert("Please verify your email before logging in.");
        firebase.auth().signOut(); // Sign out the user if not verified
      }
    })
    .catch((error) => {
      // Handle errors
      if (error.code === "auth/user-not-found") {
        alert("No account found with this email. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        alert("Too many failed login attempts. Please try again later.");
      } else {
        alert("Login failed: " + error.message);
      }
    });
});
