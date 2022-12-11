function angka() {
  let x = document.getElementById("a").value;
  const Jawaban = document.getElementById("jawaban");

  if (x < 0 || x > 21) {
    alert("angka yang anda masukan tidak valid");
  } else if (x % 2 == 0) {
    var y = x / 2;
    for (i = y - 1; i > 1; i--) {
      y = y * i;
    }
    Jawaban.innerHTML = "Hasil faktorial dari " + x + " adalah " + y;
  } else if (x % 2 == 1) {
    var fNum = 0;
    var sNum = 1;
    var next;
    for (var i = 0; i < x; i++) {
      next = fNum + sNum;
      fNum = sNum;
      sNum = next;

      if (fNum >= x * 10) {
        break;
      }
      Jawaban.innerHTML = " " + fNum;
    }
  }

  window.addEventListener("DOMContentLoaded", function () {
    fill();
    setInterval(() => fill(), 10000);
  });
}
