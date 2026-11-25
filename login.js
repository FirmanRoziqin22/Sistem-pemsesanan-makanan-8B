document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.noValidate = true;

    const $ = id => document.getElementById(id);
    const grup = id => $(id).closest(".form-group");

    const hapusError = g => {
        g.querySelector(".error-msg")?.remove();
        g.querySelector("input").classList.remove("invalid");
    };

    const tampilError = (g, pesan) => {
        g.querySelector("input").classList.add("invalid");
        g.insertAdjacentHTML("beforeend", `<small class="error-msg">${pesan}</small>`);
    };

    form.addEventListener("input", e => {
        const g = e.target.closest(".form-group");
        if (g) hapusError(g);
    });

    form.addEventListener("submit", e => {
        e.preventDefault();

        const v = {
            nama: $("nama").value.trim(),
            identitas: $("identitas").value.trim(),
            password: $("password").value
        };

        const cek = {
            nama: !v.nama && "Nama tidak boleh kosong.",
            identitas: !v.identitas
                ? "Email atau No. HP tidak boleh kosong."
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.identitas) && !/^(\+62|62|0)8[0-9]{8,11}$/.test(v.identitas)
                    && "Masukkan email atau nomor HP yang valid.",
            password: !v.password
                ? "Password tidak boleh kosong."
                : v.password.length < 6 && "Password minimal 6 karakter."
        };

        let valid = true;
        for (const [id, pesan] of Object.entries(cek)) {
            hapusError(grup(id));
            if (pesan) {
                tampilError(grup(id), pesan);
                valid = false;
            }
        }
        if (!valid) return;

        try {
            localStorage.setItem("userTecnoFOOD", JSON.stringify({
                nama: v.nama,
                identitas: v.identitas,
                ingat: form.ingat.checked
            }));
        } catch (err) {
            console.warn("Gagal menyimpan data login:", err);
        }

        window.location.href = "menuutama.html";
    });
});