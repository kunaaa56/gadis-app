document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const errorEl = document.getElementById('registerError');

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      return db.collection('users').doc(uid).set({
        name: name,
        email: email,
        createdAt: new Date()
      });
    })
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      errorEl.innerText = error.message.includes('email-already')
        ? 'Email sudah terdaftar.'
        : 'Pendaftaran gagal, coba lagi.';
    });
});