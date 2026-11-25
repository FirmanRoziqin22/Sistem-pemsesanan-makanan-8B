const hasilPesanan = document.getElementById("hasil-pesanan");
const totalPembayaran = document.getElementById("total-pembayaran");

// Mengambil data pesanan
let daftarPesanan = JSON.parse(
    localStorage.getItem("pesananTeknofood")
) || [];

// Menampilkan pesanan
function tampilkanPesanan() {
    hasilPesanan.innerHTML = "";
    let total = 0;

    daftarPesanan.forEach((item, index) => {
        let subtotal = item.harga * item.jumlah;
        total += subtotal;

        hasilPesanan.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
                <td>${item.jumlah}</td>
                <td>Rp ${subtotal.toLocaleString("id-ID")}</td>
            </tr>
        `;
    });

    if (daftarPesanan.length === 0) {
        hasilPesanan.innerHTML = `
            <tr>
                <td colspan="5">Belum ada pesanan</td>
            </tr>
        `;
    }

    totalPembayaran.textContent =
        "Total Pembayaran: Rp " + total.toLocaleString("id-ID");
}

// Membatalkan pesanan
function hapusSemuaPesanan() {
    if (confirm("Apakah kamu yakin ingin membatalkan pesanan?")) {
        localStorage.removeItem("pesananTeknofood");
        daftarPesanan = [];
        tampilkanPesanan();
    }
}

tampilkanPesanan();
