 // Handle feedback form submit
  document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  db.collection("feedbacks").add({
    email: email,
    comment: comment,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert("Feedback Sent! Thank you for helping us improve."); // <-- show alert
    window.location.href = "thankyou.html"; // <-- then redirect
  }).catch((error) => {
    alert("Failed to submit feedback: " + error.message);
  });
});
