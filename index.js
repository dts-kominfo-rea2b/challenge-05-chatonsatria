const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (names, sortMethod) => {
  let sortedName = sortMethod(names)
  // cek log nama yang di passing
  console.log("Hasil Sorting Ke Sort Function", sortedName)
  // variable baru simpan nama dengan nomor
  let sortedNamesWithNumber = []
  let number = 1;
  sortedName.forEach(data => {
    sortedNamesWithNumber.push(`${number++}. ` + data)
  });
  return sortedNamesWithNumber
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => {
  console.log("Ascending",names.sort())
  return names.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => {
  console.log("Descending", names.sort().reverse())
  return names.sort().reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
