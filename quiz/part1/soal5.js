//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let result = "";
  
  for (let i = 0; i < kata.length; i++) {
    let char = kata[i];
    
    if (char.match(/[a-z]/i)) {
      let code = kata.charCodeAt(i);
      let offset = char === char.toUpperCase() ? 65 : 97;
  
      let newCode = ((code - offset + 1) % 26 + 26) % 26 + offset;
      result += String.fromCharCode(newCode);
    } else {
      result += char;
    }
  }
  
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu