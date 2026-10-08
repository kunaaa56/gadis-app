document.getElementById('googleBtn').addEventListener('click', function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  const errorEl = document.getElementById('googleError');
  errorEl.innerText = '';

  // Google login nggak jalan kalau halaman dibuka lewat double-klik file
  if (window.location.protocol === 'file:') {
    errorEl.innerText = 'Buka lewat Go Live (http://127.0.0.1:5500) atau link deploy, bukan double-klik file.';
    return;
  }

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      const userRef = db.collection('users').doc(user.uid);

      // simpan data user kalau baru pertama kali masuk
      return userRef.get().then((doc) => {
        if (!doc.exists) {
          return userRef.set({
            name: user.displayName || '',
            email: user.email,
            createdAt: new Date()
          });
        }
      });
    })
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      if (error.code === 'auth/popup-closed-by-user') return;

      if (error.code === 'auth/unauthorized-domain') {
        errorEl.innerText = 'Domain belum diizinkan di Firebase (Authentication > Settings > Authorized domains).';
      } else if (error.code === 'auth/popup-blocked') {
        errorEl.innerText = 'Popup diblokir browser, izinkan popup lalu coba lagi.';
      } else {
        errorEl.innerText = 'Gagal masuk dengan Google (' + error.code + ')';
      }
      console.error(error);
    });
});