/**
 * Hitung jumlah kata pada kalimat.
 * Jika terdapat special karakter, maka kata tersebut tidak dihitung.
 *
 * @returns {Number} Jumlah kata pada kalimat.
 */
export default function hitungJumlahKata(kalimat) {
  let jumlahKata = 0;

  const arrKata = kalimat.split(" ");

  arrKata.map((kata) => {
    if (kata.match(/[^a-zA-Z0-9\-,.!?]|[?](?=$)/g)) {
      jumlahKata;
    } else {
      jumlahKata++;
    }
  });

  return jumlahKata;
}

// Jawaban 1, output 5
const input1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
console.log(hitungJumlahKata(input1));

// Jawaban 2, output 3
const input2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
console.log(hitungJumlahKata(input2));

// Jawaban 3, output 4
const input3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";
console.log(hitungJumlahKata(input3));
