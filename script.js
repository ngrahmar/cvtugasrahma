
// Menjalankan jQuery setelah halaman selesai dimuat
$(document).ready(function () {

    // Tombol untuk menyembunyikan informasi kontak
    $("#hide").click(function () {
        $("#infoKontak").hide(500);
    });

    // Tombol untuk menampilkan informasi kontak
    $("#show").click(function () {
        $("#infoKontak").show(500);
    });

    // Tombol untuk memberikan efek fade
    $("#fade").click(function () {
        $("#infoKontak").fadeToggle(700);
    });

});
