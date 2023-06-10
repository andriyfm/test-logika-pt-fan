/**
 * Menghitung jumlah pasang kaos kaki yang dapat dijual oleh sales.
 *
 * @returns {Number} Jumlah pasang kaos kaki yang dapat dijual.
 */
export default function sockMerchant(ar) {
  let count = 0;
  let temp = [];
  for (let i = 0; i < ar.length; i++) {
    if (temp.includes(ar[i])) {
      temp.splice(temp.indexOf(ar[i]), 1);
      count++;
    } else {
      temp.push(ar[i]);
    }
  }
  return count;
}

// Jawaban 1, output 3
const input1 = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
console.log(sockMerchant(input1));

// Jawaban 2, output 6
const input2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
console.log(sockMerchant(input2));

// Jawaban 3, output 4
const input3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
console.log(sockMerchant(input3));
