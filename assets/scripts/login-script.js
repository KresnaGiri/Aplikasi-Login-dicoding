/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/* comment : membuat variabel untuk setiap element view. */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/* comment : membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = 'ngurah@gmail.com';
const expectedPassword = '12345678';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  const email = inputEmailElement.value ;
  const password = inputPasswordElement.value ;
    
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    /* comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* comment : jika sesuai maka program akan berpindah ke halaman home. */
        goToHome();
      } else {
        /* comment : namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
        showPopUp();
      }
});
