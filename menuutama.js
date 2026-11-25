document.addEventListener("DOMContentLoaded", () => {
    const jumlah = document.getElementById("jumlah");
    let total = 0;

    document.querySelectorAll(".kartu .tombol").forEach(tombol => {
        tombol.addEventListener("click", () => {
            const nama = tombol.closest(".kartu").querySelector("h3").textContent;

            total++;
            jumlah.textContent = total;

            tombol.textContent = "Ditambahkan ✓";
            setTimeout(() => (tombol.textContent = "Pesan"), 1000);

            console.log(nama + " ditambahkan ke keranjang");
        });
    });
});