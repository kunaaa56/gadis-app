document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      errorEl.innerText = 'Email atau password salah.';
    });
});