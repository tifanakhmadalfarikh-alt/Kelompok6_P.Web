/**
 * Logika JavaScript untuk Form Pemeriksaan Pra-Operasi - OPTi-MA
 */

document.addEventListener('DOMContentLoaded', function () {
    const formPemeriksaan = document.getElementById('formPemeriksaan');

    if (formPemeriksaan) {
        formPemeriksaan.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah form langsung submit bawaan HTML

            // Ambil nilai dari input penting
            const namaOperator = document.getElementById('nama').value.trim();
            const jenisAlat = document.getElementById('jenis_alat').value;
            const nomorUnit = document.getElementById('nomor_unit').value.trim();
            const hourMeter = document.getElementById('hm').value.trim();

            // Validasi sederhana
            if (!namaOperator || !jenisAlat || !nomorUnit || !hourMeter) {
                alert('Mohon lengkapi semua data pada Identitas Pemeriksaan!');
                return;
            }

            if (hourMeter <= 0) {
                alert('Hour Meter (HM) awal harus bernilai angka positif yang valid.');
                document.getElementById('hm').focus();
                return;
            }

            // Konfirmasi pengiriman laporan ke supervisor
            const konfirmasi = confirm(`Konfirmasi Laporan:\n\nOperator: ${namaOperator}\nUnit: ${nomorUnit.toUpperCase()}\nHM: ${hourMeter}\n\nKirim laporan checklist ini ke Supervisor?`);

            if (konfirmasi) {
                // Tampilkan pesan sukses sementara
                alert('Laporan pemeriksaan berhasil dikirim ke Supervisor!');
                
                // Arahkan kembali ke halaman dashboard operator
                window.location.href = 'dashboard_operator.html';
            }
        });
    }
});