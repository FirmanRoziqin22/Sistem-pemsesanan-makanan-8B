const resetForm = document.getElementById("resetForm");

resetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const kodeInput = document.getElementById("kode");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    const email = emailInput.value.trim();
    const kode = kodeInput.value.trim();
    const password = passwordInput.value;

    message.className = "";
    message.textContent = "";

    if (!email || !kode || !password) {
        message.textContent = "Semua kolom harus diisi!";
        message.classList.add("error");
        return;
    }

    if (!/^\d{6}$/.test(kode)) {
        message.textContent = "Kode verifikasi harus terdiri dari 6 angka!";
        message.classList.add("error");
        kodeInput.focus();
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password baru minimal 8 karakter!";
        message.classList.add("error");
        passwordInput.focus();
        return;
    }

    message.textContent = "Validasi berhasil. Fitur ini perlu dihubungkan ke server untuk memperbarui password.";
    message.classList.add("success");
});
