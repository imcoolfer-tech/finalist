document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (!signUpButton || !signInButton || !container) return;

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  // === Ketika form login dikirim ===
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // biar gak reload
    // Kamu bisa tambahkan validasi di sini kalau mau
    window.location.href = "../main-page/index.html"; 
    // Ganti path ini sesuai lokasi folder halaman utama kamu
  });

  // === Ketika form register dikirim ===
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulasi pembuatan akun
    alert("Akun berhasil dibuat! Silakan login.");
    container.classList.remove('right-panel-active');
  });
});
