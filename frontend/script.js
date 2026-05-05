// Sesuaikan URL ini jika backend di-deploy di cloud/server lain.
// Jika di lokal pakai docker-compose, biasanya localhost:5000 sudah cukup.
const API_BASE_URL = '/api';

// Fungsi untuk mengambil data katalog (GET)
async function fetchKatalog() {
    try {
        const response = await fetch(`${API_BASE_URL}/info`);
        const data = await response.json();

        // Update UI
        document.getElementById('judul-katalog').innerText = data.judul_katalog;
        document.getElementById('info-pemilik').innerText = `Pemilik: ${data.pemilik} | NIM: ${data.nim}`;

        renderItems(data.items);
    } catch (error) {
        console.error('Gagal mengambil data:', error);
        document.getElementById('judul-katalog').innerText = 'Gagal terhubung ke server';
    }
}

// Fungsi untuk me-render list ke dalam HTML
function renderItems(items) {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; // Kosongkan list lama
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        itemList.appendChild(li);
    });
}

// Fungsi untuk menambah item (POST)
async function tambahItem() {
    const inputElement = document.getElementById('new-item-input');
    const newItem = inputElement.value.trim();

    if (!newItem) {
        alert('Item tidak boleh kosong!');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/add-item`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: newItem })
        });

        const data = await response.json();

        if (response.ok) {
            // Update list dengan data terbaru dari server
            renderItems(data.items);
            inputElement.value = ''; // Kosongkan input
        } else {
            alert(data.error || 'Terjadi kesalahan saat menambah item');
        }
    } catch (error) {
        console.error('Gagal menambah data:', error);
        alert('Gagal terhubung ke server');
    }
}

// Jalankan fetchKatalog saat halaman pertama kali dimuat
window.onload = fetchKatalog;