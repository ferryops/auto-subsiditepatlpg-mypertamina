# Cara Menjalankan

Source code ini berfungsi untuk mengisi secara otomatis progres penjualan di subsiditepatlpg mypertamina

## 1. Clone Repo

Clone repo ini

```bash
  git clone https://github.com/ferryops/auto-subsiditepatlpg-mypertamina.git
```

## 2. Install Dependensi

Install dependensi

```bash
  npm install
```

## 3. Ubah file .env copy

Ubah nama file .env copy menjadi .env, lalu edit isinya

```bash
TOKEN=isi dengan token bearer
API=""
```

## 4. Buat file dataUser.js

Buat file dengan nama dataUser.js, lalu isi dengan data user yang beli gas di tempat Anda, contoh:

```javascript
const dataUser = [
  { name: "Nama Pembeli", noKTP: "111111111111111" },
  { name: "Nama Pembeli", noKTP: "222222222222222" },
];
```

## Ingin berkontribusi ?

Silakan pull request
