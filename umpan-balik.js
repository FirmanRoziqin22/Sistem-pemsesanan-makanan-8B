var form = document.getElementById("feedbackForm");
var pesanSukses = document.getElementById("pesanSukses");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var jenis = document.getElementById("jenis").value;
    var pesan = document.getElementById("pesan").value;
    var fileGambar = document.getElementById("gambar").files[0];

    // Fungsi untuk menyimpan data lalu pindah halaman
    function simpanDanPindah(gambarBase64) {
        var data = {
            nama: nama,
            email: email,
            jenis: jenis,
            pesan: pesan,
            gambar: gambarBase64
        };

        localStorage.setItem("dataUmpanBalik", JSON.stringify(data));
        pesanSukses.textContent = "Umpan balik berhasil dikirim!";

        setTimeout(function () {
            window.location.href = "hasil-umpan-balik.html";
        }, 800);
    }

    if (fileGambar) {
        var reader = new FileReader();

        reader.onload = function (e) {
            simpanDanPindah(e.target.result);
        };

        reader.readAsDataURL(fileGambar);
    } else {
        simpanDanPindah("");
    }
});