function penjumlahan(bil1, bil2) {
  return bil1 + bil2
}

let angka1_tag = document.getElementById("angka1")
let angka2_tag = document.getElementById("angka2")
let hasil_tag = document.getElementById("hasil")
let btn_tambah = document.getElementById("btn-tambah")

btn_tambah.addEventListener("click", function() {
  let angka1 = Number(angka1_tag.value)
  let angka2 = Number(angka2_tag.value)
  let hasil = penjumlahan(angka1, angka2)

  hasil_tag.value = hasil
})