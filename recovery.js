 document.getElementById('resetForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    auth.sendPasswordResetEmail(email)
      .then(() => {
        messageDiv.className = 'alert alert-success';
        messageDiv.textContent = 'Password reset email sent! Check your inbox.';
        messageDiv.classList.remove('d-none');
      })
      .catch((error) => {
        messageDiv.className = 'alert alert-danger';
        messageDiv.textContent = 'Error: ' + error.message;
        messageDiv.classList.remove('d-none');
      });
  });