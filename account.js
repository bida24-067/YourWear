 // Signup handler
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    // Stronger password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Send email verification
        user.sendEmailVerification()
          .then(() => {
            alert("Account created successfully! Please verify your email.");
            window.location.href = "login.html";
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        alert("Signup failed. Please try again.");
      });
  });
