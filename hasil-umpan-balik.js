var dataTersimpan = localStorage.getItem("dataUmpanBalik");

if (dataTersimpan) {
    var data = JSON.parse(dataTersimpan);

    document.getElementById("hasilNama").textContent = data.nama;
    document.getElementById("hasilEmail").textContent = data.email;
    document.getElementById("hasilJenis").textContent = data.jenis;
    document.getElementById("hasilPesan").textContent = data.pesan;

    if (data.gambar) {
        document.getElementById("hasilGambar").src = data.gambar;
    } else {
        document.getElementById("areaGambar").style.display = "none";
    }
} else {
    document.querySelector(".makanan").innerHTML =
        "<h3>Belum ada data umpan balik.</h3>" +
        "<a href='umpan-balik.html'>Isi Formulir</a>";
}