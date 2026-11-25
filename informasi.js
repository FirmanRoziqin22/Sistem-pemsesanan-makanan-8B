const jamBuka = 8;
const jamTutup = 21;

function dua(angka) {
    return String(angka).padStart(2, "0");
}

function tampilkanWaktu() {
    const sekarang = new Date();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();
    const detik = sekarang.getSeconds();

    let salam;
    if (jam >= 5 && jam < 11) {
        salam = "Selamat Pagi!";
    } else if (jam >= 11 && jam < 15) {
        salam = "Selamat Siang!";
    } else if (jam >= 15 && jam < 18) {
        salam = "Selamat Sore!";
    } else {
        salam = "Selamat Malam!";
    }

    const elemenStatus = document.getElementById("status-buka");
    if (jam >= jamBuka && jam < jamTutup) {
        elemenStatus.innerText = "Kami BUKA (08.00 - 21.00)";
        elemenStatus.className = "status-buka buka";
    } else {
        elemenStatus.innerText = "Kami TUTUP (buka 08.00 - 21.00)";
        elemenStatus.className = "status-buka tutup";
    }

    document.getElementById("salam").innerText = salam;
    document.getElementById("jam").innerText =
        "Sekarang pukul " + dua(jam) + ":" + dua(menit) + ":" + dua(detik);
}

tampilkanWaktu();
setInterval(tampilkanWaktu, 1000);

const daftarMenu = [
    { nama: "Burger", kategori: "Fast Food", harga: 30000, deskripsi: "Burger daging dengan keju, tomat, dan selada." },
    { nama: "Pizza", kategori: "Fast Food", harga: 25000, deskripsi: "Pizza panas dengan topping pepperoni." },
    { nama: "Kebab", kategori: "Fast Food", harga: 25000, deskripsi: "Kebab isi daging dan sayur dengan saus mayo." },
    { nama: "Nasi Goreng", kategori: "Makanan Berat", harga: 15000, deskripsi: "Nasi goreng dengan telur mata sapi dan kerupuk." },
    { nama: "Ayam Geprek", kategori: "Makanan Berat", harga: 10000, deskripsi: "Ayam crispy yang digeprek dengan sambal." },
    { nama: "Mie Ayam", kategori: "Makanan Berat", harga: 17000, deskripsi: "Mie dengan topping ayam, sawi, dan kuah." },
    { nama: "Spageti", kategori: "Makanan Berat", harga: 20000, deskripsi: "Spageti dengan saus tomat yang gurih." },
    { nama: "Salad", kategori: "Sehat", harga: 25000, deskripsi: "Salad sayur segar dengan potongan buah." }
];

function tampilkanMenu() {
    const pilihan = document.getElementById("pilih-selera").value;
    let hasil = daftarMenu;

    if (pilihan !== "semua") {
        hasil = daftarMenu.filter(function (menu) {
            return menu.kategori === pilihan;
        });
    }

    let html = "";
    hasil.forEach(function (menu) {
        html += '<div class="kartu-menu">' +
            '<h3>' + menu.nama + '</h3>' +
            '<p>' + menu.deskripsi + '</p>' +
            '<span>Rp ' + menu.harga.toLocaleString("id-ID") + '</span>' +
            '</div>';
    });

    document.getElementById("hasil-menu").innerHTML = html;
    document.getElementById("jumlah-menu").innerText = "Menampilkan " + hasil.length + " menu";
}

document.getElementById("pilih-selera").addEventListener("change", tampilkanMenu);

tampilkanMenu();